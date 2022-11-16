let loginInputId = document.getElementById('idInput');
let loginInputPw = document.getElementById('pwInput');

let loginBtnElement = document.getElementById('loginBtn');

window.addEventListener('keyup', ()=> {
    if (loginInputId.value.length > 0 && loginInputPw.value.length > 0) {
        loginBtnElement.classList.add('active');
        loginBtnElement.style
        } else {
            loginBtnElement.classList.remove('active');
    }
});

