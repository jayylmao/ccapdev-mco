const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    commentCreator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'     // User model
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    replyTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    comment: {
        type: String,
        required: true,
        trim: true
    },
    votes: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Comment', commentSchema);