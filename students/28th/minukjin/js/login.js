const $id = document.querySelector('#id');
const $pw = document.querySelector('#pw');
const loginBtn = document.querySelector('button');
const regExpId = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const regExpPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
// function loginActive() {
//   const notEmpty = $id.value && $pw.value;
  
//   if (notEmpty) {
//     loginBtn.disabled = false;
//     loginBtn.style.backgroundColor = 'rgb(47, 122, 251)'
//     loginBtn.className = 'btn-active'
//   } else {
//     loginBtn.disabled = true;
//     loginBtn.style.backgroundColor = 'rgb(197, 225, 251)'
//     loginBtn.className = '';
//   }
// }

const loginAvailable = () => {
  const idValidation = regExpId.test($id.value);
  const passwordValidation = regExpPassword.test($pw.value);
  const fullCheckValidation = idValidation && passwordValidation;

  if (fullCheckValidation) {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = 'rgb(47, 122, 251)'
    loginBtn.className = 'btn-active'
  } else {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = 'rgb(197, 225, 251)'
    loginBtn.className = 'btn-active'
  }
}
document.body.addEventListener('keyup', loginAvailable);
