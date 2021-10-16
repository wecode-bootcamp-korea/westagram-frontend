/*Login Page*/
const loginBttn = document.getElementById('submit');
const thisIsUser = document.getElementById('username');
const thisIsPassword = document.getElementById('password');
const mainpageURL = "main.html";

const activateSubmit = () => {
    if(thisIsUser.value.includes('@')&&thisIsPassword.value.length > 5){
        loginBttn.classList.add("login-activate");
        loginBttn.disabled = false;

        thisIsUser.onkeydown = (e) => {if(e.key === 13)location.replace(mainpageURL)}
        thisIsPassword.onkeydown = (e) => {if(e.key === 13)location.replace(mainpageURL)}
    } else {
        loginBttn.classList.remove("login-activate");
        loginBttn.disabled = true;
    }
}

const init = () => {
    thisIsUser.oninput = activateSubmit;
    thisIsPassword.oninput = activateSubmit;
    loginBttn.onclick = (e) => {
        e.preventDefault();
        location.replace(mainpageURL)
    }
}

init()