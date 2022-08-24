const userId = document.getElementById('user-id');
const userPassword = document.getElementById('user-password');
const clickLogin = document.getElementById('click-login');

userId.addEventListener('keyup', activateButton);
userPassword.addEventListener('keyup', activateButton);
clickLogin.addEventListener('click', nextPage);

function activateButton(){
  let idValue = userId.value;
  let pwValue = userPassword.value;

  if(idValue.includes('@') > 0 && pwValue.length > 0) {
    clickLogin.disabled = false;
    clickLogin.style.cursor = "pointer";
    clickLogin.style.backgroundColor = "#1c7ed6";
  } else {
    clickLogin.disabled = true;
    clickLogin.style.cursor = "default";
    clickLogin.style.backgroundColor = "#C4E1FB";
  }
}

// function nextPage (){

// }