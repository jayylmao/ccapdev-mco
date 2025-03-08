const express = require('express');
const router = express.Router();
const { renderTagPage } = require('../controllers/tag-controller.js');

router.route('/:tag').get(renderTagPage);

module.exports = router;