const Comment = require('../models/comment-model.js');

const createComment = async (req, res) => {
	try {
		let newComment = Comment({
			commentCreator: res.locals.user._id,
			comment: req.body.comment,
			parent: req.body.postId,
		});

		await newComment.save();
		res.redirect(`/post/${req.body.postId}`);
	} catch (error) {
		console.error(error);
		res.status(500).send("Could not create comment.");
	}
}

module.exports = { createComment };