const express = require('express');
const router = express.Router();
const { renderTagHubPage } = require('../controllers/tag-hub-controller.js');

router.route('/').get(renderTagHubPage);

module.exports = router;