const loginId = document.getElementsByClassName('login')[0];
const loginPw = document.getElementsByClassName('login')[1];
const loginButton = document.getElementById('login-button');


function activateLoginButton (){
   let idValueLength = loginId.value.length;
   let pwValueLength = loginPw.value.length;

      (loginId.value.includes('@') && pwValueLength>5) ? 
      (loginButton.disabled = false) :
      (loginButton.disabled = true)   
}

loginId.addEventListener('keyup', activateLoginButton);
loginPw.addEventListener('keyup', activateLoginButton);
loginButton.addEventListener('click', () => {
   window.location.href = '../main.html';
})