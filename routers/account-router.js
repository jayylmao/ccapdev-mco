const express = require('express');
const router = express.Router();
const {renderLoginPage, renderRegisterPage} = require('../controllers/account-controller.js');

router.route('/login').get(renderLoginPage);

router.route('/register').get(renderRegisterPage);

module.exports = router;