

const loginId = document.getElementById('inputId');
const loginPw = document.getElementById('inputPw');
const loginBtn = document.getElementsByClassName('loginBtn')[0];
const loginWrapper = document.getElementsByClassName('inputWrapper')[0];

const loginButton = document.getElementsByClassName('loginBtn')[0];


loginWrapper.addEventListener('input',function(){
  const isId = loginId.value;
  const isPassword = loginPw.value;  

  if(isId !== '' && isPassword !== "") {
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }
});


function goMain() {
  location.href = "main.html"
}

loginButton.addEventListener("click", goMain);