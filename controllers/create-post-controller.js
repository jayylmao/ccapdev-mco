const User = require('../models/user-model.js');
const Post = require('../models/post-model.js');

const renderPostCreatorPage = async (req, res) => {
    try {
        res.render('create_post', {
            layout: 'create_post_layout',
            loggedUser: res.locals.user,
            page: 'create_post'
        });
    } catch (error) {
        console.error(error);
    }
};

const createPost = async (req, res) => {
    try {
        let newPost = Post({
            postCreator: res.locals.user,
            tags: req.body.tags,
            title: req.body.title,
            content: req.body.description
        });

        let savedPost = await newPost.save();
        res.redirect(`/post/${savedPost._id}`);
    } catch (error) {
        console.error(error);
        res.status(500).send("Could not create post.");
    }
}

module.exports = { renderPostCreatorPage, createPost };