const loginForm = document.querySelector('.login-form');
const loginBtn = document.querySelector('button');

const idValidate = () => {
  const regExpId = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const id = loginForm.querySelector('#id');

  return regExpId.test(id.value);
};

const passwordValidate = () => {
  const regExpPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{5,16}$/;
  const pw = loginForm.querySelector('#pw');

  return regExpPassword.test(pw.value);
};

const loginActiveSuccess = () => {
  loginBtn.disabled = false;
  loginBtn.style.opacity = 1;
  loginBtn.style.cursor = 'pointer';
};

const loginActiveFail = () => {
  loginBtn.disabled = true;
  loginBtn.style.opacity = 0.4;
  loginBtn.style.cursor = 'default';
}

const loginAvailable = () => {
  const loginValidation = idValidate() && passwordValidate();
  
  loginValidation ? loginActiveSuccess() : loginActiveFail();
  return loginValidation;
};

const login = () => {
  loginAvailable() 
    ? loginBtn.querySelector('a').className = ""
    : loginBtn.querySelector('a').className = "loginBtn";
}

const init = () => {
  loginForm.addEventListener('input', loginAvailable);
  loginBtn.addEventListener('click', login);
};

init();
