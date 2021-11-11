const id = document.querySelector('#id');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('.loginBtn');
const loginForm = document.querySelector('.inputWapper');

const checkLoginForm = () => {
  const allchecked = !!id.value && !!password.value;

  allchecked
    ? loginBtn.classList.remove('loginBtn--disable')
    : loginBtn.classList.add('loginBtn--disable');
  loginBtn.disabled = !allchecked;
};

const checkLoginValidation = () => {
  const idvalid = id.value.includes('@');
  const pwdvalid = password.value.length >= 5;
  if (idvalid && pwdvalid) {
    alert(`로그인 되었습니다.`);
    loginForm.reset();
    return;
  }

  let alertText = '';
  !idvalid && (alertText += `아이디에 '\@'이 포함되어야 합니다.`);
  !pwdvalid && (alertText += ` 비밀번호는 5자리 이상이어야 합니다.`);

  alert(alertText);
};

id.addEventListener('keyup', checkLoginForm);
password.addEventListener('keyup', (e) => {
  checkLoginForm();
  e.key === 'Enter' && checkLoginValidation();
});

loginBtn.addEventListener('click', checkLoginValidation);
