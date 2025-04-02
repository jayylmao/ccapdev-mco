const express = require('express');
const upload = require('../middlewares/upload.js');
const {ensureAuth} = require("../middlewares/auth.js");

const router = express.Router();
const { renderEditProfilePage, editProfileInformation } = require('../controllers/user-controller.js');

router.route('/').get(ensureAuth, renderEditProfilePage).put(upload, editProfileInformation);

module.exports = router;