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
	let connection = await mongoClient.connect();
	console.log("Creating collections...");
	const database = mongoClient.db(databaseName);

	database.createCollection(postCollection);
	database.createCollection(userCollection);
	database.createCollection(commentCollection);
}

/**
 * add() Adds the routes to the Express server instance.
 * @param {Express} server Express server instance to add routes to.
 */
function add(server) {
	initialConnection();

	// render main page.
	server.get('/', function(req, resp) {
		resp.render('main', {
			layout: 'index',
			title: 'rabble'
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