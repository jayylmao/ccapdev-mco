const User = require('../models/user-model.js');
const Post = require('../models/post-model.js');

const renderPostViewerPage = async (req, res) => {
    try {
        // find post with id specified in url.
        let post = await Post.findById(req.params.id).lean();
        let user = await User.findById(post.postCreator).lean();

        console.log(user);

        res.render('post', {
            layout: 'post_viewer_layout',
            pageTitle: 'rabble - ' + post.title,
            post: post,
            postCreator: user.username
        });
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    renderPostViewerPage
};