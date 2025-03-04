const express = require('express');
const server = express();

const bodyParser = require('body-parser');
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const handlebars = require('express-handlebars');
server.set('view engine', 'hbs');
server.engine('hbs', handlebars.engine({
	extname: 'hbs'
}));

const path = require('path');

server.use(express.static('public'));
server.use('/svg', express.static(path.join(__dirname, 'svg')));
server.use(express.static(path.join(__dirname, 'public')));

// add controllers to app.
const controllers = ['routes'];
controllers.forEach(controller => {
    const model = require('./controllers/' + controller);
    model.add(server);
});

// initialize rabble app at port 3000.
const port = process.env.PORT || 3000;
server.listen(port, function() {
    console.log('rabble app initialized. listening at port ' + port);
});