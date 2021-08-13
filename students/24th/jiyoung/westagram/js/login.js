let userAccount = document.querySelector(".user-account");
let userPw = document.querySelector(".user-pw");
let loginBtn = document.querySelector(".login button");

function activateLoginBtn() {
  loginBtn.classList.add('active');
  return ((userAccount.value) == '' || (userPw.value) == '') 
    ? loginBtn.classList.remove('active') 
    : 1;
}

userAccount.addEventListener('input', activateLoginBtn);
userPw.addEventListener('input', activateLoginBtn);