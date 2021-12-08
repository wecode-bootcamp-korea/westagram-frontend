const $id = document.querySelector('#id');
const $pw = document.querySelector('#pw');
const loginBtn = document.querySelector('button');

function loginActive() {
  // const idValue = $id.value;
  // const pwValue = $pw.value;
  const notEmpty = $id.value && $pw.value;
  
  return notEmpty 
    ? loginBtn.style.backgroundColor = 'rgb(47, 122, 192)'
    : loginBtn.style.backgroundColor = 'rgb(197, 225, 251)';
}
document.body.addEventListener('keyup', loginActive);

//   if (notEmpty) {
//     loginBtn.style.backgroundColor = 'rgb(47, 122, 192)';
//   }
//   if (!notEmpty) {
//     loginBtn.style.backgroundColor = 'rgb(197, 225, 251)';
//   }

// document.querySelector('button').addEventListener('click', () => {

// });
