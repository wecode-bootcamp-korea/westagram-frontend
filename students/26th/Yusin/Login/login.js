const inputs= document.getElementsByClassName("loginForm")[0];

const btn = document.getElementById("btn");

function handleInput() {

const idValue = document.getElementById("id").value;

const pwValue = document.getElementById("password").value;

const isValidId = checkId(idValue);

const isValidPw = checkPw(pwValue);

if (isValidId && isValidPw) {

handleBtn(true);

} else {

handleBtn(false);

}

}

function checkId(value) {

if (value.length > 0) {

return true;

} else {

return false;

}

}

function checkPw(value) {

if (value.length > 0) {

return true;

} else {

return false;

}

}

function handleBtn(btnValid) {

if (btnValid) {

btn.disabled = false;

btn.style.opacity = 1;

btn.style.cursor = "pointer";

if (window.event.code === "Enter"){

success(); //여기서 조건이 충족되어야 함.

}

} else {

btn.disabled = true;

btn.style.opacity = 0.3;

btn.style.cursor = "default";

}

}

function success() {

alert("반갑습니다!");

location.replace("");

}

const init =() => {

inputs.addEventListener("input", handleInput);

inputs.addEventListener("keyup", handleInput);

btn.addEventListener("click", success);

};

init(); //실행 해줘야함