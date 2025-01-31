/**
 * displayPost() creates a post on the page.
 * @param {Post} post Instance of a post's details.
 */
export function displayPost(post_content, parent) {
    const main_content = document.getElementById(parent);

    const post = document.createElement("div");
    post.setAttribute("class", "post");

    const post_info_controls = document.createElement("div");
    post_info_controls.setAttribute("class", "post-info-controls");

    const post_info = document.createElement("hgroup");
    post_info.setAttribute("class", "post-info");

    const post_tags = document.createElement("ul");
    post_tags.setAttribute("class", "post-tags");
    
    const post_link = document.createElement("a");
    post_link.setAttribute("class", "post-link");
    post_link.setAttribute("href", "../post/post" + post_content.getPostId() + ".html");

    const post_title = document.createElement("h3");
    post_title.setAttribute("class", "post-title");
    post_title.textContent = post_content.getTitle();

    const post_description = document.createElement("p");
    post_description.setAttribute("class", "post-description");
    post_description.textContent = post_content.getContent();

    const post_date = document.createElement("p");
    post_date.setAttribute("class", "post-user");
    post_date.textContent = post_content.getDatePosted();

    const post_user = document.createElement("p");
    post_user.setAttribute("class", "post-user");
    post_user.textContent = "@" + post_content.getPostCreator();

    const post_user_link = document.createElement("a");
    post_user_link.setAttribute("href", "../user-profile/user-profile.html"); // TODO: allow multiple users.

    const post_controls_container = document.createElement("div");
    post_controls_container.setAttribute("class", "post-controls-container");
    
    const post_votes = document.createElement("div");
    post_votes.setAttribute("class", "post_votes");

    const vote_counter = document.createElement("p");
    vote_counter.setAttribute("class", "vote-counter");
    vote_counter.textContent = post_content.getVotes() + " votes";

    const post_controls = document.createElement("div");
    post_controls.setAttribute("class", "post-controls");

    const upvote_button = document.createElement("div");
    upvote_button.setAttribute("class", "post-control-button upvote-button");

    const upvote_icon = document.createElement("img");
    upvote_icon.setAttribute("class", "post-icon upvote-icon button-svg");
    upvote_icon.setAttribute("src", "/assets/svg/chevron-up-svgrepo-com.svg");

    const upvote_text = document.createElement("p");
    upvote_text.textContent = "upvote";

    const downvote_button = document.createElement("div");
    downvote_button.setAttribute("class", "post-control-button downvote-button");
    
    const downvote_icon = document.createElement("img");
    downvote_icon.setAttribute("class", "post-icon downvote-icon button-svg");
    downvote_icon.setAttribute("src", "/assets/svg/chevron-down-svgrepo-com.svg");

    const downvote_text = document.createElement("p");
    downvote_text.textContent = "downvote";

    /* actually create the elements. */
    main_content.appendChild(post);
    post.appendChild(post_info_controls);
    post_info_controls.appendChild(post_info);
    post_info.appendChild(post_tags);

    console.log(post_content);

    post_content.getTags().forEach((tag) => {
        let tag_element = document.createElement("li");
        tag_element.textContent = "#" + tag;
        post_tags.appendChild(tag_element);
    });
    
    post_info.appendChild(post_user_link);
    post_user_link.appendChild(post_user);
    post_info.appendChild(post_link);
    post_link.appendChild(post_title);
    post_info.appendChild(post_date);
    post_info.appendChild(post_description);
    
    post_info_controls.appendChild(post_controls_container);

    post_controls_container.appendChild(post_votes);
    post_votes.appendChild(vote_counter);

    post_controls_container.appendChild(post_controls);
    post_controls.appendChild(upvote_button);
    upvote_button.appendChild(upvote_icon);
    upvote_button.appendChild(upvote_text);

    post_controls.appendChild(downvote_button);
    downvote_button.appendChild(downvote_icon);
    downvote_button.appendChild(downvote_text);
}