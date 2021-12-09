const $id = document.querySelector('#id');
const $pw = document.querySelector('#pw');
const loginBtn = document.querySelector('button');

function loginActive() {
  const notEmpty = $id.value && $pw.value;
  
  if (notEmpty) {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = 'rgb(47, 122, 251)'
  } else {
    loginBtn.disabled = true;
    loginBtn.style.backgroundColor = 'rgb(197, 225, 251)'
  }
}
document.body.addEventListener('keyup', loginActive);
