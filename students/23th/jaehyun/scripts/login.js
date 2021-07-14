const loginButton = document.getElementsByClassName('loginButton')[0];
const userId = document.getElementById('userId');
const password = document.getElementById('password');

window.onload = () => {
  userId.focus();

  userId.addEventListener('keydown', (e) => {
    inputCheck(userId.value);  
  })
  
  userId.addEventListener('keyup', (e) => {
    if(e.code === 'Enter') {
      logIn();
    }
  })
  
  password.addEventListener('keyup', (e) => {
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
  loginButton.disabled = userId ? false : true;
  
  if(!loginButton.disabled) {
    loginButton.style.backgroundColor = '#3484e4';
  }
}

loginButton.addEventListener('click', logIn);
