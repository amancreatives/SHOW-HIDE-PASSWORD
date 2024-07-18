let eyeIcon = document.querySelector("#eye");
let password = document.querySelector("#pass");

eyeIcon.onclick = function() {
    if(password.type == "password"){
        password.type = "text";
        eyeIcon.src = "eye-open.png";
    } else {
        password.type = "password";
        eyeIcon.src = "eye-close.png";
    }
}