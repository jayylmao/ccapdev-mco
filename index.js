import { logInUser } from "./test-data.js";

const navSignInElement = document.querySelector('#nav-sign-in');
if(logInUser){
    logInUser.loadFromStorage();

    navSignInElement.innerHTML = `
        <a href="../user-profile/user-profile.html?username=${logInUser.getUsername()}">
            <img class="loginuser-profile-img" src="${logInUser.getProfileImg()}">
        </a>

        <div id="create-post">
            <p>create post</p>
        </div>
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



