const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./db/connect.js');
const server = express();

// Set dotenv
dotenv.config();

const PORT = process.env.PORT || 3000;

// Body parser
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Set handlebars
server.set('views', path.join(__dirname, 'views'))
server.engine('hbs', handlebars.engine({
	extname: 'hbs'
}));
server.set('view engine', 'hbs');

// Set static folder
server.use(express.static('public'));
server.use('/svg', express.static(path.join(__dirname, 'svg')));
server.use(express.static(path.join(__dirname, 'public')));

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