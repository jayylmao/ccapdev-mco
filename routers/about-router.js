const express = require('express');
const router = express.Router();
const {renderAboutPage} = require('../controllers/about-controller.js');

router.route('/').get(renderAboutPage);

module.exports = router;