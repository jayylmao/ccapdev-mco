const express = require('express');
const upload = require('../middlewares/upload.js');

const router = express.Router();
const {renderProfilePage, renderEditProfilePage, editProfileInformation, createPost} = require('../controllers/user-controller.js');

// todo: create middleware
router.route('/profile').get(renderProfilePage);

router.route('/edit-profile').get(renderEditProfilePage);

router.route('/edit-profile/:id').put(upload, editProfileInformation).post(createPost);


module.exports = router;