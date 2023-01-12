

 /*id ,pw에 각각 한 글자 이상써야 버튼이 활성화되도록, 
 원래 연한 파란색이었다가 활성화되면 파란색으로!>*/



const idInput = document.querySelector('.id');
const pwInput = document.querySelector('.pw');
const loginBtn = document.querySelector('.login');


function buttonOnOff() {
    if (idInput.value.length >= 1 && pwInput.value.length >= 1){
        loginBtn.disabled = false;
    } else {
        loginBtn.disabled = true;
    }
}

pwInput.addEventListener('keyup', buttonOnOff)

function goMain(){
   location.href = "main.html";
  }

loginBtn.addEventListener('click',goMain);