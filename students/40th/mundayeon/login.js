const idForm = document.querySelector('.id');
const pwForm = document.querySelector('.pw');
const button = document.querySelector('.btn');

idForm.addEventListener('keyup', loginBtn);
pwForm.addEventListener('keyup', loginBtn);

function loginBtn() {
  if (idForm.value && pwForm.value) {
    button.disabled = false;
    button.style.cursor = 'pointer';
    button.style.backgroundColor = '#1c7ed6';
  } else {
    button.disabled = true;
    button.style.cursor = 'default';
    button.style.backgroundColor = '#C4E1FB';
  }
}
