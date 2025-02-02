/**
 * renderPostViewerPage() renders the viewer page 
 * @param {Post} post_content Post instance containing its details, such as title, description, etc.
 * @param {boolean} editable Add edit and delete buttons if the comment is editable by the current user.
 */
export function renderPostViewerPage(post_content) {
    const main_content = document.getElementById("post-container");

    const back_button = document.createElement("div");
    back_button.setAttribute("id", "back-button");
    back_button.setAttribute("onclick", `history.back()`);

    const back_icon = document.createElement("img");
    back_icon.setAttribute("class", "button-svg");
    back_icon.setAttribute("id", "back-icon");
    back_icon.setAttribute("src", "/assets/svg/chevron-left-svgrepo-com.svg");

    /* display the post tags. */
    const post_tags = document.createElement("ul");
    post_tags.setAttribute("id", "post-tags");

    /* display the post title. */
    const post_header = document.createElement("h1");
    post_header.setAttribute("id", "post-header");
    post_header.textContent = post_content.getTitle();

    /* display the post creator. */
    const post_creator_link = document.createElement("a");
    post_creator_link.setAttribute("id", "post-creator-link");
    post_creator_link.setAttribute("href", "../user-profile/user-profile.html");

    const post_creator = document.createElement("p");
    post_creator.setAttribute("id", "post-creator");
    post_creator.textContent = "@" + post_content.getPostCreator();

    /* display the post date */
    const post_date = document.createElement("p");
    post_date.setAttribute("id", "post-date");
    post_date.textContent = post_content.getDatePosted();

    /* display the post's main content */
    const post_description = document.createElement("p");
    post_description.setAttribute("id", "post-content");
    post_description.textContent = post_content.getContent();

    const post_controls_container = document.createElement("div");
    post_controls_container.setAttribute("class", "post-controls-container");

    /* display the post votes */
    const post_votes = document.createElement("div");
    post_votes.setAttribute("class", "post-votes");
    post_votes.textContent = post_content.getVotes() + " votes";

    const vote_counter = document.createElement("p");
    vote_counter.setAttribute("class", "vote-counter");

    const post_controls = document.createElement("div");
    post_controls.setAttribute("class", "post-controls");

    const upvote_button = document.createElement("div");
    upvote_button.setAttribute("class", "upvote-button");

    const upvote_icon = document.createElement("img");
    upvote_icon.setAttribute("class", "post-icon upvote-icon button-svg");
    upvote_icon.setAttribute("src", "../assets/svg/chevron-up-svgrepo-com.svg");

    const upvote_label = document.createElement("p");
    upvote_label.setAttribute("class", "upvote-label");
    upvote_label.textContent = "upvote";

    const downvote_button = document.createElement("div");
    downvote_button.setAttribute("class", "downvote-button");

    const downvote_icon = document.createElement("img");
    downvote_icon.setAttribute("class", "post-icon downvote-icon button-svg");
    downvote_icon.setAttribute("src", "../assets/svg/chevron-down-svgrepo-com.svg");

    const downvote_label = document.createElement("p");
    downvote_label.setAttribute("class", "downvote-label");
    downvote_label.textContent = "downvote";

    main_content.appendChild(back_button);
    back_button.appendChild(back_icon);

    main_content.appendChild(post_tags);

    post_content.getTags().forEach((tag) => {
        let tag_element = document.createElement("li");
        tag_element.textContent = "#" + tag;
        post_tags.appendChild(tag_element);
    });

    main_content.appendChild(post_creator_link);
    post_creator_link.appendChild(post_creator);
    main_content.appendChild(post_header);
    main_content.appendChild(post_date);
    main_content.appendChild(post_description);
    main_content.appendChild(post_controls_container);

    post_controls_container.appendChild(post_votes);
    post_controls_container.appendChild(post_controls);

    post_controls.appendChild(upvote_button);
    upvote_button.appendChild(upvote_icon);
    upvote_button.appendChild(upvote_label);

    post_controls.appendChild(downvote_button);
    downvote_button.appendChild(downvote_icon);
    downvote_button.appendChild(downvote_label);
}

/**
 * addEditDeleteCommentHandlers() adds event listeners for edit and delete comment buttons.
 */
export function addEditDeleteCommentHandlers() {
    document.querySelectorAll('.edit-comment-button').forEach(button => {
        console.log(button);
        button.addEventListener('click', () => {
            const popup = button.closest('.comment').querySelector('.edit-comment-popup');
            popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
        });
    });

    document.querySelectorAll('.edit-comment-cancel').forEach(button => {
        button.addEventListener('click', () => {
            const popup = button.closest('.edit-comment-popup');
            popup.style.display = 'none';
        });
    });

    document.querySelectorAll('.delete-comment-button').forEach(button => {
        button.addEventListener('click', () => {
            const comment = button.closest('.comment');
            if (confirm("Are you sure you want to delete this comment?")) {
                comment.remove();
            }
        });
    });

    document.querySelectorAll('.edit-comment-save').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // prevent form submission
            const popup = button.closest('.edit-comment-popup');
            const textarea = popup.querySelector('.edit-comment-box');
            const commentText = textarea.value.trim();

            if (commentText) {
                const comment = popup.closest('.comment');
                const message = comment.querySelector('.message');
                message.textContent = commentText;
                popup.style.display = 'none';
            } else {
                alert("Comment cannot be empty!");
            }
        });
    });
}