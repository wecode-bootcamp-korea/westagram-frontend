const thisIsId = document.querySelector('#userId');
const thisIsPassword = document.querySelector('#password');
const thisIsButton = document.querySelector('button');
const thisIsLost = document.querySelector('a');

function keyfunction(){
    inputId=thisIsId.value;
    inputPw=thisIsPassword.value;

    if(inputId.length >=1 && inputPw.length>=1){
        thisIsButton.disabled = true;
        thisIsButton.style.backgroundColor = '#0000ff';
    }else{
        thisIsButton.disabled = false;
        thisIsButton.style.backgroundColor = '#c4e1fb';
    }
}

thisIsId.addEventListener('keyup',keyfunction)
thisIsPassword.addEventListener('keyup',keyfunction)

thisIsLost.addEventListener('click',lostPw)
function lostPw(){
    window.location.href='https://www.instagram.com/accounts/login/'
}