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
    try {
        const updateData = { ...req.body };

        // If files were uploaded, add their paths to the update data
        if (req.files) {
            if (req.files['profileImg']) {
                updateData.profileImg = `/uploads/${req.files['profileImg'][0].filename}`;
            }
            if (req.files['backgroundImg']) {
                updateData.backgroundImg = `/uploads/${req.files['backgroundImg'][0].filename}`;
            }
        }

        const user = await User.findOneAndUpdate(
            { _id: req.params.id },
            updateData,
            {
                new: true,
                runValidators: true
            }
        );

        res.redirect('/user/profile');

    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    renderProfilePage,
    renderEditProfilePage,
    editProfileInformation
}