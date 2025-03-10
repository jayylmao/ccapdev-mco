const express = require('express');
const router = express.Router();
const { renderCommentEditorPage } = require('../controllers/comment-controller.js');

router.route('/edit/:id').get(renderCommentEditorPage);

module.exports = router;