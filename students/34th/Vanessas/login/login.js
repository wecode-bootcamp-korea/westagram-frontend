
const username = document.querySelector('.inputID')
const password = document.querySelector('.inputPW')
const button = document.querySelector('.button')

username.addEventListener('keyup', (activateLoginButton) => {
    if (username.value !== '' && password.value > 0) {
        button.disabled = false;
        button.style.backgroundColor = "#0095f6";
    } else {
        button.disabled = true;
        button.style.backgroundColor = "#c9e9fd";
    }
})
password.addEventListener('keyup', (activateLoginButton) => {
  if (username.value !== '' && password.value > 0) {
      button.disabled = false;
      button.style.backgroundColor = "#0095f6";
  } else {
      button.disabled = true;
      button.style.backgroundColor = "#c9e9fd";
  }
})