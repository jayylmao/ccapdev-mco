/**
 * Post contains the details of a post.
 */
class Post {
    constructor(id, title, tags, user, description, votes, date) {
        this.id = id;
        this.title = title;
        this.tags = tags;
        this.user = user;
        this.description = description;
        this.votes = votes;
        this.date = date;
    }
}

/**
 * displayPost() creates a post on the page.
 * @param {Post} post Instance of a post's details.
 */
function displayPost(post_content) {
    let main_content = document.getElementById("main-content");

    let post = document.createElement("div");
    post.setAttribute("class", "post");

    let post_info_controls = document.createElement("div");
    post_info_controls.setAttribute("class", "post-info-controls");

    let post_info = document.createElement("hgroup");
    post_info.setAttribute("class", "post-info");

    let post_tags = document.createElement("ul");
    post_tags.setAttribute("class", "post-tags");
    
    let post_link = document.createElement("a");
    post_link.setAttribute("class", "post-link");
    post_link.setAttribute("href", "post" + post_content.id + ".html");

    let post_title = document.createElement("h3");
    post_title.setAttribute("class", "post-title");
    post_title.textContent = post_content.title;

    let post_description = document.createElement("p");
    post_description.setAttribute("class", "post-description");
    post_description.textContent = post_content.description;

    let post_user = document.createElement("p");
    post_user.setAttribute("class", "post-user");
    post_user.textContent = "@" + post_content.user;

    let post_controls_container = document.createElement("div");
    post_controls_container.setAttribute("class", "post-controls-container");
    
    let post_votes = document.createElement("div");
    post_votes.setAttribute("class", "post_votes");

    let vote_counter = document.createElement("p");
    vote_counter.setAttribute("class", "vote-counter");
    vote_counter.textContent = post_content.votes + " votes";

    let post_controls = document.createElement("div");
    post_controls.setAttribute("class", "post-controls");

    let upvote_button = document.createElement("div");
    upvote_button.setAttribute("class", "post-control-button upvote-button");

    let upvote_icon = document.createElement("img");
    upvote_icon.setAttribute("class", "post-icon upvote-icon button-svg");
    upvote_icon.setAttribute("src", "/assets/svg/chevron-up-svgrepo-com.svg");

    let upvote_text = document.createElement("p");
    upvote_text.textContent = "upvote";

    let downvote_button = document.createElement("div");
    downvote_button.setAttribute("class", "post-control-button downvote-button");
    
    let downvote_icon = document.createElement("img");
    downvote_icon.setAttribute("class", "post-icon downvote-icon button-svg");
    downvote_icon.setAttribute("src", "/assets/svg/chevron-down-svgrepo-com.svg");

    let downvote_text = document.createElement("p");
    downvote_text.textContent = "downvote";

    /* actually create the elements. */
    main_content.appendChild(post);
    post.appendChild(post_info_controls);
    post_info_controls.appendChild(post_info);
    post_info.appendChild(post_tags);
    
    for (i = 0; i < post_content.tags.length; i++) {
        let tag = document.createElement("li");
        tag.textContent = "#" + post_content.tags[i];
        post_tags.appendChild(tag);
    }
    
    post_info.appendChild(post_user);
    post_info.appendChild(post_link);
    post_link.appendChild(post_title);
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

/**
 * renderTestData() displays sample posts for the main page.
 */
function renderTestData() {
    let posts = [
        new Post(
            1,
            "look at this cool thing i found in my garden",
            ["gardening", "images"],
            "user1",
            "weird lookin guy",
            2694
        ),
        new Post(
            2,
            "General Motors' EVs Are Finally Earning More Than It Takes To Build Them",
            ["cars", "vehicles"],
            "user2",
            "ayy let's go https://insideevs.com/news/748804/gm-ev-2024-growth-q1/",
            1503
        ),
        new Post(
            3,
            "Pebble cements its smartwatch legacy as Google shares source code with the community",
            ["tech", "smartwatches", "google", "pebble"],
            "user2",
            "i wonder what cool stuff we could do with this https://www.reddit.com/r/Android/comments/1ibisj4/pebble_cements_its_smartwatch_legacy_as_google/",
            1489
        ),
        new Post(
            4,
            "just heard footsteps in my attic",
            ["creepy"],
            "user4",
            "gg i'm dead lol",
            1098
        ),
        new Post(
            5,
            "Switch 2 preview invites are being sent out!",
            ["nintendo", "nintendoswitch2"],
            "user5",
            "https://techcrawlr.com/nintendo-switch-2-preview-events-kick-off-with-select-invitations/",
            984
        )
    ];

    for (let i = 0; i < posts.length; i++) {
        displayPost(posts[i]);
    }
}