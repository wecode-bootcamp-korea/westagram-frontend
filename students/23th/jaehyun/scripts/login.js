const loginButton = document.getElementsByClassName('loginButton')[0];
const userId = document.getElementById('userId');
const password = document.getElementById('password');

window.onload = () => {
  userId.focus();

  userId.addEventListener('keydown', (e) => {
    inputCheck();  
  })
  
  userId.addEventListener('keyup', (e) => {
    inputCheck();
    if(e.code === 'Enter') {
      logIn();
    }
  })
  
  password.addEventListener('keyup', (e) => {
    inputCheck();
    if(e.code === 'Enter') {
      logIn();
    }
  })

  document.getElementsByClassName('passwordText')[0].addEventListener('mouseup', () => {
    alert("다음부터는 까먹지 마세요")
    window.location.href='./main.html';
  })
}

function logIn() {
  let loginValidation = validation();
  
  if(loginValidation){
    alert("로그인 되었습니다");
    loginButton.disabled = true;
    window.location.href='./main.html';
  }
}

function validation() {
  if(!userId.value.includes("@")){
    alert("ID는 이메일 형식이여야 합니다!");
    return false;
  }
  if(password.value === '') {
    alert("비밀번호를 입력해주세요!!");
    return false;
  }
  if(password.value.length <= 4) {
    alert("비밀번호는 5자리 이상입니다!");
    return false;
  } 
  return true; 
}

function inputCheck() {
  userIdCheck = userId.value ? true : false;
  passwordCheck = password.value ? true : false;

  if(userIdCheck && passwordCheck) {
    loginButton.disabled = false;
    loginButton.style.backgroundColor = '#3484e4';
  }
  if(!userIdCheck || !passwordCheck) {
    loginButton.disabled = true;
    loginButton.style.backgroundColor = '#c3e0fa;';
  }
}

loginButton.addEventListener('click', logIn);
