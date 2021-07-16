const loginButton = document.getElementsByClassName('loginButton')[0];
const userId = document.getElementById('userId');
const password = document.getElementById('password');
const formSelector = document.getElementsByClassName('account')[0];

window.onload = () => {
  userId.focus();
  loginButton.style.opacity = '10%';
  loginButton.disabled = true;

  document.getElementsByClassName('passwordText')[0].addEventListener('mouseup', () => {
    alert("다음부터는 까먹지 마세요")
    window.location.href='./main.html';
  })
}

function validation() {
  const inputUserid = userId.value;
  const inputpassword = password.value;
  if(inputUserid.length > 0 && inputpassword.length > 0) {
    if(inputUserid.includes('@') && (inputpassword.length < 5) ) {
        loginButton.disabled = false;
        loginButton.style.opacity = '100%';
     }
  }
  else{
      loginButton.style.opacity = '10%';
      loginButton.disabled = true;
  }
}

function signIn() {
  alert('환영합니다!');
  window.location.href= './main.html';
}

formSelector.addEventListener('input', validation);
loginButton.addEventListener('click', signIn);
