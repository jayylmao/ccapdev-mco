const User = require('../models/user-model.js');
const Post = require('../models/post-model.js');

const renderTagHubPage = async (req, res) => {
    try {
        const loggedUser = await User.findOne({username: 'dwarma'}).lean();
        let tags = await Post.aggregate([
            { $unwind: "$tags"},
            { $group: { _id: "$tags", count: { $sum: 1 }}}, // get unique tags and count them.
            { $sort: { count: -1 }}
        ]).exec();

        console.log(tags);

        console.log('max: ' + tags[0].count);

        res.render('tag_hub', {
            layout: 'tag_hub_layout',
            loggedUser: loggedUser,
            tags: tags,
            page: 'tags'
        });
    } catch (error) {
        console.error(error);
    }
};

module.exports = { renderTagHubPage };