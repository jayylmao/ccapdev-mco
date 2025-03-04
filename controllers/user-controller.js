const User = require('../models/user-model.js');

const renderProfilePage = async (req, res) => {
    try {
        // change to findById
        const user = await User.findOne({username: 'dwarma'}).lean();

        res.render('profile_page.hbs', {
            layout: 'user_profile_layout.hbs',
            user: user
        })
    } catch (error) {
        console.error(error);
    }
}

const renderEditProfilePage = async (req, res) => {
    try {
        // change to findById
        const user = await User.findOne({username: 'dwarma'}).lean();

        res.render('edit-profile.hbs', {
            layout: 'edit-profile-layout.hbs',
            user: user
        })
    } catch (error) {
        console.error(error);
    }
}

const editProfileInformation = async (req, res) => {
    console.log(req.params.id)
    console.log(req.body)

    try {
        const user = await User.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true,          
            runValidators: true 
        })

        res.redirect('/user/profile');

    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    renderProfilePage,
    renderEditProfilePage,
    editProfileInformation
}