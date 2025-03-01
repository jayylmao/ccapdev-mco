const { MongoClient } = require('mongodb') ;
const databaseURL = 'mongodb://127.0.0.1:27017/';
const mongoClient = new MongoClient (databaseURL);

const databaseName = 'rabble';
const postCollection = 'posts';
const userCollection = 'user';
const commentCollection = 'comments';

/**
 * initialConnection() starts a connection to the Mongo database and initializes
 * the collections if the database does not contain them.
 */
async function initialConnection() {
	let con = await mongoClient.connect();
	console.log("Creating collections...");
	const dbo = mongoClient.db(databaseName);

	dbo.createCollection(postCollection);
	dbo.createCollection(userCollection);
	dbo.createCollection(commentCollection);
}

/**
 * add() Adds the routes to the Express server instance.
 * @param {Express} server Express server instance to add routes to.
 */
function add(server) {
	initialConnection();

	// render main page.
	server.get('/', async function(req, resp) {
		const dbo = mongoClient.db(databaseName);
		const posts = dbo.collection(postCollection);

		let query = {
			tags: req.body.tags,
			postCreator: req.body.postCreator,
			datePosted: req.body.datePosted,
			title: req.body.title,
			content: req.body.content,
			votes: req.body.votes
		};

		// get 10 most voted posts.
		let cursor = posts.find().sort({ votes: -1 }).limit(10);
		let vals = await cursor.toArray();

		console.log(vals);
		
		resp.render('main', {
			layout: 'index',
			title: 'rabble',
			posts: vals
		});
	});

	// render post page.
	server.get('/post', function(req, resp) {
		resp.render('post_viewer', {
			layout: 'index',
			title: 'rabble - post',
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