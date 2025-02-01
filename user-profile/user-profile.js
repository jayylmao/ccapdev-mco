import { logInUser } from "./create-user.js";
import { loadUserListFromStorage } from "./create-user.js";

console.log('user-profile initialized')

// load the user information
logInUser.loadFromStorage();
loadUserListFromStorage();


// Display the background image chosen by the user in HTML file
const backgroundImgElement = document.querySelector('.background-image-section');
backgroundImgElement.innerHTML =   `<img class="background-image" src="${logInUser.getBackgroundImg()}">`


// Display the user information in HTML file
const informationElement = document.querySelector('.user-information-section');
informationElement.innerHTML = `
    <img class="profile-picture" src="${logInUser.getProfileImg()}">
    
    <div class="user-informations">
        <div class="username-section">
            <p class="username"><span class="userFLnames">${logInUser.getFname()} ${logInUser.getLname()}</span> &#64;${logInUser.getUsername()}</p>

            <button class="btnEdit">Edit Profile</button>
        </div>
        
        <p class="description">${logInUser.getDescription()}</p>
    </div>
`



const postElement = document.querySelector('.user-post-section');
let postHTML = '';

// Loop each post and display each in the HTML file
logInUser.userPosts.forEach((post) => {
    postHTML += `
    <div class="post-container">
        <div class="post-user-information-section">
            <div class="post-user-information-left-section">
                <img class="post-profile-picture" src="${logInUser.getProfileImg()}">

                <div>
                    <p class="post-username">${logInUser.getFname()} ${logInUser.getLname()}</p>
                    <p class="date-posted">${post.getDatePosted()}</p>
                </div>
            </div>

            <div>
                <button class="btnDel">Delete Post</button>
            </div>
        </div>

        <div class="border-content-section">
            <p class="post-title">${post.getTitle()}</p>
            <p class="post-content">${post.getContent()}</p>
        </div>
        
        <div class="upvote-and-downvote-section">
            <div class="nVotes">${post.getVotes()} votes</div>
            <button class="btnUpvote">upvote</button>
            <button class="btnDownvote">downvote</button>
            <button class="btnComment">comment</button>
        </div>
    </div>
`
})

postElement.innerHTML = postHTML;

document.querySelector('.btnEdit').addEventListener('click', () => {
    window.location.href = '../edit-profile/edit-profile.html';
})