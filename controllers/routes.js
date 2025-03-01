const { MongoClient } = require('mongodb') ;
const databaseURL = 'mongodb://127.0.0.1:27017/';
const mongoClient = new MongoClient (databaseURL);

function add(server) {
	// render main page.
	server.get('/', function(req, resp) {
		resp.render('main', {
			layout: 'index',
			title: 'rabble',
			posts: posts
		});
	});
}
