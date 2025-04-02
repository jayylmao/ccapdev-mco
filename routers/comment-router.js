const express = require('express');
const router = express.Router();
const { renderCommentEditorPage, editComment, flagComment, upvoteComment, downvoteComment } = require('../controllers/comment-controller.js');
const {ensureAuth} = require('../middlewares/auth.js');

router.route('/edit/:id').get(ensureAuth, renderCommentEditorPage).post(editComment);
router.route('/flag/:id').post(ensureAuth, flagComment);
router.route('/:id/upvote').post(ensureAuth, upvoteComment);
router.route('/:id/downvote').post(ensureAuth, downvoteComment);

module.exports = router;
