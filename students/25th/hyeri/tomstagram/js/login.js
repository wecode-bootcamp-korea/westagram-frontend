(() => {
    const loginIdInput = document.querySelector(".info");
    const loginPasswordInput = document.querySelector(".password");
    const loginBtn = document.querySelector(".login_btn");

    loginPasswordInput.addEventListener('keydown', () => {
        const loginIdInputValue = loginIdInput.value;
        const loginPasswordInputValue = loginPasswordInput.value;

        loginIdInputValue && loginPasswordInputValue ? loginBtn.disabled = true : loginBtn.disabled = false;
        loginBtn.style.backgroundColor = "#0095f6";
    })

})();