const User = require('../models/user-model.js');
const Post = require('../models/post-model.js');
const Comment = require('../models/comment-model.js');

const renderCommentEditorPage = async (req, res) => {
    try {
        // find post with id specified in url.
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

const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { comment } = req.body;

        const updatedComment = await Comment.findByIdAndUpdate(id, { comment }, { new: true });

        res.redirect(`/post/${updatedComment.parent}`);
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    renderCommentEditorPage,
    updateComment
};