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



const postElement = document.querySelector('#main-content');
let postHTML = '';

// Loop each post and display each in the HTML file
logInUser.userPosts.forEach((post) => {
    postHTML += `
    <div class="post">
        <div class="post-info-controls">
            <hgroup class="post-info">
                <ul class="post-tags"></ul>
                <div class="post-user-container">
                    <div class="post-user-icon" style='background-image: url("${logInUser.getProfileImg()}")'></div>
                    <a class="post-user" href="../post/post1.html">
                        <p>@${logInUser.getUsername()}</p>
                    </a>
                </div>
                <a class="post-link" href="../post/post${post.getPostId()}.html">
                    <h3 class="post-title">${post.getTitle()}</h3>
                </a>
                <p class="post-user">${post.getDatePosted()}</p>
                <p class="description">${post.getContent()}</p>
            </hgroup>
            <div class="post-controls-container">
                <div class="post-votes">
                    <p class="vote-counter">${post.getVotes()} votes</p>
                </div>
                <div class="post-controls">
                    <div class="post-control-button upvote-button">
                        <img class="post-icon upvote-icon button-svg" src="../assets/svg/chevron-up-svgrepo-com.svg"></img>
                        <p>upvote</p>
                    </div>
                    <div class="post-control-button downvote-button">
                        <img class="post-icon downvote-icon button-svg" src="../assets/svg/chevron-down-svgrepo-com.svg"></img>
                        <p>downvote</p>
                    </div>
                    <a class="post-control-button edit-button" href="../post/post-editor.html">
                        <img class="post-icon edit-icon button-svg" src="../assets/svg/pen-new-square-svgrepo-com.svg"></img>
                        <p>edit</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
`
})

postElement.innerHTML = postHTML;

document.querySelector('.btnEdit').addEventListener('click', () => {
    window.location.href = '../edit-profile/edit-profile.html';
})