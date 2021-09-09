(() => {
    const loginIdInput = document.querySelector(".info");
    const loginPasswordInput = document.querySelector(".password");
    const loginBtn = document.querySelector(".login_btn");

    const loginPasswordInputValue = loginPasswordInput.value;
    const loginIdInputValue = loginIdInput.value;

    const loginInfo = loginPasswordInputValue && loginIdInputValue;

    // loginBtn.disabled = true : 
    // 
    
    loginPasswordInput.addEventListener('keyup', ()=> {
        (loginInfo === true) ? loginBtn.disabled = true : loginBtn.disabled = false;
        loginBtn.style.backgroundColor = "#0095f6";
    })

})();