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

// add controllers to app.
const controllers = ['routes'];
controllers.forEach(controller => {
	const model = require('./controllers/' + controller);
	model.add(server);
});

const port = process.env.PORT || 9090;
server.listen(port, function() {
	console.log('rabble app initialized. listening at port ' + port);
});