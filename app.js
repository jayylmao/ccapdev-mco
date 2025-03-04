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

const dotenv = require('dotenv');
const connectDB = require('./db/connect.js');

// add controllers to app.
const controllers = ['routes'];
controllers.forEach(controller => {
    const model = require('./controllers/' + controller);
    model.add(server);
});

// Start server when db connected
const startServer = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        server.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
        })

    } catch (error) {
        console.error(error);
    }
}
startServer();