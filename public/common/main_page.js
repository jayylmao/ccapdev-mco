import { displayPost } from "../../render/render-post.js";
import { users } from "../test-data.js";

/**
 * renderTestData() displays sample posts for the main page.
 */
window.onload = function renderTestData() {
    users.forEach((user) => {
        user.userPosts.forEach((post) => {
            displayPost(post, "main-content");
        });
    });
}