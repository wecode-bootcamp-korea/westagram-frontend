const thisIsId = document.querySelector('.id');
const thisIsPw = document.querySelector('.pw');
const thisIsButton = document.getElementsByClassName('btn_login')[0];
const thisIsForm = document.getElementsByClassName('loginform')[0];

function thisIsLogin (e){
    if(thisIsId.value && thisIsPw.value){
        thisIsButton.disabled = false;
        thisIsButton.style.backgroundColor = '#0095f6';
    }else {
        thisIsButton.disabled = true;
        thisIsButton.style.backgroundColor = '#b2dffc';
    }
    if (thisIsButton.disabled==false && e.code == 'Enter') {
        thisIsLogin();  
    }
}

thisIsId.addEventListener('keyup', thisIsLogin);
thisIsPw.addEventListener('keyup', thisIsLogin);
thisIsForm.addEventListener('keyup', thisIsLogin);