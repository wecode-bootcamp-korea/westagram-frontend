const USER_ID = document.querySelector('.loginArea_userInterface_userName');
const USER_PW = document.querySelector('.loginArea_userInterface_userPassword');
const LOGIN_BUTTON = document.querySelector('.loginArea_userInterface_loginButton');

USER_ID.addEventListener('keyup', enabledButton);
USER_PW.addEventListener('keyup', enabledButton);

function enabledButton() {
  if (USER_ID.value && USER_PW.value) {
    LOGIN_BUTTON.disabled = false;
  } else LOGIN_BUTTON.disabled = true;
}

