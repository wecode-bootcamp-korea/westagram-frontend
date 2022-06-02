const userId = document.querySelector('#userName');
const userPw = document.querySelector('#pw');
const button = document.querySelector('#logInBtn')

function logInActive (){
    button.style.backgroundColor = '#0195f7';
    button.disabled = false;
}

function logInInactive (){
    button.style.backgroundColor = '#b2dffc';
    button.disabled = true;
}

window.addEventListener('keyup', () =>{
  userId.value && userPw.value ? logInActive() : logInInactive()
})


