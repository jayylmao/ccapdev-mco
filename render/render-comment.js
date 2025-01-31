import { Comment } from "../datatypes/comment.js";

/**
 * displayComment() creates a comment on the page.
 * @param {Comment} comment_content Instance of a comment's details.
 * @param {Node} parent Parent element to place comment in.
 */
export function displayComment(comment_content, parent) {
    const main_content = document.getElementById(parent);

    const comment = document.createElement("div");
    comment.setAttribute("class", "comment");

    const comment_creator_container = document.createElement("p");
    comment_creator_container.setAttribute("class", "comment-creator-container");

    const comment_creator_icon = document.createElement("div");
    comment_creator_icon.setAttribute("class", "comment-creator-icon");

    const comment_creator_username = document.createElement("p");
    comment_creator_username.setAttribute("class", "comment-user");
    comment_creator_username.textContent = "@" + comment_content.getUser();

    const comment_date = document.createElement("p");
    comment_date.setAttribute("class", "comment-date");
    comment_date.textContent = comment_content.getDate();

    const message = document.createElement("p");
    message.setAttribute("class", "message");
    message.textContent = comment_content.getComment();

    const vote_count_container = document.createElement("div");
    vote_count_container.setAttribute("class", "vote-count-container");

    const vote_count = document.createElement("p");
    vote_count.setAttribute("class", "vote-count");
    vote_count.textContent = comment_content.getVotes() + " votes";

    const post_controls = document.createElement("div");
    post_controls.setAttribute("class", "comment-controls");
    
    const upvote_button = document.createElement("div");
    upvote_button.setAttribute("class", "upvote-button comment-controls");

    const upvote_icon = document.createElement("img");
    upvote_icon.setAttribute("class", "post-icon upvote-icon button-svg");
    upvote_icon.setAttribute("src", "/assets/svg/chevron-up-svgrepo-com.svg")

    const upvote_label = document.createElement("p");
    upvote_label.textContent = "upvote";

    const downvote_button = document.createElement("div");
    downvote_button.setAttribute("class", "downvote-button comment-controls");
    
    const downvote_icon = document.createElement("img");
    downvote_icon.setAttribute("class", "post-icon downvote-icon button-svg");
    downvote_icon.setAttribute("src", "/assets/svg/chevron-down-svgrepo-com.svg")

    const downvote_label = document.createElement("p");
    downvote_label.textContent = "downvote";

    main_content.appendChild(comment);
    comment.appendChild(comment_creator_container);
    comment_creator_container.appendChild(comment_creator_icon);
    comment_creator_container.appendChild(comment_creator_username);
    comment_creator_container.appendChild(comment_date);

    comment.appendChild(message);
    comment.appendChild(post_controls);
    post_controls.appendChild(vote_count_container);
    vote_count_container.appendChild(vote_count);
    post_controls.appendChild(upvote_button);
    upvote_button.appendChild(upvote_icon);
    upvote_button.appendChild(upvote_label);
    post_controls.appendChild(downvote_button);
    downvote_button.appendChild(downvote_icon);
    downvote_button.appendChild(downvote_label);
}