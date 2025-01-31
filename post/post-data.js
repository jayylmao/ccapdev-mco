import { displayComment } from "../render/render-comment.js";
import { renderPostViewerPage } from "../post/post-viewer.js";
import { users } from "../test-data.js";
import { comments } from "../test-data.js";

export function renderTestData(user_id, post_index, post_id) {
    let post = users[user_id].getUserPosts()[post_index - 1];
    renderPostViewerPage(post);

    comments[post_id - 1].forEach(comment => {
        displayComment(comment, "comments-section");
    });

    console.log(post);
}