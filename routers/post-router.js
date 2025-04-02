const express = require('express');
const router = express.Router();
const { renderPostViewerPage, renderPostEditorPage } = require('../controllers/post-controller.js');
const {ensureAuth} = require('../middlewares/auth.js');

router.route('/:id').get(renderPostViewerPage);
router.route('/edit/:id').get(ensureAuth, renderPostEditorPage);

module.exports = router;