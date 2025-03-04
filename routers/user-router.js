const express = require('express');
const router = express.Router();
const {renderProfilePage, renderEditProfilePage} = require('../controllers/user-controller.js');

// todo: create middleware
router.route('/profile').get(renderProfilePage);

router.route('/edit-profile').get(renderEditProfilePage);


module.exports = router;