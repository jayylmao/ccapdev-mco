const express = require('express');
const upload = require('../middlewares/upload.js');

const router = express.Router();
const { renderEditProfilePage, editProfileInformation } = require('../controllers/user-controller.js');

router.route('/').get(renderEditProfilePage).put(upload, editProfileInformation);

module.exports = router;