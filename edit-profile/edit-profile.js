import { logInUser, loadUserListFromStorage } from "../user-profile/create-user.js";

function renderEditProfile(){

    console.log('edit-profile initialized')
    logInUser.loadFromStorage();
    loadUserListFromStorage();

    
    // Display the user chosen profile and background images
    const imgSectionElement = document.querySelector('.overall-image-section');
    imgSectionElement.innerHTML =  `
        <div class="image-section">
            <label for="profileImage">Choose your profile image:</label>
            <input class="chosenProfileFile" type="file">
            <img class="chosenProfileImage" src="${logInUser.getProfileImg()}">
        </div>

        <div class="image-section">    
            <label for="backgroundImage">Choose your background image:</label>
            <input class="chosenBackgroundFile" type="file">
            <img class="chosenBackgroundImage" src="${logInUser.getBackgroundImg()}">
        </div>
    `

    // Display forms
    const formSectionElement = document.querySelector('.overall-form-section');
    formSectionElement.innerHTML = `
        <div>
            <div class="input-section">
                <label>Username:</label>
                <input class="username" type="text" placeholder="${logInUser.getUsername()}">
            </div>

            <div class="input-section">
                <label>First Name:</label>
                <input class="fName" type="text" placeholder="${logInUser.getFname()}">
            </div>
        </div>

        <div>
            <div class="input-section">
                <label>Last Name:</label>
                <input class="lName" type="text" placeholder="${logInUser.getLname()}">
            </div>

            <div class="input-section input-textarea">
                <label>Description:</label>
                <textarea class="description" placeholder="${logInUser.getDescription()}"></textarea>
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
                        logInUser.updateField('username', value);
                        break;
                    case '.fName':
                        logInUser.updateField('fName', value);
                        break;
                    case '.lName':
                        logInUser.updateField('lName', value);
                        break;
                    case '.description':
                        logInUser.updateField('description', value);
                        break;
                }
            }
        });
        

        if(profilePictureData !== undefined)
            logInUser.updateField('profileImg', profilePictureData);
        if(profileBackgroundData !== undefined)
            logInUser.updateField('backgroundImg', profileBackgroundData);
        

        console.log(`Before storing:`, logInUser) // REMEMBER TO DELETE

        logInUser.saveToStorage();
        logInUser.loadFromStorage();
        logInUser.synchronize();
        loadUserListFromStorage();

        console.log(`After loading:`, logInUser) // REMEMBER TO DELETE
    })
}

renderEditProfile();