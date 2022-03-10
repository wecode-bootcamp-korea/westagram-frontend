let id = document.getElementById('id');
let pwd = document.getElementById('password');

let loginButton = document.getElementById('login-btn');

loginButton.classList.add('deactive-btn');

document.addEventListener('keydown', preventSpace);
document.addEventListener('keyup', emptyCheck);

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
