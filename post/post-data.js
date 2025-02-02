import { displayComment } from "../render/render-comment.js";
import { addEditDeleteCommentHandlers, renderPostViewerPage } from "../post/post-viewer.js";
import { logInUser, users } from "../test-data.js";
import { comments } from "../test-data.js";

export function renderTestData(user_id, post_index, post_id) {
    let post = users[user_id].getUserPosts()[post_index - 1];
    renderPostViewerPage(post);

    comments[post_id - 1].forEach(comment => {
        
        if (comment.getUser() == logInUser.getUsername()) {
            displayComment(comment, "comments-section", true);
        } else {
            displayComment(comment, "comments-section", false);
        }
    });

    addEditDeleteCommentHandlers();
}