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

const registerData = async (req,res) => {
    let pass1 = req.body.password1;
    let pass2 = req.body.password2;

    // encrypt the first pass
    let hash = await bcrypt.hash(pass1, 10)

    const data = {
        username : req.body.username,
        fName : req.body.firstname,
        lName : req.body.lastname,
        password : hash,
        description : 'No description yet',
        backgroundImg : 'https://png.pngtree.com/background/20230616/original/pngtree-faceted-abstract-background-in-3d-with-shimmering-iridescent-metallic-texture-of-picture-image_3653595.jpg',
        profileImg : 'https://i.pinimg.com/1200x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg'
    }

    // check if both passwords are same 
    if (pass1 != pass2) {
        res.redirect('/account/error');
    } else {
        await user.insertMany([data]);
        res.redirect('/home');
    }
}

const loginData = async (req,res) => {
    try{
        const check = await user.findOne({username:req.body.username});
        let inputPass = req.body.password;
        const isMatch = await bcrypt.compare(inputPass, check.password);

        // if password matches that of the user
        if (isMatch) {
            res.redirect('/home');
        } else {
            res.redirect('/account/error');
        }
    } 
    // both username and password are incorrect
    catch {
        res.redirect('/account/error');
    }
    
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
    renderErrorPage
}