const User = require('../models/user-model.js');
const Post = require('../models/post-model.js');

const renderTagHubPage = async (req, res) => {
    try {
        let tags = await Post.aggregate([
            { $unwind: "$tags"},
            { $group: { _id: "$tags", count: { $sum: 1 }}}, // get unique tags and count them.
            { $sort: { count: -1 }}
        ]).exec();

        res.render('tag_hub', {
            layout: 'tag_hub_layout',
            loggedUser: res.locals.user,
            tags: tags,
            page: 'tags'
        });
    } catch (error) {
        console.error(error);
    }
};

module.exports = { renderTagHubPage };