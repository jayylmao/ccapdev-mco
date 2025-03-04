const User = require('../models/user-model.js');

const renderProfilePage = async (req, res) => {
    try {
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
        const user = await User.findOne({username: 'dwarma'}).lean();

        res.render('edit-profile.hbs', {
            layout: 'edit-profile-layout.hbs',
            user: user
        })
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    renderProfilePage,
    renderEditProfilePage
}