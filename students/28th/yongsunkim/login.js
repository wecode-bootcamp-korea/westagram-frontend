

const loginId = document.querySelector("#inputId");
const loginPw = document.querySelector("#inputPw");
const loginButton = document.querySelector(".btn");

function loginBtn() {
    let idValue = loginId.value;
    let pwValue = loginPw.value;

    if(idValue.length > 2 && pwValue.length > 2) {
      loginButton.disabled = false;
      loginButton.style.backgroundColor = "#1c7ed6";
    } else {
      loginButton.disabled = true;
      loginButton.style.backgroundColor = "#C0DFFD";
    }
};

loginId.addEventListener('keyup', loginBtn);
loginPw.addEventListener('keyup', loginBtn);

