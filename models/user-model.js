const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    description: {
        type: String,
        default: 'No description yet',
        trim: true
    },
    backgroundImg: {
        type: String,
        default: 'https://png.pngtree.com/background/20230616/original/pngtree-faceted-abstract-background-in-3d-with-shimmering-iridescent-metallic-texture-of-picture-image_3653595.jpg'
    },
    profileImg: {
        type: String,
        default: 'https://i.pinimg.com/1200x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg'
    },
    upvoted: {
        type: [mongoose.Schema.Types.ObjectID],
        ref: 'Post',
        default: []
    },
    downvoted: {
        type: [mongoose.Schema.Types.ObjectID],
        ref: 'Post',
        default: []
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', userSchema);