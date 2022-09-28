const emailBox = document.querySelector('.input_email');
const pwBox = document.querySelector('.input_pw');
const loginBtn = document.querySelector('.login_btn');


window.addEventListener('keyup', () => {
  if(emailBox.value && pwBox.value){
    loginBtn.style.backgroundColor = "#0095f6";
  }
})
