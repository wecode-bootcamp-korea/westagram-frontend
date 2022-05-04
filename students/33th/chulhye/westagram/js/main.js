(() => {

    const inputId = document.querySelector('.inputId');
    const inputPassword = document.querySelector('.inputPassword');
    const loginBtn = document.querySelector('.loginBtn');

    document.addEventListener('keyup', function loginCheck() {
        if (inputId.value !== "" && inputPassword.value !=="") {
            loginBtn.classList.add('activate');
        } else if (inputId.value == "" || inputPassword.value =="") {
            loginBtn.classList.remove('activate');
        }
    });



})();