const form = document.querySelector("#login form");
const id = document.querySelector("#login form .idInput");
const pwd = document.querySelector("#login form .pwdInput");
const button = document.querySelector("#login button");

form.addEventListener("keyup", function activeButton(){
    ((id.value.length >= 1 ) && (pwd.value.length >= 5) && (id.value.indexOf("@") > -1)) ? button.style.opacity = "1" : button.style.opacity = "0.5";
});