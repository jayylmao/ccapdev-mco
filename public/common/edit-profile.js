// Show the steps after clicking the .chosenProfileFile button (changing profile picture)
document.querySelector('.chosenProfileFile').addEventListener('change', function(event) {
    const fileSelected = event.target.files[0];

    if(fileSelected){
        const reader = new FileReader(); // create new FilReader object to read the file

        // Define what should happen once the file is read
        reader.onload = function(e) {
            const imageElement = document.querySelector('.chosenProfileImage');

            imageElement.src = e.target.result;  // e.target.result contains the base64 image string
        };
        
        reader.readAsDataURL(fileSelected); 
    }
});


// Show the steps after clicking the .chosenBackgroundFile button (changing background picture)
document.querySelector('.chosenBackgroundFile').addEventListener('change', function(event) {
    const fileSelected = event.target.files[0];

    if(fileSelected){
        const reader = new FileReader(); // create new FilReader object to read the file

        // Define what should happen once the file is read
        reader.onload = function(e) {
            const imageElement = document.querySelector('.chosenBackgroundImage');

            imageElement.src = e.target.result;  // e.target.result contains the base64 image string
        };
        
        reader.readAsDataURL(fileSelected); 
    }
});