const User = require('../models/user-model.js');
const Post = require('../models/post-model.js');

const renderPostCreatorPage = async (req, res) => {
    try {
        const loggedUser = await User.findOne({username: 'dwarma'}).lean();
        res.render('create_post', {
            layout: 'create_post_layout',
            loggedUser: loggedUser,
            page: 'create_post'
        });
    } catch (error) {
        console.error(error);
    }
};

module.exports = { renderPostCreatorPage };