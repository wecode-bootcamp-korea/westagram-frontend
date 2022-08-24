const nameEmail = document.querySelector(".nameEmail");
const passWord = document.querySelector(".passWord");
const loginBtn = document.querySelector(".login-btn");

function loginActive() {
  let idValue = nameEmail.value;
  let pwValue = passWord.value;

  if(idValue && pwValue) {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = '#0095f6';
    loginBtn.style.cursor = 'pointer';
  } else {
    loginBtn.disabled = true;
    loginBtn.style.cursor = 'default';
    loginBtn.style.backgroundColor = '#b2dffc';
  }
}

nameEmail.addEventListener('keyup', loginActive);
passWord.addEventListener('keyup', loginActive);


