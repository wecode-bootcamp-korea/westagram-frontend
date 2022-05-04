const thisIsId = document.querySelector('.id');
const thisIsPassWord = document.querySelector('.passWord');
const thisIsBtn = document.getElementsByClassName('btn')[0];

thisIsId.addEventListener('input',login);
thisIsPassWord.addEventListener('input',login);

function login() {
    if(thisIsId.value && thisIsPassWord.value) {
        thisIsBtn.disabled = false;
    }else {
        thisIsBtn.disabled = true;
    }
}
