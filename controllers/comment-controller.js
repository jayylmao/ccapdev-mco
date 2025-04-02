const User = require('../models/user-model.js');
const Comment = require('../models/comment-model.js');

const renderCommentEditorPage = async (req, res) => {
    try {
        let comment = await Comment.findById(req.params.id).lean();

        res.render('edit_comment', {
            layout: 'edit_comment_layout',
            pageTitle: 'rabble - ' + comment.comment,
            comment: comment,
            loggedUser: res.locals.user,
            page: 'post_editor'
        });
    } catch (error) {
        console.error(error);
    }
};

const editComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { comment } = req.body;

        const updatedComment = await Comment.findByIdAndUpdate(id, { comment }, { new: true });

        res.redirect(`/post/${updatedComment.parent}`);
    } catch (error) {
        console.error(error);
    }
};

const flagComment = async (req, res) => {
    try {
        const commentId = req.params.id
        await Comment.findByIdAndUpdate(commentId, { isDeleted: true });

        res.redirect('back'); 
    } catch (error) {
        console.error(error);
    }
};

const upvoteComment = async (req, res) => {
    console.log("Upvoting comment with ID:", req.params.id);
    try {
        const commentId = req.params.id;
        const comment = await Comment.findById(commentId);
        const loggedUser = await User.findById(res.locals.user._id);
        const commentIdStr = commentId.toString();
        const upvoteIndex = loggedUser.upvoted.findIndex(comment => comment.toString() === commentIdStr);

        // retract upvote if clicked when already upvoted.
        if (loggedUser.upvoted.includes(commentId)) {
            loggedUser.upvoted.splice(upvoteIndex, 1);
            comment.votes -= 1;
        } else {
            loggedUser.upvoted.push(commentId);
            comment.votes += 1;
        }

        await loggedUser.save();
        await comment.save();

        res.redirect('back');
    } catch (error) {
        console.error(error);
    }
};

const downvoteComment = async (req, res) => {
    console.log("Upvoting comment with ID:", req.params.id);
    try {
        const commentId = req.params.id;
        const comment = await Comment.findById(commentId);
        const loggedUser = await User.findById(res.locals.user._id);
        const commentIdStr = commentId.toString();
        const downvoteIndex = loggedUser.downvoted.findIndex(comment => comment.toString() === commentIdStr);

        // retract upvote if clicked when already upvoted.
        if (loggedUser.upvoted.includes(commentId)) {
            loggedUser.downvoted.splice(downvoteIndex, 1);
            comment.votes += 1;
        } else {
            loggedUser.downvoted.push(commentId);
            comment.votes -= 1;
        }

        await loggedUser.save();
        await comment.save();

        res.redirect('back');
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    renderCommentEditorPage,
    editComment,
    flagComment,
    upvoteComment,
    downvoteComment
};
