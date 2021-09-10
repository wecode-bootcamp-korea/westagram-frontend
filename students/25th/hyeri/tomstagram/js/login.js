(() => {
    const loginIdInput = document.querySelector(".info");
    const loginPasswordInput = document.querySelector(".password");
    const loginBtn = document.querySelector(".login_btn");

    loginPasswordInput.addEventListener('keydown', () => {
        const loginIdInputValue = loginIdInput.value;
        const loginPasswordInputValue = loginPasswordInput.value;

        if (loginIdInputValue.length && loginPasswordInputValue.length) {
            //
            loginBtn.disabled = false
        } else {
            //
            loginBtn.disabled = true
        }

        // const test = loginBtn.attr('disabled');
        // test = false;

        // (loginPasswordInputValue == null && loginIdInputValue == null) ? loginBtn.style.backgroundColor = "#ddd" : test;
    })
    console.logZ
})();
