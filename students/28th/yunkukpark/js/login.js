const userId = document.querySelector('#user-id');
const userPassword = document.querySelector('#user-password');
const loginButton = document.querySelector('.login-button');

const handleButton = (event) => {
  const isFilled = checkFilled();
  if (isFilled) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
    return;
  }
};

const checkFilled = () => {
  const id = userId.value;
  const password = userPassword.value;

  if (!id || !password) return false;
  return true;
};

const validateLogin = (id, password) => {
  const validateId = (id) => {
    // TODO: 스트링 메소드 특정 문자 찾기 확인할 것
    if (id.indexOf('@') === -1) {
      alert('님 아이디에 @ 안씀');
      return false;
    }
    return true;
  };
  const validatePassword = (password) => {
    if (password.length > 5) {
      return true;
    }
    if (password.length <= 5) {
      alert('님 비밀번호 5글자 이상 아님?');
      return false;
    }
  };

  const isValidId = validateId(id);
  const isValidPassword = validatePassword(password);

  const isValidated = isValidId && isValidPassword;
  return isValidated;
};

const handleLogin = () => {
  const isValidated = validateLogin(userId.value, userPassword.value);
  if (isValidated) {
    window.location = './main.html';
  }
};

userId.addEventListener('keyup', handleButton);
userPassword.addEventListener('keyup', handleButton);
userPassword.addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    handleLogin();
  }
});
loginButton.addEventListener('click', handleLogin);
