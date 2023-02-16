const container = document.querySelector('#container');
const id = document.querySelector('#id');
const password = document.querySelector('#password');
const button = document.querySelector('#button');

container.addEventListener('keyup', function () {
  if (id.value && password.value) {
    button.classList.add('active');
  } else {
    button.classList.remove('active');
  }
});
