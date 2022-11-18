const loginForm = document.querySelector('.loginForm');
const loginId = document.querySelector('.loginId');
const loginPw = document.querySelector('.loginPw');
const loginBtn = document.querySelector('.loginBtn');
const commentAlert = document.querySelector('.alertComment');

loginBtn.disabled = false;
commentAlert.style.visibility = 'hidden';

loginId.addEventListener('input', loginActiveEvent);
loginPw.addEventListener('input', loginActiveEvent);
loginBtn.addEventListener('click', loginCheck);

function loginActiveEvent() {
  if (loginId.value && loginPw.value) {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = '#0995f6';
  } else {
    loginBtn.disabled = true;
    loginBtn.style.backgroundColor = '#c0dffd';
  }
}

const RULES = {
  id: (value) => value.includes('@'),
  password: (value) => value.length >= 5,
};

function loginCheck(e) {
  e.preventDefault();
  const userForm = {
    id: loginId.value,
    password: loginPw.value,
  };
  const isAllValid = Object.entries(RULES).every(([key, rule]) =>
    rule(userForm[key])
  );

  if (!isAllValid) {
    loginId.style.border = '1px solid red';
    loginPw.style.border = '1px solid red';
    commentAlert.style.visibility = 'visible';
    commentAlert.style.color = 'red';
    commentAlert.style.fontWeight = '900';
  } else {
    commentAlert.style.visibility = 'hidden';
    // 바로가기 링크 체크
    window.location = 'http://127.0.0.1:5500/.main.html';
  }

  console.log(Object.entries(RULES));
}
