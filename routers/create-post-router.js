const express = require('express');
const router = express.Router();
const { renderPostCreatorPage, createPost } = require('../controllers/create-post-controller.js');
const {ensureAuth} = require('../middlewares/auth.js');

router.route('/').get(ensureAuth, renderPostCreatorPage);
router.route('/resp').post(ensureAuth, createPost);

module.exports = router;