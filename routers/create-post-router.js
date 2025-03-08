const express = require('express');
const router = express.Router();
const { renderPostCreatorPage } = require('../controllers/create-post-controller.js');

router.route('/').get(renderPostCreatorPage);

module.exports = router;