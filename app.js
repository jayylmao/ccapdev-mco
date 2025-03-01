const express = require('express');
const fs = require('fs');
const server = express();

const bodyParser = require('body-parser');
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const handlebars = require('express-handlebars');
server.set('view engine', 'hbs');
server.engine('hbs', handlebars.engine({
	extname: 'hbs'
}));

server.use(express.static('public'));

// render main page.
server.get('/', function(req, resp) {
	resp.render('main', {
		layout: 'index',
		title: 'rabble'
	})
});

const port = process.env.PORT || 9090;
server.listen(port, function() {
	console.log('rabble app initialized. listening at port ' + port);
});