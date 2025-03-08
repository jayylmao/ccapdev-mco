const express = require('express');
const upload = require('../middlewares/upload.js');

const router = express.Router();
const {renderProfilePage, renderEditProfilePage, editProfileInformation} = require('../controllers/user-controller.js');

// todo: create middleware
router.route('/:username').get(renderProfilePage);

router.route('/edit-profile/:username').get(renderEditProfilePage).put(upload, editProfileInformation);


module.exports = router;