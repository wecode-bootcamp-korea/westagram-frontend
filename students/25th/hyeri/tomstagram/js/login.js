(() => {
    const loginIdInput = document.querySelector(".info");
    const loginPasswordInput = document.querySelector(".password");
    const loginBtn = document.querySelector(".login_btn");

    function activeHandler() {
        const loginIdInputValue = loginIdInput.value;
        const loginPasswordInputValue = loginPasswordInput.value;

        const loginSuccess = loginIdInputValue && loginPasswordInputValue;

        if (loginSuccess === true) {
            loginBtn.classList.add("active");
            loginBtn.disabled = false;
        }
    }

    loginPasswordInput.addEventListener('keydown', activeHandler());
})();


// if (loginIdInputValue.length && loginPasswordInputValue.length) {
//     loginBtn.disabled = false
// } else {
//     loginBtn.disabled = true
// }