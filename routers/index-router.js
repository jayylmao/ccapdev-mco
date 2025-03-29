const express = require('express');
const router = express.Router();
const { renderMainPage, renderLoggedOutPage } = require('../controllers/index-controller.js');

router.route('/home').get(renderMainPage);
router.route('/').get(renderLoggedOutPage);

module.exports = router;