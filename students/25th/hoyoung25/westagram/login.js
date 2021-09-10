

let logIn = document.querySelector('input');
let pass = document.querySelector('input:nth-child(2)');
let logInBtn = document.querySelector('button');


logIn.addEventListener('keyup',keyUpBtn);
pass.addEventListener('keyup',keyUpBtn);

function keyUpBtn(){
  if(logIn.value && pass.value){
    logInBtn.style.backgroundColor='blue'
  }else{
    logInBtn.style.backgroundColor='#B9DFFC'
  }
}

