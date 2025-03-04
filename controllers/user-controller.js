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

const Post = require('../models/post-model.js');
const createPost = async(req, res) => {
    const user = User.findById(req.params.id).lean();

    const post = {
        postCreator: user._id,
        title: 'Lorem Ipsum',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }

    Post.create(post);
    res.redirect('/user/profile');
}

module.exports = {
    renderProfilePage,
    renderEditProfilePage,
    editProfileInformation,

    createPost
}