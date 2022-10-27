const loginId = document.querySelector(".inputId");
const loginPw = document.querySelector(".inputPw");
const loginBtn = document.querySelector(".loginBtn");

const checkIdPw = () => {
    const Id = loginId.value;
    const Pw = loginPw.value;

    Id.includes("@") && Pw.length > 5
    ? loginBtn.disabled = false
    : loginBtn.disabled = true
}

loginId.addEventListener('keyup', checkIdPw);
loginPw.addEventListener('keyup', checkIdPw);