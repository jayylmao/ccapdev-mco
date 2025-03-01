function checkPasswords() {
    var password1 = document.forms["register-form"]["password1"].value;
    var password2 = document.forms["register-form"]["password2"].value;

    if(password1 != password2){
        document.getElementById("error-msg").innerHTML = "Passwords do not match.";
        document.getElementById("error-msg").style.display = "block";
    } else {
        document.getElementById("error-msg").style.display = "none";
        window.location.href = "../index.html";
        alert("Registration successful!");
    }
    return false;
}

function viewPassword() {
    var x = document.forms["login-form"]["password"];
    
    if (x.type === "password") {
        x.type = "text";
        document.getElementById("eye").src = "../assets/svg/eye-open-icon.svg";
    } else {
        x.type = "password";
        document.getElementById("eye").src = "../assets/svg/eye-closed-svgexport-1.svg";
    }

    return false;
     
    
}

// TODO: Check if account exists before logging in
function verifyLogin() {
    window.location.href = "../index.html";
    alert("Login successful!");
    
    return false;
}