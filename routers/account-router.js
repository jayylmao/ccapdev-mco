const express = require('express');
const router = express.Router();
const {renderLoginPage, renderRegisterPage, registerData, loginData, logoutData, deleteUser, renderErrorPage} = require('../controllers/account-controller.js');
const {ensureAuth, ensureGuest} = require('../middlewares/auth.js');

router.route('/login').get(ensureGuest, renderLoginPage).post(loginData);

router.route('/logout').get(ensureAuth, logoutData);
router.route('/deleteUser').get(deleteUser);

router.route('/register').get(ensureGuest, renderRegisterPage).post(registerData);

router.route('/error').get(renderErrorPage);

module.exports = router;