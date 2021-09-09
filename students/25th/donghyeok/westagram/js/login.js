const thisIsId = doucument.querySelector('#userId');
const thisIsPassword = doucument.querySelector('#password');
const thisIsButton = doucument.querySelector('button');
const thisIsLost = doucument.querySelector('a');

thisIsPassword.addEventListener('keydown', function(){
    const inputId = thisIsId.value;
    const inputPassword = thisIsPassword.value;

    if(inputId.length >= 1 && inputPassword.length >=1){
        thisIsButton.style.backgroundColor='#0095f6'
    }else{
        thisIsButton.style.backgroundColor='#c4e1fb'
    }
})