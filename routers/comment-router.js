const express = require('express');
const router = express.Router();
const { renderCommentEditorPage, editComment, flagComment, upvoteComment, downvoteComment } = require('../controllers/comment-controller.js');

router.get('/edit/:id', renderCommentEditorPage);
router.post('/edit/:id', editComment);
router.post('/flag/:id', flagComment);
router.post('/:id/upvote', upvoteComment);
router.post('/:id/downvote', downvoteComment);

module.exports = router;
