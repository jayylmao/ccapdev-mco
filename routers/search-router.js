const express = require('express');
const router = express.Router();
const { renderSearchPage } = require('../controllers/search-controller.js');

router.route('/?q=:query').get(renderSearchPage);

module.exports = router;