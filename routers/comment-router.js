const express = require('express');
const router = express.Router();
const { renderCommentEditorPage, updateComment } = require('../controllers/comment-controller.js');

router.get('/edit/:id', renderCommentEditorPage);
router.post('/edit/:id', updateComment);

module.exports = router;
