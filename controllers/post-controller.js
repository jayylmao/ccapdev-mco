const User = require('../models/user-model.js');
const Post = require('../models/post-model.js');
const Comment = require('../models/comment-model.js');

const renderPostViewerPage = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id).lean();
        let user = await User.findById(post.postCreator).lean();
        let comments = await Comment.find({ parent: req.params.id, isDeleted: false }).lean();

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
            loggedUser: res.locals.user,
            page: 'post_viewer'
        });
    } catch (error) {
        console.error(error);
    }
};

const renderPostEditorPage = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id).lean();
        let user = await User.findById(post.postCreator).lean();

        console.log(post);
        res.render('edit_post', {
            layout: 'edit_post_layout',
            pageTitle: 'rabble - ' + post.title,
            post: post,
            postCreator: user.username,
            title: post.title,
            description: post.content,
            loggedUser: res.locals.user,
            page: 'post_editor'
        });
    } catch (error) {
        console.error(error);
    }
};

const upvotePost = async (req, res) => {
    console.log("Upvoting post with ID:", req.params.id);
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId);
        const loggedUser = await User.findById(res.locals.user._id);
        const postIdStr = postId.toString();
        const upvoteIndex = loggedUser.upvoted.findIndex(post => post.toString() === postIdStr);

        // retract upvote if clicked when already upvoted.
        if (loggedUser.upvoted.includes(postId)) {
            loggedUser.upvoted.splice(upvoteIndex, 1);
            post.votes -= 1;
        } else {
            loggedUser.upvoted.push(postId);
            post.votes += 1;
        }

        await loggedUser.save();
        await post.save();

        res.redirect('back');
    } catch (error) {
        console.error(error);
    }
};

const downvotePost = async (req, res) => {
    console.log("Downvoting post with ID:", req.params.id);
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId);
        const loggedUser = await User.findById(res.locals.user._id);
        const postIdStr = postId.toString();
        const downvoteIndex = loggedUser.downvoted.findIndex(post => post.toString() === postIdStr);

        // retract downvote if clicked when already upvoted.
        if (loggedUser.upvoted.includes(postId)) {
            loggedUser.downvoted.splice(downvoteIndex, 1);
            post.votes += 1;
        } else {
            loggedUser.downvoted.push(postId);
            post.votes -= 1;
        }

        await loggedUser.save();
        await post.save();

        res.redirect('back');
    } catch (error) {
        console.error(error);
    }
};

const flagPost = async (req, res) => {
    console.log("flagging post with id: ", req.params.id);
    try {
        const postId = req.params.id
        await Post.findByIdAndUpdate(postId, { isDeleted: true });

        res.redirect('back'); 
    } catch (error) {
        console.error(error);
    }
};

const editPost = async (req, res) => {
    try { 
        const { id } = req.params;
        const { title, content } = req.body;

        const updatedPost = await Post.findByIdAndUpdate(
            id, 
            { $set: { title, content } }, 
            { new: true, runValidators: true }
        );

        res.redirect(`/post/${updatedPost._id}`);
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    renderPostViewerPage,
    renderPostEditorPage,
    upvotePost,
    downvotePost,
    flagPost,
    editPost
};