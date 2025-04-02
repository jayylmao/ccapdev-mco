const user = require('../models/user-model.js');
const bcrypt = require('bcrypt');

const renderLoginPage = async (req, res) => {
    res.render('login',{
        layout: 'login_layout',
        title: 'Log In to rabble*'
    });
}

const renderRegisterPage = async (req, res) => {
    res.render('register',{
        layout: 'register_layout',
        title: 'Register for rabble*'
    });
}

const registerData = async (req, res) => {
    let pass1 = req.body.password1;
    let pass2 = req.body.password2;

    // encrypt the first pass
    let hash = await bcrypt.hash(pass1, 10)

    const data = {
        username : req.body.username,
        fName : req.body.firstname,
        lName : req.body.lastname,
        password : hash
    }

    const check1 = await user.findOne({username:req.body.username});
    let check2 = true;
    if (check1) { 
        check2 = check1.isDeleted === true;
    }

    // check if both passwords are same & username not taken
    if (pass1 !== pass2 || !check2) {
        return res.redirect('/account/error');
    } else {

        const userObject = await user.create(data);

        req.session.user = {
            _id: userObject.insertedId,
            username: data.username,
            profileImg: data.profileImg
        };

        res.locals.user = req.session.user
        res.redirect('/');
    }
}

const loginData = async (req, res) => {
    try {
        console.log(req.session);
        const check = await user.findOne({username:req.body.username});

        // password checking
        let inputPass = req.body.password;
        const isMatch = await bcrypt.compare(inputPass, check.password);
        console.log(isMatch);

        // if password matches that of the user
        if (isMatch) {
            // check if account still exists (not deleted)
            if(check.isDeleted == true) {
                return res.redirect('/account/error')
            }

            req.session.user = {
                _id: check._id,
                username: check.username,
                profileImg: check.profileImg
            };

            res.locals.user = req.session.user

            req.session.save(error => {
                if (error) {
                    console.error('Could not save session', error);
                    return res.redirect('/account/error');
                }

                console.log('user on login view: ', res.locals.user);
                res.redirect('/');
            });
        } else {
            res.redirect('/account/error');
        }
    } 
    // both username and password are incorrect
    catch {
        res.redirect('/account/error');
    }
}

const logoutData = async (req, res) => {
    try {
        req.session.destroy(() => {
            res.redirect('/');
        });
    } catch (error) {
        console.error('could not log out: ', error);
        res.redirect('/');

    }
}

const deleteUser = async(req,res)=>{
    let account = res.locals.user;
    account.isDeleted = true;
    
    const User = await user.findOneAndUpdate({username: account.username}, account, {
                    new: true,
                    runValidators: true
                }
    );
    res.redirect('/account/logout');
    console.log('account deleted successfully:', account.username);
}

const renderErrorPage = async (req, res) => {
    res.render('account_error',{
        layout: 'account_error_layout',
        title: 'Error Page'
    });
}

module.exports = {
    renderLoginPage,
    renderRegisterPage,
    registerData,
    loginData,
    logoutData,
    deleteUser,
    renderErrorPage
}