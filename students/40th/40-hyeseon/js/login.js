const loginId = document.querySelector('#loginId');
const loginPw = document.querySelector('#loginPw');
const loginBtn = document.querySelector('#loginBtn');

loginId.addEventListener('keyup', activeEvent);
loginPw.addEventListener('keyup', activeEvent);

loginBtn.disabled = false;

function activeEvent() {
  // id나 pw창 중 하나라도 눌려있다면
  if (loginId.value && loginPw.value) {
    loginBtn.disabled = true;
    loginBtn.style.backgroundColor = '#0995f6';
    console.log('버튼 활성화');
  } else {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = '#c0dffd';
    console.log('버튼 비활성화');
  }
}
