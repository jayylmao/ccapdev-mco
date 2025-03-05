const express = require('express');
const router = express.Router();
const { renderPostViewerPage } = require('../controllers/post-controller.js');

router.route('/:id').get(renderPostViewerPage);

module.exports = router;