const User = require('../models/user-model.js');
const Post = require('../models/post-model.js');
const Comment = require('../models/comment-model.js');

const renderPostViewerPage = async (req, res) => {
    try {
        const loggedUser = await User.findOne({username: 'dwarma'}).lean();
        // find post with id specified in url.
        let post = await Post.findById(req.params.id).lean();
        let user = await User.findById(post.postCreator).lean();
        let comments = await Comment.find({parent: req.params.id}).lean();

        for (let comment of comments) {
            const user = await User.findById(comment.commentCreator).lean();
            comment.commentCreator = user.username;
        }

        res.render('post', {
            layout: 'post_viewer_layout',
            pageTitle: 'rabble - ' + post.title,
            post: post,
            postCreator: user.username,
            comments: comments,
            loggedUser: null,
            page: 'post_viewer'
        });
    } catch (error) {
        console.error(error);
    }
};

const renderPostEditorPage = async (req, res) => {
    try {
        const loggedUser = await User.findOne({username: 'dwarma'}).lean();
        // find post with id specified in url.
        let post = await Post.findById(req.params.id).lean();
        let user = await User.findById(post.postCreator).lean();

        res.render('edit_post', {
            layout: 'edit_post_layout',
            pageTitle: 'rabble - ' + post.title,
            post: post,
            postCreator: user.username,
            title: post.title,
            description: post.content,
            loggedUser: loggedUser,
            page: 'post_editor'
        });
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    renderPostViewerPage,
    renderPostEditorPage
};