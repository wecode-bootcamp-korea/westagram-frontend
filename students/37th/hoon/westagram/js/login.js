const loginBtn = document.querySelector("button");
const idBox = document.getElementById("idBox");
const passwordBox = document.getElementById("passwordBox");
const inputBox = document.getElementById("inputBox");

loginBtn.disabled = true;

function loginBtnActivator() {
    const id = idBox.value;
    const passWord = passwordBox.value;

    console.log(id.indexOf("@"));
    console.log(passWord.length);

    if(passWord !== "" && id !== "" && id.indexOf("@") !== -1 && passWord.length > 4) {
        loginBtn.style.backgroundColor = "#0095f7";
        loginBtn.disabled = false;
    } else {
        loginBtn.style.backgroundColor = "#bae1fc";
        loginBtn.disabled = true;
    }
}

function loginBtnHandler(event) {
    event.preventDefault();
    loginBtn.disabled === true ? "" : location.href = "main.html";
}

function inputBoxHandler(event) {
    event,preventDefault();
    
}

idBox.addEventListener("input", loginBtnActivator);
passwordBox.addEventListener("input", loginBtnActivator);
loginBtn.addEventListener("click", loginBtnHandler);
inputBox.addEventListener("submit", inputBoxHandler);