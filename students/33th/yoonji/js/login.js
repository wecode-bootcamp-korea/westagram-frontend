const loginBtn = document.querySelector("button");
const idInput = document.querySelector("#userId");
const pwdInput = document.querySelector("#userPwd");

idInput.addEventListener("input", active);
pwdInput.addEventListener("input", active);

function active() {
    if(idInput.value && pwdInput.value) {
        loginBtn.disabled = false;
        loginBtn.classList.add("active");
    }else if(!idInput.value || !pwdInput.value) {
        loginBtn.classList.remove("active");
    }
}