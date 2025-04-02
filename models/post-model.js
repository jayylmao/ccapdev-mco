const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postCreator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'     // User model
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    votes: {
        type: Number,
        default: 0
    },
    tags: {
        type: [String],     // Array of strings 
        default: []         // Default to an empty array
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Post', postSchema);