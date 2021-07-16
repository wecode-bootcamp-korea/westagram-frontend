'use strict'

let loginBtn = document.getElementsByClassName('loginButton')[0];
let inputId = document.getElementsByClassName('loginId')[0];
let inputPassword = document.getElementsByClassName('loginPassword')[0];

function buttonColor() {
    let testId = inputId.value;
    let testPassword = inputPassword.value;
    if(testId.length > 0 && testPassword.length > 0) {
        loginBtn.style.backgroundColor = 'blue';
    } else {
        loginBtn.style.backgroundColor = 'skyblue';
    }
}

inputId.addEventListener('keyup', buttonColor);
inputPassword.addEventListener('keyup', buttonColor);

// -------------

// 현재 id, pw 입력 시 부조건 로그인 버튼이 활성화 외어 있도록 구현이 되어 있습니다.
// 실제 로그인 하는 경우를 생각하며 validation(유효성 검사) 기능을 추가해주세요.
// ex) id >>> '@' 포함 / pw >>> 5글자 이상

function loginValidation() {
  let testId = inputId.value;
  let testPassword = inputPassword.value;
  let idValidation = testId.indexOf('@');
  let passwordValidation = testPassword.length;
  
  if(idValidation === -1) {
    alert('ID는 이메일 형식으로 입력해주세요.')
  } else if(passwordValidation < 5) {
    alert('비밀번호는 5자리 이상으로 입력해주세요.')
  } else {
    alert('로그인되었습니다.')
  }
}

loginBtn.addEventListener('click', loginValidation);

// loginValidation();