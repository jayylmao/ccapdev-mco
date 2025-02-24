import { User } from "./datatypes/user.js";
import { Comment } from "./datatypes/comment.js";


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
        backgroundImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fgju08g3r4lq71.jpg%3Fwidth%3D960%26crop%3Dsmart%26auto%3Dwebp%26s%3D43aa5a7310d7f98eef921ebc4ae055aec51db9e9&f=1&nofb=1&ipt=3a91d2e498548aa5875f13a71d09740a8ccb3b2679f98382810357fa67e57f2f&ipo=images",
        profileImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Froh81vffcf561.png%3Fauto%3Dwebp%26s%3Dc348dd397cdee1f1263ebfe79d66321ade63e703&f=1&nofb=1&ipt=403d86fa354125a23e7835c1d3308ca009bd9922c730932fb56977e1fcda6db7&ipo=images"
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
        username: 'leibee',
        fName: 'Lelibee',
        lName: 'Swift',
        description: 'Cybersecurity Consultant in Globe Inc.',
        backgroundImg: 'https://wallpapers.com/images/featured/4k-background-fd313fxzl511betu.jpg',
        profileImg: 'https://wallpapers.com/images/high/cool-profile-picture-faceless-man-qpa6end6whksmm7i.webp'
    }
].map((userDetails) => {
    users.push(new User(userDetails));
});



export let logInUser;
function loginAccount(username){
    logInUser = users.find(user => user.getUsername() === username);
    console.log('loginAccount function:', logInUser.getLname()); // DELETE
}
loginAccount('leibee');


users[0].createPost({
    id: 1,
    tags: ["gardening"],
    postCreator: "mythicalbanana_",
    datePosted: "January 30 2025",
    title: "look at this cool thing i found in my garden",
    content: "weird lookin guy",
    votes: 2694,
    profileImg: users[0].getProfileImg()
});

users[0].createPost({
    id: 2,
    tags: ["cars"],
    postCreator: "mythicalbanana_",
    datePosted: "January 26 2025",
    title: "General Motors' EVs Are Finally Earning More Than It Takes To Build Them",
    content: "ayy let's go https://insideevs.com/news/748804/gm-ev-2024-growth-q1/",
    votes: 1503,
    profileImg: users[0].getProfileImg()
})

users[1].createPost({
    id: 3,
    tags: ["tech"],
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
    tags: ["tech"],
    postCreator: "jayylmao",
    datePosted: "January 15 2025",
    title: "Switch 2 preview invites are being sent out!",
    content: "https://techcrawlr.com/nintendo-switch-2-preview-events-kick-off-with-select-invitations/",
    votes: 984,
    profileImg: users[3].getProfileImg()
});

users[4].createPost({
    id: 6,
    tags: ["food"],
    postCreator: 'leibee',
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
    tags: ["tech"],
    postCreator: 'leibee',
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
    tags: ["q&a"],
    postCreator: 'leibee',
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
            id: 10,
            user: "leibee",
            comment: "op, that's a snail 💀",
            date: "January 29, 2025",
            votes: 5
        }, {
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
        {
            id: 20,
            user: "jayylmao",
            comment: "Really good news for the EV industry. More competition for Tesla is always welcome.",
            date: "February 2, 2025",
            votes: 4
        }
    ],
    [
        {
            id: 30,
            user: "leibee",
            comment: "<3 pebble",
            date: "February 3, 2025",
            votes: 2
        }
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