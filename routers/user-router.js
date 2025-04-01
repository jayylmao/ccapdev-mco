const express = require('express');
const router = express.Router();
const {renderProfilePage} = require('../controllers/user-controller.js');

// todo: create middleware
router.route('/:username').get(renderProfilePage);

module.exports = router;