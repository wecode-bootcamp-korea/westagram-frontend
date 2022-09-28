const emailBox = document.querySelector('.input_email');
const pwBox = document.querySelector('.input_pw');
const loginBtn = document.querySelector('.login_btn');
const form = document.querySelector('.input_container');




window.addEventListener('keyup', () => {
  
  let idvalidation = emailBox.value.includes('@');
  let pwvalidation = pwBox.value.length;
  
  if(idvalidation && pwvalidation >= 5){
    loginBtn.style.backgroundColor = "#0095f6";
    loginBtn.disabled = false;
    loginBtn.style.cursor = "pointer";
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(emailBox.value.includes(" ") || pwBox.value.includes(" ")){
    emailBox.value = emailBox.value.replace(/(\s*)/g,'');
    pwBox.value = pwBox.value.replace(/(\s*)/g,'');
  }
  location.href = "main.html";

})

