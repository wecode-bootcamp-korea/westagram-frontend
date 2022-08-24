const nameEmail = document.querySelector(".nameEmail");
const passWord = document.querySelector(".passWord");
const loginBtn = document.querySelector(".login-btn");


function loginActive() {
  const idValue = nameEmail.value;
  const pwValue = passWord.value;

  if(idValue.includes('@') && (pwValue.length >= 5)) {
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


