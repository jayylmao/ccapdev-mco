const express = require('express');
const router = express.Router();
const { createComment } = require('../controllers/create-comment-controller.js');
const {ensureAuth} = require('../middlewares/auth.js');

router.route('/resp').post(ensureAuth, createComment);

module.exports = router;