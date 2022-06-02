const button = document.querySelector('.login_button_button');
const inputId = document.querySelector('.account_id');
const inputPw = document.querySelector('.account_pw');



function login() {
   location.href ="/main.html";
  
}
function accountCheck(){
   if(inputId.value.length >= 1 && inputPw.value.length>0){
      button.style.backgroundColor = "blue";
      button.disabled = false;
   }else{
      button.style.backgroundColor = "#C4E1FB";
      button.disabled = true;
   }
}


inputId.addEventListener('keyup', accountCheck);
inputPw.addEventListener('keyup', accountCheck);