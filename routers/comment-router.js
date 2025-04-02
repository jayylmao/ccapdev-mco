const express = require('express');
const router = express.Router();
const { renderCommentEditorPage, editComment, flagComment } = require('../controllers/comment-controller.js');

// GET request to render the edit comment page
router.get('/edit/:id', renderCommentEditorPage);
router.post('/edit/:id', editComment);
router.post('/flag/:id', flagComment);

module.exports = router;
