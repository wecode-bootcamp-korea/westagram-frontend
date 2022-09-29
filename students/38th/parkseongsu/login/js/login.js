const idInput = document.getElementsByClassName('inputbox')[0];
const pwInput = document.getElementsByClassName('inputbox')[1];
const loginbtn = document.querySelector('.loginbtn');
const loginForm = document.getElementById('loginForm');
let idValue;


function loginallow(){
    if(idInput.value.includes('@')  && pwInput.value.length >5){
    loginbtn.classList.add('loginbtnallow');
    loginForm.addEventListener('submit', moveMain);

}else{
    loginbtn.classList.remove('loginbtnallow');
    loginForm.addEventListener('submit', notMoveMain);
}
};
function notMoveMain(event){
    event.preventDefault();
    
}

function moveMain(event){
    sessionStorage.setItem('userId', idInput.value)
    console.log(idValue);
    event.preventDefault();
    location.href = './main.html'
}

window.addEventListener('keyup', loginallow)

