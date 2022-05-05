const id = document.querySelector('#id');
const password = document.querySelector('#password');
const btn = document.querySelector('.login_button');

const loginActive = function() {

    let idValue = id.value;
    let passwordValue = password.value;

    if((idValue.length > 1 && passwordValue.length > 1)) {
        btn.classList.add('login_button_active')
    }
    else {
        btn.classList.remove('login_button_active')
    }

}

id.addEventListener('keyup',loginActive);
password.addEventListener('keyup',loginActive);

