const User = require('../models/user-model.js');
const Post = require('../models/post-model.js');
const Comment = require('../models/comment-model.js');

const renderProfilePage = async (req, res) => {
    try {
        const user = await User.findOne({username: req.params.username}).lean();
        const posts = await Post.find({postCreator: user._id}).lean();
        const comments = await Comment.find({commentCreator: user._id}).lean();

        res.render('profile_page.hbs', {
            layout: 'user_profile_layout.hbs',
            user: user,
            posts: posts,
            comments: comments,
            loggedUser: res.locals.user,
            page: 'profile_viewer'
        })
    } catch (error) {
        console.error(error);
    }
}

const renderEditProfilePage = async (req, res) => {
    try {
        const user = await User.findById(res.locals.user._id).lean();
        res.render('edit-profile.hbs', {
            layout: 'edit-profile-layout.hbs',
            loggedUser: user,
            page: 'profile_editor',
            error: null
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

        const existingUsername = await User.findOne({username: req.body.username});

        if (existingUsername !== null && existingUsername.username !== req.body.username) {
            const user = await User.findById(res.locals.user._id).lean();
            res.render('edit-profile.hbs', {
                layout: 'edit-profile-layout.hbs',
                loggedUser: user,
                page: 'profile_editor',
                error: 'Username has been taken. Please choose another one.'
            });
        } else {
            const user = await User.findOneAndUpdate({_id: res.locals.user._id }, updateData, {
                    new: true,
                    runValidators: true
                }
            );
            // redirect to profile page.
            res.redirect(`/user/${user.username}`);
        }
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