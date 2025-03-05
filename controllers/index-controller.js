const User = require('../models/user-model.js');
const Post = require('../models/post-model.js');

const renderMainPage = async (req, res) => {
    try {
        // get 10 most voted posts.
        let posts = Post.aggregate([
            { $sort: { votes: -1 } }, 			// sort posts by descending.
            { $limit: 10 }, 					// only get 10.
            { $lookup: {
                from: User          ,			// get post creator from user collection.
                localField: "postCreator",		// search query is post creator id in post collection.
                foreignField: "_id",			// search in _id field in user collection.
                as: "postCreatorObj"			// save results to postCreatorObj field in post.
            }},
            { $unwind: "$postCreatorObj" }, 	// convert array to object.
            { $project: {						// only include username.
                "_id": 1,
                "tags": 1,
                "postCreator": 1,
                "datePosted": { $dateToString: { date: "$datePosted", format: "%B %d, %Y", onNull: "Unknown date" }},	// convert date from object to proper string format.
                "title": 1,
                "content": 1,
                "votes": 1,
                "postCreatorObj.username": 1,
                "postCreatorObj.profileImg": 1
            }}
        ]);

        console.log(posts);

        res.render('main', {
            layout: 'index_layout',
            pageTitle: 'rabble',
            posts: posts
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    renderMainPage
};