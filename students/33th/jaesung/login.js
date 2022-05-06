const InputButton = document.querySelector(".login-button")
const userName = document.querySelector(".login-input")
const passWord = document.querySelector(".password-input")
console.log(userName);
function loginBtn (event) {
    let userNameValue = userName.value;
    let passWordValue = passWord.value;

    if(userNameValue.length > 0 && passWordValue.length > 0){
        InputButton.style.backgroundColor = "#1c7ed6";
        InputButton.disabled = false;
    }else{
        InputButton.disabled = true;
    }
};
userName.addEventListener('keyup',loginBtn);
passWord.addEventListener('keyup',loginBtn);



