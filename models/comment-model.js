const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    commentCreator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
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
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Comment', commentSchema);