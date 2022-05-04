const input = document.querySelector('input');
const mainId = document.querySelector(".mainId");
const mainPwd = document.querySelector(".mainPwd");
const loginBtn = document.querySelector(".loginBtn");

const loginBtnActive = () => {
    if(!(mainId.value.includes('@') && mainPwd.value.length >= 5)) {
        loginBtn.disabled = true;
    } else {
        loginBtn.disabled = false;
    }}

mainId.addEventListener("keyup", loginBtnActive);
mainPwd.addEventListener("keyup", loginBtnActive);