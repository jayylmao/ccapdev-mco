const dotenv = require('dotenv');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => console.log('connected to mongodb.'))
                                       .catch(err => console.error('could not connect to mongodb: ', err));

const sessionMiddleware = session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        collectionName: 'sessions',
        ttl: 60 * 60 * 24 * 30, // 30 days
        autoRemove: 'interval',
        autoRemoveInterval: 10, // Cleanup every 10 minutes
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        ssecure: false,  // Change this if using HTTP
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 30, // 30 days expiration.
    }
});

module.exports = { sessionMiddleware };