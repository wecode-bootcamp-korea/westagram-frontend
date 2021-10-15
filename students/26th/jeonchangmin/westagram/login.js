const inputId = document.querySelector('.inputId');
const inputPassword = document.querySelector('.inputPw');
const button = document.querySelector('button');
const inputs = document.querySelectorAll('input');

inputs.forEach((inputTag) => {
  inputTag.addEventListener('keyup', checkInput);
});

function checkInput () {
  const IdValue = inputId.value;
  const IdValueCheck = IdValue.indexOf('@');
  const IdLength = inputId.value.length;
  const passwordLength = inputPassword.value.length;

  IdValueCheck !==- 1 && IdLength>0 && passwordLength>4 ? (
    button.style.opacity = 1,
    button.style.cursor = 'pointer'
    ) : (
    button.style.opacity = 0.5,
    button.style.cursor = 'default'
    )
}
