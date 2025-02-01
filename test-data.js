import { User } from "./datatypes/user.js";
import { Comment } from "./datatypes/comment.js";
import { logInUser } from "./datatypes/user.js";

export let users = [];
const userDetails = [
    {
        username: "mythicalbanana_",
        fName: "Henry",
        lName: "Fritz",
        description: "professional banana consumer",
        backgroundImg: "https://plus.unsplash.com/premium_photo-1736194026187-39e23ae676e0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profileImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F011%2F458%2F145%2Flarge_2x%2F8-bit-pixel-art-banana-fruit-pixels-for-game-assets-in-illustration-vector.jpg&f=1&nofb=1&ipt=b29c4a338e322f4ca0f77dd0e0d33484178f786d3f885d193eee7ae393303039&ipo=images"
    }, {
        username: "froolies",
        fName: "Rosanna",
        lName: "Lee",
        description: "Civil engineering student at UCLA.",
        backgroundImg: "https://plus.unsplash.com/premium_photo-1736194026187-39e23ae676e0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profileImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F011%2F458%2F145%2Flarge_2x%2F8-bit-pixel-art-banana-fruit-pixels-for-game-assets-in-illustration-vector.jpg&f=1&nofb=1&ipt=b29c4a338e322f4ca0f77dd0e0d33484178f786d3f885d193eee7ae393303039&ipo=images"
    }, {
        username: "jorpers",
        fName: "Daniel",
        lName: "O'Neill",
        description: "jorp.",
        backgroundImg: "https://plus.unsplash.com/premium_photo-1736194026187-39e23ae676e0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profileImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F011%2F458%2F145%2Flarge_2x%2F8-bit-pixel-art-banana-fruit-pixels-for-game-assets-in-illustration-vector.jpg&f=1&nofb=1&ipt=b29c4a338e322f4ca0f77dd0e0d33484178f786d3f885d193eee7ae393303039&ipo=images"
    }, {
        username: "jayylmao",
        fName: "Charles",
        lName: "Allison",
        description: "Fine arts student at Benilde.",
        backgroundImg: "https://plus.unsplash.com/premium_photo-1736194026187-39e23ae676e0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profileImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F011%2F458%2F145%2Flarge_2x%2F8-bit-pixel-art-banana-fruit-pixels-for-game-assets-in-illustration-vector.jpg&f=1&nofb=1&ipt=b29c4a338e322f4ca0f77dd0e0d33484178f786d3f885d193eee7ae393303039&ipo=images"
    }, {
        username: logInUser.getUsername(),
        fName: logInUser.getFname(),
        lname: logInUser.getLname(),
        description: logInUser.getDescription(),
        backgroundImg: logInUser.getBackgroundImg(),
        profileImg: logInUser.getProfileImg()
    }
].map((userDetails) => {
    users.push(new User(userDetails));
});

users[0].createPost({
    id: 1,
    tags: ["gardening", "images"],
    postCreator: "mythicalbanana_",
    datePosted: "January 30 2025",
    title: "look at this cool thing i found in my garden",
    content: "weird lookin guy",
    votes: 2694,
    profileImg: users[0].getProfileImg()
});

users[0].createPost({
    id: 2,
    tags: ["cars", "vehicles"],
    postCreator: "mythicalbanana_",
    datePosted: "January 26 2025",
    title: "General Motors' EVs Are Finally Earning More Than It Takes To Build Them",
    content: "ayy let's go https://insideevs.com/news/748804/gm-ev-2024-growth-q1/",
    votes: 1503,
    profileImg: users[0].getProfileImg()
})

users[1].createPost({
    id: 3,
    tags: ["tech", "smartwatches", "google", "pebble"],
    postCreator: "froolies",
    datePosted: "January 18 2025",
    title: "Pebble cements its smartwatch legacy as Google shares source code with the community",
    content: "i wonder what cool stuff we could do with this https://www.reddit.com/r/Android/comments/1ibisj4/pebble_cements_its_smartwatch_legacy_as_google/",
    votes: 1489,
    profileImg: users[1].getProfileImg()
});

users[2].createPost({
    id: 4,
    tags: ["creepy"],
    postCreator: "jorpers",
    datePosted: "January 17 2025",
    title: "just heard footsteps in my attic",
    content: "gg i'm dead lol",
    votes: 1098,
    profileImg: users[2].getProfileImg()
});

users[3].createPost({
    id: 5,
    tags: ["nintendo", "nintendoswitch2"],
    postCreator: "jayylmao",
    datePosted: "January 15 2025",
    title: "Switch 2 preview invites are being sent out!",
    content: "https://techcrawlr.com/nintendo-switch-2-preview-events-kick-off-with-select-invitations/",
    votes: 984,
    profileImg: users[3].getProfileImg()
});

users[4].createPost({
    id: 6,
    tags: ["food", "q&a"],
    postCreator: logInUser.getUsername(),
    datePosted: 'January 17, 2018',
    title: 'What is your favorite food?',
    content: `Everyone has that one food they can't resist—something that brings comfort, joy, or even nostalgia. For some, it's the gooey cheese and crispy crust of a perfectly baked pizza. For others, it might be the sweetness of a fresh apple or the spice of a hot curry. 
                Favorite foods are more than just sustenance; they're often tied to memories. A steaming bowl of ramen might remind you of a cozy rainy day, while a slice of birthday cake could bring back celebrations with loved ones. 
                Choosing a favorite food can also reflect your personality. Are you adventurous with sushi or pad Thai, or do you lean toward classics like burgers and fries? Maybe you're a fan of desserts, with chocolate taking the crown.
                Whatever it is, your favorite food tells a little story about you. So, what’s yours, and why does it hold a special place in your heart?`,
    votes: 928,
    profileImg: users[4].getProfileImg()
});

users[4].createPost({
    id: 7,
    tags: ["html", "css", "js", "web"],
    postCreator: logInUser.getUsername(),
    datePosted: 'December 30, 2022',
    title: 'Why learning HTML, CSS, and JavaScript are important for Computer Studies Student?',
    content: `Learning HTML, CSS, and JavaScript is essential for Computer Studies students as these technologies form the backbone of web development. HTML structures the content of web pages, CSS styles them to make them visually appealing, 
                and JavaScript adds interactivity and dynamic behavior. Together, they help students understand how websites function and enable them to create engaging user experiences. These skills provide a foundation for advanced technologies 
                like React and Node.js, opening doors to careers in web development, software engineering, and UI/UX design. Mastering these languages fosters problem-solving, creativity, and the ability to build real-world applications.`,
    votes: 756,
    profileImg: users[4].getProfileImg()
});

users[4].createPost({
    id: 8,
    tags: ["q&a", "discussion", "srs"],
    postCreator: logInUser.getUsername(),
    datePosted: 'March 2, 2024',
    title: 'Do you love youself?',
    content: `Loving yourself means embracing who you are—strengths, flaws, and everything in between. It’s about self-respect, setting boundaries, and prioritizing your well-being. Self-love isn’t selfish; it’s necessary for growth and happiness. 
                When you love yourself, you build confidence, overcome challenges, and inspire others to value themselves too. So, yes, love yourself!`,
    votes: 0,
    profileImg: users[4].getProfileImg()
});

export let comments = [];
let commentDetails = [
    [
        {
            id: 11,
            user: "froolies",
            comment: "that's a snail?",
            date: "January 30, 2025",
            votes: 3
        }, {
            id: 12,
            user: "jorpers",
            comment: "op when was the last time you went outside",
            date: "January 29, 2025",
            votes: 2
        }
    ],
    [
        
    ]
];

commentDetails.forEach((postComments) => {
    let temp = [];
    postComments.forEach((commentDetails) => {
        let comment = new Comment(commentDetails);
        temp.push(comment);
    });
    comments.push(temp);
});
