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

function movePage () {
    location.href = "file:///C:/Users/samsung/Desktop/wecode/westagram/main.html";
}

loginBtn.addEventListener('click', movePage);

loginId.addEventListener('keyup', checkIdPw);
loginPw.addEventListener('keyup', checkIdPw);