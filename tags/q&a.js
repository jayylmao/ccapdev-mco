import { displayPost } from "../render/render-post.js";
import { users } from "../test-data.js";

users.forEach((user) => {
    user.userPosts.forEach((post) => {
        if (post.getTags().includes("q&a")) {
            displayPost(post, "main-content");
        }
    });
});