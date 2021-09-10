(() => {
    const loginIdInput = document.querySelector(".info");
    const loginPasswordInput = document.querySelector(".password");
    const loginForm = document.querySelector(".login_box > form");

    const loginBtn = document.querySelector(".login_btn");

    loginForm.addEventListener('keydown', () => {
        const loginIdInputValue = loginIdInput.value;
        const loginPasswordInputValue = loginPasswordInput.value;

        if (loginIdInputValue.length === 0 && loginPasswordInputValue.length === 0) {
            loginBtn.style.background="#b8dffc";
            loginBtn.disabled = true;
        } else if (loginIdInputValue.length > 0 && loginPasswordInputValue.length > 0) {
            loginBtn.style.background="#0095f6";
            loginBtn.disabled = false;
        }
    });
})();