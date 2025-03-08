const User = require('../models/user-model.js');
const Post = require('../models/post-model.js');

const renderTagPage = async (req, res) => {
    try {
        const loggedUser = await User.findOne({username: 'dwarma'}).lean();
        let posts = await Post.aggregate([
            { $match: {
                $expr: {
                    $in: [req.params.tag, "$tags"]
                }
            }},
            { $sort: { votes: -1 } }, 			// sort posts by descending.
            { $limit: 10 }, 					// only get 10.
            { $lookup: {
                from: "users",			// get post creator from user collection.
                localField: "postCreator",		// search query is post creator id in post collection.
                foreignField: "_id",			// search in _id field in user collection.
                as: "postCreatorObj"			// save results to postCreatorObj field in post.
            }},
            { $unwind: "$postCreatorObj" }, 	// convert array to object.
            { $project: {						// only include username.
                "_id": 1,
                "tags": 1,
                "postCreator": 1,
                "datePosted": 1,
                "title": 1,
                "content": 1,
                "votes": 1,
                "postCreatorObj.username": 1,
                "postCreatorObj.profileImg": 1
            }}
        ]).exec();

        res.render('tags', {
            layout: 'tag_layout',
            loggedUser: loggedUser,
            tag: req.params.tag,
            posts: posts,
            postCount: posts.length,
            page: 'tags'
        });
    } catch (error) {
        console.error(error);
    }
};

module.exports = { renderTagPage };