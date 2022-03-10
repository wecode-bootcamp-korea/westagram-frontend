let id = document.getElementById('id');
let pwd = document.getElementById('password');

let loginButton = document.getElementById('login-btn');

loginButton.classList.add('deactive-btn');

document.addEventListener('keydown', preventSpace);
document.addEventListener('keyup', emptyCheck);
loginButton.addEventListener('click', (e) => {
  checkEmailValidation(e);
  checkPwdValidation(e);
});
function emptyCheck() {
  let isEmpty = true;
  id.value == '' || pwd.value == '' ? (isEmpty = true) : (isEmpty = false);
  if (isEmpty === true) {
    loginButton.disabled = true;
    loginButton.classList.add('deactive-btn');
    loginButton.classList.remove('active-btn');
  } else {
    loginButton.disabled = false;
    loginButton.classList.add('active-btn');
    loginButton.classList.remove('deactive-btn');
  }
}
function preventSpace(e) {
  if (e.keyCode == 32) {
    alert('공백은 입력이 불가합니다.');
    e.preventDefault();
  }
}
function checkEmailValidation(e) {
  if (id.value.indexOf('@') == -1) {
    alert('올바른 형식의 이메일을 작성해주세요.');
    e.preventDefault();
  }
}
function checkPwdValidation(e) {
  if (pwd.value.length < 5) {
    alert('비밀번호는 5자 이상이어야 합니다.');
    e.preventDefault();
  }
}
