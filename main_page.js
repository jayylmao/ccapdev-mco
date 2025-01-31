/**
 * displayPost() creates a post on the page.
 * @param {Post} post Instance of a post's details.
 */
function displayPost(post_content) {
    const main_content = document.getElementById("main-content");

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
    post_link.setAttribute("href", "post" + post_content.id + ".html");

    const post_title = document.createElement("h3");
    post_title.setAttribute("class", "post-title");
    post_title.textContent = post_content.title;

    const post_description = document.createElement("p");
    post_description.setAttribute("class", "post-description");
    post_description.textContent = post_content.content;

    const post_date = document.createElement("p");
    post_date.setAttribute("class", "post-user");
    post_date.textContent = post_content.datePosted;

    const post_user = document.createElement("p");
    post_user.setAttribute("class", "post-user");
    post_user.textContent = "@" + post_content.username;

    const post_controls_container = document.createElement("div");
    post_controls_container.setAttribute("class", "post-controls-container");
    
    const post_votes = document.createElement("div");
    post_votes.setAttribute("class", "post_votes");

    const vote_counter = document.createElement("p");
    vote_counter.setAttribute("class", "vote-counter");
    vote_counter.textContent = post_content.votes + " votes";

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
    
    post_content.tags.forEach((tag) => {
        let tag_element = document.createElement("li");
        tag_element.textContent = "#" + tag;
        post_tags.appendChild(tag_element);
    });
    
    post_info.appendChild(post_user);
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

/**
 * renderTestData() displays sample posts for the main page.
 */
window.onload = function renderTestData() {
    const posts = [
        {
            id: 1,
            tags: ["gardening", "images"],
            username: "mythicalbanana_",
            datePosted: "January 30 2025",
            title: "look at this cool thing i found in my garden",
            content: "weird lookin guy",
            votes: 2694
        }, {
            id: 2,
            tags: ["cars", "vehicles"],
            username: "mythicalbanana_",
            datePosted: "January 26 2025",
            title: "General Motors' EVs Are Finally Earning More Than It Takes To Build Them",
            content: "ayy let's go https://insideevs.com/news/748804/gm-ev-2024-growth-q1/",
            votes: 1503
        }, {
            id: 3,
            tags: ["tech", "smartwatches", "google", "pebble"],
            username: "froolies",
            datePosted: "January 18 2025",
            title: "Pebble cements its smartwatch legacy as Google shares source code with the community",
            content: "i wonder what cool stuff we could do with this https://www.reddit.com/r/Android/comments/1ibisj4/pebble_cements_its_smartwatch_legacy_as_google/",
            votes: 1489
        }, {
            id: 4,
            tags: ["creepy"],
            username: "jorpers",
            datePosted: "January 17 2025",
            title: "just heard footsteps in my attic",
            content: "gg i'm dead lol",
            votes: 1098
        }, {
            id: 5,
            tags: ["nintendo", "nintendoswitch2"],
            username: "jayylmao",
            datePosted: "January 15 2025",
            title: "Switch 2 preview invites are being sent out!",
            content: "https://techcrawlr.com/nintendo-switch-2-preview-events-kick-off-with-select-invitations/",
            votes: 984
        }, {
            id: 6,
            tags: ["food", "q&a"],
            username: 'leibee',
            datePosted: 'January 17, 2018',
            title: 'What is your favorite food?',
            content: `Everyone has that one food they can't resist—something that brings comfort, joy, or even nostalgia. For some, it's the gooey cheese and crispy crust of a perfectly baked pizza. For others, it might be the sweetness of a fresh apple or the spice of a hot curry. 
                      Favorite foods are more than just sustenance; they're often tied to memories. A steaming bowl of ramen might remind you of a cozy rainy day, while a slice of birthday cake could bring back celebrations with loved ones. 
                      Choosing a favorite food can also reflect your personality. Are you adventurous with sushi or pad Thai, or do you lean toward classics like burgers and fries? Maybe you're a fan of desserts, with chocolate taking the crown.
                      Whatever it is, your favorite food tells a little story about you. So, what’s yours, and why does it hold a special place in your heart?`,
            votes: 928
        }, {
            id: 7,
            tags: ["html", "css", "js", "web"],
            username: 'leibee',
            datePosted: 'December 30, 2022',
            title: 'Why learning HTML, CSS, and JavaScript are important for Computer Studies Student?',
            content: `Learning HTML, CSS, and JavaScript is essential for Computer Studies students as these technologies form the backbone of web development. HTML structures the content of web pages, CSS styles them to make them visually appealing, 
                        and JavaScript adds interactivity and dynamic behavior. Together, they help students understand how websites function and enable them to create engaging user experiences. These skills provide a foundation for advanced technologies 
                        like React and Node.js, opening doors to careers in web development, software engineering, and UI/UX design. Mastering these languages fosters problem-solving, creativity, and the ability to build real-world applications.`,
            votes: 891
        }, {
            id: 8,
            tags: ["q&a", "discussion", "srs"],
            username: 'leibee',
            datePosted: 'March 2, 2024',
            title: 'Do you love youself?',
            content: `Loving yourself means embracing who you are—strengths, flaws, and everything in between. It’s about self-respect, setting boundaries, and prioritizing your well-being. Self-love isn’t selfish; it’s necessary for growth and happiness. 
                        When you love yourself, you build confidence, overcome challenges, and inspire others to value themselves too. So, yes, love yourself!`,
            votes: 765
        }
    ].map((postDetails) => {
        displayPost(postDetails);
    });
}