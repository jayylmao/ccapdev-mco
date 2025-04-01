const express = require('express');
const router = express.Router();
const {renderLoginPage, renderRegisterPage, registerData, loginData, logoutData, renderErrorPage} = require('../controllers/account-controller.js');

router.route('/login').get(renderLoginPage);
router.route('/login').post(loginData);

router.route('/logout').get(logoutData);

router.route('/register').get(renderRegisterPage);
router.route('/register').post(registerData);

router.route('/error').get(renderErrorPage);

module.exports = router;