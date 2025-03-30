const express = require('express');
const router = express.Router();
const { renderPostCreatorPage, createPost } = require('../controllers/create-post-controller.js');

router.route('/').get(renderPostCreatorPage);
router.route('/resp').post(createPost);

module.exports = router;