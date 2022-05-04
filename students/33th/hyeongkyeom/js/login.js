const input = document.querySelector('input');
const mainId = document.querySelector(".mainId");
const mainPwd = document.querySelector(".mainPwd");
const loginBtn = document.querySelector(".loginBtn");

const loginBtnActive = () => {
    (!(mainId.value.includes('@') && mainPwd.value.length >= 5)) ? 
        loginBtn.disabled = true
    :
        loginBtn.disabled = false;
    }

mainId.addEventListener("keyup", loginBtnActive);
mainPwd.addEventListener("keyup", loginBtnActive);
mainPwd.addEventListener("keydown", (e) => {
    if((e.keyCode == 13) && (mainId.value.includes('@') && mainPwd.value.length >= 5)) {
        location.href='main.html'
    }
})