const inputId = document.querySelector('.inputId');
const inputPassword = document.querySelector('.inputPw');
const button = document.querySelector('button');
const inputs = document.querySelectorAll('input');

const init = () => {
  inputs.forEach(inputTag => {
    inputTag.addEventListener('keyup', getValue);
  });
}

init();

function getValue() {
  const IdValue = inputId.value;
  const pwValue = inputPassword.value;
  checkValues(IdValue, pwValue);
}

function checkValues(IdValue, pwValue) {
  const IdValueCheck = IdValue.indexOf('@');
  IdValueCheck !==- 1 && IdValue.length > 4 && pwValue.length > 4 ? (
    buttonOn()
  ) : (
    buttonOff()
  )
}

function buttonOn() {
  button.style.opacity = 1;
  button.style.cursor = 'pointer';
}

function buttonOff() {
  button.style.opacity = 0.5;
  button.style.cursor = 'default';
}