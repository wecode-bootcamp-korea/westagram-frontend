const thisIsId = document.querySelector('.id');
const thisIsPw = document.querySelector('.pw');
const thisIsButton = document.getElementsByClassName('btn_login')[0];

thisIsId.addEventListener('keyup', thisIsLogin);
thisIsPw.addEventListener('keyup', thisIsLogin);

function thisIsLogin (){
    if(thisIsId.value && thisIsPw.value){
        thisIsButton.disabled = false;
        thisIsButton.style.backgroundColor = '#0095f6';
    }else {
        thisIsButton.disabled = true;
        thisIsButton.style.backgroundColor = '#b2dffc';
    }
}