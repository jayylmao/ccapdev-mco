import { users } from "../test-data.js";


// Function to get query parameters from the URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search); // window.location.search returns the query string part of the URL (e.g., ?username="")
    return Object.fromEntries(params.entries()); // return { username: '' }
}

// Get the username from the URL
const { username } = getQueryParams(); // destructuring assignment

if (username) {
    displayEditProfile(username);
} else {
    console.error('No username provided in the URL.');
}


function returnUser(username){
    const userChosen = users.find(user => user.getUsername() === username);

    if(userChosen){
        userChosen.loadFromStorage(); // load the latest data
        return userChosen;
    }
    else{
        console.error(`User with username ${userChosen.getUsername()} not found!`);
        return null;
    }
}

function displayEditProfile(username){

    const userChosen = returnUser(username);

    // Display the user chosen profile and background images
    const imgSectionElement = document.querySelector('.overall-image-section');
    imgSectionElement.innerHTML =  `
        <div class="image-section">
            <label for="profileImage">Choose your profile image:</label>
            <input class="chosenProfileFile" type="file">
            <img class="chosenProfileImage" src="${userChosen.getProfileImg()}">
        </div>

        <div class="image-section">    
            <label for="backgroundImage">Choose your background image:</label>
            <input class="chosenBackgroundFile" type="file">
            <img class="chosenBackgroundImage" src="${userChosen.getBackgroundImg()}">
        </div>
    `

    // Display forms
    const formSectionElement = document.querySelector('.overall-form-section');
    formSectionElement.innerHTML = `
        <div>
            <div class="input-section">
                <label>Username:</label>
                <input class="username" type="text" placeholder="${userChosen.getUsername()}">
            </div>

            <div class="input-section">
                <label>First Name:</label>
                <input class="fName" type="text" placeholder="${userChosen.getFname()}">
            </div>
        </div>

        <div>
            <div class="input-section">
                <label>Last Name:</label>
                <input class="lName" type="text" placeholder="${userChosen.getLname()}">
            </div>

            <div class="input-section input-textarea">
                <label>Description:</label>
                <textarea class="description" placeholder="${userChosen.getDescription()}"></textarea>
            </div>
        </div>
    `


    // Show the steps after clicking the .chosenProfileFile button (changing profile picture)
    let profilePictureData;
    document.querySelector('.chosenProfileFile').addEventListener('change', function(event) {
        const fileSelected = event.target.files[0];

        if(fileSelected){
            const reader = new FileReader(); // create new FilReader object to read the file

            // Define what should happen once the file is read
            reader.onload = function(e) {
                const imageElement = document.querySelector('.chosenProfileImage');

                profilePictureData = e.target.result;  // Now we have the image data stored
                imageElement.src = profilePictureData;  // e.target.result contains the base64 image string
            };
            
            reader.readAsDataURL(fileSelected); 
        }
    });


    // Show the steps after clicking the .chosenBackgroundFile button (changing background picture)
    let profileBackgroundData;
    document.querySelector('.chosenBackgroundFile').addEventListener('change', function(event) {
        const fileSelected = event.target.files[0];

        if(fileSelected){
            const reader = new FileReader(); // create new FilReader object to read the file

            // Define what should happen once the file is read
            reader.onload = function(e) {
                const imageElement = document.querySelector('.chosenBackgroundImage');

                profileBackgroundData = e.target.result;  // Now we have the image data stored
                imageElement.src = profileBackgroundData;  // e.target.result contains the base64 image string
            };
            
            reader.readAsDataURL(fileSelected); 
        }
    });



    // Save the profile edited by the user
    document.querySelector('.btnSave').addEventListener('click', () => {

        const forms = ['.username', '.fName', '.lName', '.description'];
        forms.forEach((form) => {
            let value = document.querySelector(form).value.trim(); // Trim spaces to ensure clean data
            if(value){
                switch(form){
                    case '.username':
                        userChosen.updateField('username', value);
                        break;
                    case '.fName':
                        userChosen.updateField('fName', value);
                        break;
                    case '.lName':
                        userChosen.updateField('lName', value);
                        break;
                    case '.description':
                        userChosen.updateField('description', value);
                        break;
                }
            }
        });
        

        if(profilePictureData !== undefined)
            userChosen.updateField('profileImg', profilePictureData);
        if(profileBackgroundData !== undefined)
            userChosen.updateField('backgroundImg', profileBackgroundData);
        
        userChosen.saveToStorage(); // save the data

        window.location.href = `../user-profile/user-profile.html?username=${username}`
    })
}