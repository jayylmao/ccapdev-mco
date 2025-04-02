const express = require('express');
const router = express.Router();
const { renderMainPage } = require('../controllers/index-controller.js');

router.route('/').get(renderMainPage);

module.exports = router;