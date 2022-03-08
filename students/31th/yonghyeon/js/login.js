'use strict';

const inputId = document.querySelector('.loginForm_id');
const inputPw = document.querySelector('.loginForm_password');
const loginBtn = document.querySelector('.loginForm_loginBtn');

// id 1자 이상, pw 1자 이상 일시 로그인 버튼 활성화
const doLogin = () => {
  const id = inputId.value;
  const pw = inputPw.value;
  if (id.charAt(0) === ' ') {
    alert('이메일 첫글자가 공백입니다.');
    inputId.value = '';
  } else if (pw.charAt(0) === ' ') {
    alert('비밀번호 첫글자가 공백입니다.');
    inputPw.value = '';
  }

  if (id.length >= 1 && pw.length >= 1) {
    loginBtn.disabled = false;
    loginBtn.style.curser = 'pointer';
  } else {
    loginBtn.disabled = true;
    loginBtn.style.curser = 'default';
  }
};

// id('@' 유무), pw(5글자 이상) 유효성 검사
const doValidation = () => {
  const id = inputId.value;
  const pw = inputPw.value;
  if (!id.includes('@') && pw.length > 5) {
    alert(`이메일에 '@'가 포함되어야 합니다.`);
  } else if (pw.length < 5 && id.includes('@')) {
    alert('비밀번호가 5자리 이상이어야 합니다.');
  }

  if (!id.includes('@') && pw.length < 5) {
    alert(`이메일에 '@'가 포함되어야 하고, 비밀번호가 5자리 이상이어야 합니다.`);
  }
};

// 로그인버튼 활성화 이벤트
inputId.addEventListener('keyup', doLogin);
inputPw.addEventListener('keyup', doLogin);

// Id, Pw 유효성 검사 이벤트
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  doValidation();
});
