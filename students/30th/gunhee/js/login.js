const inputs = document.querySelectorAll('input');
const idInput = inputs[0];
const passwordInput = inputs[1];
const loginBtn = document.querySelector('#login_btn');

// idInput.addEventListener('keyup',function() {});
// passwordInput.addEventListener('keyup', function() {});
// document.addEventListener('keyup', function() {
//   idInput.value != 0 && passwordInput.value != 0 ? loginBtn.style.backgroundColor = '#0095F6' : loginBtn.style.backgroundColor = '#c0dffd'
// })

idInput.addEventListener('keyup', function(x) {
  console.log(x);
  console.log(x.key);
})
