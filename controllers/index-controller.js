const Post = require('../models/post-model.js');

const renderMainPage = async (req, res) => {
    try {
        let { page = 1, limit = 10 } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        const totalPosts = await Post.countDocuments();
        const totalPages = Math.ceil(totalPosts / limit);

        const posts = await Post.find()
            .sort({ votes: -1 })
            .skip((page - 1) * limit)
            .limit(limit)
            .lean();

        res.render('main', {
            layout: 'index_layout',
            pageTitle: 'rabble',
            posts: posts,
            loggedUser: res.locals.user,
            page: 'index',
            currentPage: page,
            totalPages,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1,
            nextPage: page + 1,
            prevPage: page - 1
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { renderMainPage };