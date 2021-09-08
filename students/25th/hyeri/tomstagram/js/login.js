(() => {
    const loginIdInput = document.querySelector(".info");
    const loginPasswordInput = document.querySelector(".password");
    const loginBtn = document.querySelector(".login_btn");

    loginPasswordInput.addEventListener('keyup', (e)=>{
        const loginIdInputValue = loginIdInput.value;
        const loginPasswordInputValue = loginPasswordInput.value;
        loginBtn.disabled = false;
        loginBtn.style.backgroundColor = "#0095f6";
        console.log(loginIdInputValue, loginPasswordInputValue);
    })

})();