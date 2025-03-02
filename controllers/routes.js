const { MongoClient, ObjectId } = require('mongodb') ;
const databaseURL = 'mongodb://127.0.0.1:27017/';
const mongoClient = new MongoClient(databaseURL);

const databaseName = 'rabble';
const postCollection = 'posts';
const userCollection = 'user';
const commentCollection = 'comments';

/**
 * initialConnection() starts a connection to the Mongo database and initializes
 * the collections if the database does not contain them.
 */
async function initialConnection() {
	await mongoClient.connect();
	console.log('Creating collections...');
	const dbo = mongoClient.db(databaseName);

	dbo.createCollection(postCollection);
	dbo.createCollection(userCollection);
	dbo.createCollection(commentCollection);
}
initialConnection();

/**
 * add() Adds the routes to the Express server instance.
 * @param {Express} server Express server instance to add routes to.
 */
function add(server) {
	// render main page.
	server.get('/', async function(req, resp) {
		const dbo = mongoClient.db(databaseName);
		const posts = dbo.collection(postCollection);

		// get 10 most voted posts.
		let cursor = posts.aggregate([
			{ $sort: { votes: -1 } }, 			// sort posts by descending.
			{ $limit: 10 }, 					// only get 10.
			{ $lookup: {
				from: userCollection,			// get post creator from user collection.
				localField: "postCreator",		// search query is post creator id in post collection.
				foreignField: "_id",			// search in _id field in user collection.
				as: "postCreatorObj"			// save results to postCreatorObj field in post.
			}},
			{ $unwind: "$postCreatorObj" },	// convert array to object.
			{ $project: {						// only include username.
				"_id": 1,
				"tags": 1,
				"postCreator": 1,
				"datePosted": 1,
				"title": 1,
				"content": 1,
				"votes": 1,
				"postCreatorObj.username": 1,
				"postCreatorObj.profileImg": 1
			}}
		]);
		let vals = await cursor.toArray();

		console.log(vals);

		resp.render('main', {
			layout: 'index_layout',
			pageTitle: 'rabble',
			posts: vals
		});
	});

	// render post page.
	server.get('/post/:id([0-9a-fA-F]{24})', async function(req, resp) {
		const dbo = mongoClient.db(databaseName);
		const posts = dbo.collection(postCollection);

		// find post with id specified in url.
		let post = await posts.findOne({
			_id: ObjectId.createFromHexString(req.params.id)
		});

		if (!post) {
			return resp.status(404).send('Post not found.');
		}

		resp.render('post', {
			layout: 'post_viewer_layout',
			pageTitle: 'rabble - ' + post.title,
			post: post
		});

	});

	// render tags page.
	server.get('/tag', async function(req, resp) {

	});

	// render user page.
	server.get('/user/:username', async function(req, resp) {
		const dbo = mongoClient.db(databaseName);
		const users = dbo.collection(userCollection);
		const posts = dbo.collection(postCollection);

		let user = await users.findOne({
			username: req.params.username
		});

		let cursor = posts.aggregate([
			{ $sort: { datePosted: -1 } },
			{ $lookup: {
				from: postCollection,
				localField: "postCreator",
				foreignField: "_id",
				as: "posts"
			}},
			{ $unwind: "$posts" }
		]);

		let postsArray = cursor.toArray();

		console.log(postsArray);

		resp.render('profile_page', {
			layout: 'user_profile_layout',
			pageTitle: 'rabble - ' + req.params.username
		});
	});
}

module.exports.add = add;