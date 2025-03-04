const express = require('express');

const router = express.Router();
const {renderProfilePage, renderEditProfilePage, editProfileInformation} = require('../controllers/user-controller.js');

// todo: create middleware
router.route('/profile').get(renderProfilePage);

router.route('/edit-profile').get(renderEditProfilePage);

router.route('/edit-profile/:id').put(editProfileInformation);


module.exports = router;