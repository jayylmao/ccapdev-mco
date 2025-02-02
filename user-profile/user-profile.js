import { users, logInUser } from "../test-data.js";


const navSignInElement = document.querySelector('#nav-sign-in');
if(logInUser){
    logInUser.loadFromStorage();
    navSignInElement.innerHTML = `
        <a href="../user-profile/user-profile.html?username=${logInUser.getUsername()}">
            <img class="loginuser-profile-img" src="${logInUser.getProfileImg()}">
        </a>
    `
}
else{
    navSignInElement.innerHTML =  `
        <a class="nav-sign-in-buttons" id="nav-login-button" href="../login/login.html">
        login
        </a>
        <a class="nav-sign-in-buttons" id="nav-register-button" href="../login/register.html">
        register
        </a>
    `
}



// Function to get query parameters from the URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search); // window.location.search returns the query string part of the URL (e.g., ?username="")
    return Object.fromEntries(params.entries()); // return { username: '' }
}

// Get the username from the URL
const { username } = getQueryParams();

if (username) {
    displayUserProfile(username);
} else {
    console.error('No username provided in the URL.');
}

function returnUser(username){
    const userChosen = users.find(user => user.getUsername() === username);
    console.log('1',userChosen.getLname());

    if(userChosen){
        userChosen.loadFromStorage(); // load the latest data
        console.log('2',userChosen.getLname());
        return userChosen;
    }
    else{
        console.error(`User with username ${userChosen.getUsername()} not found!`);
        return null;
    }
}

function displayUserProfile(username){

    const userChosen = returnUser(username);
    console.log('userChosen ', userChosen)
    console.log('userChosen.lname ', userChosen.getLname())

    // Display the background image chosen by the user in HTML file
    const backgroundImgElement = document.querySelector('.background-image-section');
    backgroundImgElement.innerHTML =   `<img class="background-image" src="${userChosen.getBackgroundImg()}">`


    // Display the user information in HTML file
    const informationElement = document.querySelector('.user-information-section');
    if(logInUser === userChosen){
        informationElement.innerHTML = `
            <img class="profile-picture" src="${userChosen.getProfileImg()}">
            
            <div class="user-informations">
                <div class="username-section">
                    <p class="username"><span class="userFLnames">${userChosen.getFname()} ${userChosen.getLname()}</span> &#64;${userChosen.getUsername()}</p>

                    <button class="btnEdit" data-username="${userChosen.getUsername()}">Edit Profile</button>
                </div>
                
                <p class="description">${userChosen.getDescription()}</p>
            </div>

            <div id="create-post">
                <p>create post</p>
            </div>
        `
        const btnEditElement = document.querySelector('.btnEdit');
        btnEditElement.addEventListener('click', () => {
            const username = btnEditElement.dataset.username; // Get the username from the button's data attribute
            window.location.href = `../edit-profile/edit-profile.html?username=${username}`; // Navigate to edit-profile.html with the Username in the URL
        })
    }
    else{
        informationElement.innerHTML = `
            <img class="profile-picture" src="${userChosen.getProfileImg()}">
            
            <div class="user-informations">
                <div class="username-section">
                    <p class="username"><span class="userFLnames">${userChosen.getFname()} ${userChosen.getLname()}</span> &#64;${userChosen.getUsername()}</p>
                </div>
                
                <p class="description">${userChosen.getDescription()}</p>
            </div>
        `
    }



    const postElement = document.querySelector('#main-content');
    let postHTML = '';

    // Loop each post and display each in the HTML file
    userChosen.userPosts.forEach((post) => {
        let headHTML = ''; // renew each time

        if(logInUser === userChosen){
            headHTML = `
                <div class="flex-section">
                    <div class="user-info">
                        <div class="post-user-icon" style='background-image: url("${userChosen.getProfileImg()}")'></div>
                        <a class="post-user" href="../post/post1.html">
                            <p>@${userChosen.getUsername()}</p>
                        </a>
                    </div>
                    <div>
                        <button class="btnDel">Delete Post</button>
                    </div>
                </div>
            `;
        }
        else{
            headHTML = `
                <div class="post-user-icon" style='background-image: url("${userChosen.getProfileImg()}")'></div>
                <a class="post-user" href="../post/post1.html">
                    <p>@${userChosen.getUsername()}</p>
                </a>
            `;
        }


        postHTML += (`
        <div class="post">
            <div class="post-info-controls">
                <hgroup class="post-info">
                    <ul class="post-tags"></ul>
                    <div class="post-user-container">` + headHTML + `</div>
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
    `)
    })

    postElement.innerHTML = postHTML;
}