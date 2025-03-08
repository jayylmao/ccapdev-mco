const express = require('express');
const router = express.Router();
const { renderPostViewerPage, renderPostEditorPage } = require('../controllers/post-controller.js');

router.route('/:id').get(renderPostViewerPage);
router.route('/edit/:id').get(renderPostEditorPage);

module.exports = router;