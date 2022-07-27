const inputId = document.querySelector('.inputId');
const inputPassword = document.querySelector('.inputPassword');
const disabledButton = document.querySelector('.disabledButton');

const inputForm = document.querySelector('.loginForm');

inputForm.addEventListener('input', (e) => handleButtonDisabled(e));

function handleButtonDisabled(e) {
  if (inputId.value && inputPassword.value) {
    disabledButton.disabled = false;
    disabledButton.className = 'enabledButton';
  }
  if (e.target.value === '') {
    disabledButton.disabled = true;
    disabledButton.className = 'disabledButton';
  }
}
