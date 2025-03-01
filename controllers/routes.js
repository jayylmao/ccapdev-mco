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
		let cursor = posts.find().sort({ votes: -1 }).limit(10);
		let vals = await cursor.toArray();

		resp.render('main', {
			layout: 'index',
			pageTitle: 'rabble',
			posts: vals
		});
	});

	// render post page.
	server.get('/post/:id([0-9a-fA-F]{24})', async function(req, resp) {
		const dbo = mongoClient.db(databaseName);
		const posts = dbo.collection(postCollection);

		console.log("id: " + req.params.id);

		let post = await posts.findOne({
			_id: ObjectId.createFromHexString(req.params.id)
		});

		if (!post) {
			return resp.status(404).send('Post not found.');
		}

		console.log(post);
		
		resp.render('post', {
			layout: 'index',
			pageTitle: 'rabble - ' + post.title,
			post: post
		});

	});

	// render tags page.
	server.get('/tag', function(req, resp) {

	});

	// render user page.
	server.get('/user', function(req, resp) {

	});
}

module.exports.add = add;