let userAccount = document.querySelector(".user-account");
let userPw = document.querySelector(".user-pw");
let loginBtn = document.querySelector(".login button");

function activateLoginBtn() {
  loginBtn.classList.add('active');
  if ((userAccount.value) == '' || (userPw.value) == '') {
    loginBtn.classList.remove('active');
  }
}

userAccount.addEventListener('input', activateLoginBtn);
userPw.addEventListener('input', activateLoginBtn);