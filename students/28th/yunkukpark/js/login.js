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

  if (event.code === 'Enter') {
    // TODO: 유효성 검사
    window.location = './main.html';
  }
};

const checkFilled = () => {
  const id = userId.value;
  const password = userPassword.value;

  if (!id || !password) return false;
  return true;
};

userId.addEventListener('keyup', handleButton);
userPassword.addEventListener('keyup', handleButton);

loginButton.addEventListener('click', () => {
  window.location = './main.html';
});
