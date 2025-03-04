const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const dotenv = require('dotenv');
const methodOverride = require('method-override');
const connectDB = require('./db/connect.js');
const userRouter = require('./routers/user-router.js');
const accountRouter = require('./routers/account-router.js')
const server = express();

// Set dotenv
dotenv.config();

const PORT = process.env.PORT || 3000;

// Body parser
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Method override
// Purpose: Using method override to allow PUT, DELETE, and other HTTP methods in HTML forms, which normally only support GET and POST
server.use(methodOverride((req, res) => {  
    if(req.body && typeof req.body === 'object' && '_method' in req.body){
        let method = req.body._method; 
        delete req.body._method;       
        return method;                  
    }
}));

// Set handlebars
server.set('views', path.join(__dirname, 'views'))
server.engine('hbs', handlebars.engine({
	extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
server.set('view engine', 'hbs');

// Set static folder
server.use(express.static(path.join(__dirname, 'public/common')));
server.use('/svg', express.static(path.join(__dirname, 'public/svg')));


// Routers
server.use('/user', userRouter);
server.use('/account', accountRouter);


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