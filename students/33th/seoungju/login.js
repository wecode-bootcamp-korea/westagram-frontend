const id = document.querySelector('.id');
const password = document.querySelector('.password');
const loginBtn = document.querySelector('.login_button');

const loginActive = function() {
    let idValue = id.value;
    let passwordValue = password.value;

    if(idValue && passwordValue) {
        loginBtn.classList.add('login_button_active')

        loginBtn.addEventListener('click',function() {
            location.href="main.html"
        })
    }
    else {
        loginBtn.classList.remove('login_button_active')
    }
}

id.addEventListener('keyup',loginActive);
password.addEventListener('keyup',loginActive);

