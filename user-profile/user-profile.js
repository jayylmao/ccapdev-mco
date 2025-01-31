import { logInUser } from "../datatypes/user.js";
import { displayPost } from "../render/render-post.js";

// load the user information
logInUser.loadFromStorage();

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
    displayPost(post, "main-content");
})

postElement.innerHTML = postHTML;

document.querySelector('.btnEdit').addEventListener('click', () => {
    window.location.href = '../edit-profile/edit-profile.html';
})