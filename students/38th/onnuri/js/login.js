const emailBox = document.querySelector('.input_email');
const pwBox = document.querySelector('.input_pw');
const loginBtn = document.querySelector('.login_btn');


window.addEventListener('keyup', () => {
  if(emailBox.value && pwBox.value){
    loginBtn.style.backgroundColor = "#0095f6";
    loginBtn.disabled = false;
    loginBtn.style.cursor = "pointer";
  }
})
loginBtn.addEventListener('click', () => {
  console.log('clicked');
})
