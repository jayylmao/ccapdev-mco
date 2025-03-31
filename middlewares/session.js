const dotenv = require('dotenv');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('connected to mongodb.'))
  .catch(err => console.error('could not connect to mongodb: ', err));

const sessionMiddleware = session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        collectionName: 'sessions',
        ttl: 1000 * 60 * 60 * 24 * 30, // 30 days expiration.
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days expiration.
    }
});

module.exports = { sessionMiddleware };