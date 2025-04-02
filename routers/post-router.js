const express = require('express');
const router = express.Router();
const { renderPostViewerPage, renderPostEditorPage, upvotePost, downvotePost, flagPost, editPost } = require('../controllers/post-controller.js');
const {ensureAuth} = require('../middlewares/auth.js');

router.route('/:id').get(renderPostViewerPage);
router.route('/edit/:id').get(ensureAuth, renderPostEditorPage).post(editPost);
router.route('/flag/:id').post(ensureAuth, flagPost);

router.route('/:id/upvote').post(ensureAuth, upvotePost);
router.route('/:id/downvote').post(ensureAuth, downvotePost);

module.exports = router;