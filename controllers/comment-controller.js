const User = require('../models/user-model.js');
const Post = require('../models/post-model.js');
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

module.exports = {
    renderCommentEditorPage,
    editComment,
    flagComment
};