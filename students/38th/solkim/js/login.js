const idInput = document.querySelector('.id-input');
const passwordInput = document.querySelector('.password-input');
const loginBtn = document.querySelector('.login-btn');
const loginForm = document.querySelector('.login-form form');
let isIdOk;
let isPasswordOk;

function checkIdAndPassword() {
    if(idInput.value.length > 0 && passwordInput.value.length > 0) {
        loginBtn.style.disabled = "true";
        loginBtn.classList.remove("disabled-btn");

    } else {
        loginBtn.style.disabled = "false";
        loginBtn.classList.add("disabled-btn");
    }
}

function validationIdAndPassword() {
    if (idInput.value.includes("@")) {
        isIdOk = true;
    } else {
        isIdOk = false;
    }
    if (passwordInput.value.length > 5) {
        isPasswordOk = true;
    } else {
        isPasswordOk = false;
    }
}

function movePage() {
    location.href = "main.html";
}

idInput.addEventListener('keyup', function(){
    checkIdAndPassword();
    validationIdAndPassword();
});

passwordInput.addEventListener('keyup', function(){
    checkIdAndPassword();
    validationIdAndPassword();
});

loginBtn.addEventListener('click', function(){
    if(isIdOk === true && isPasswordOk === true){
        movePage();
    } else if (isIdOk === false){
        alert('이메일에 @를 포함시켜주세요');
    } else if (isPasswordOk === false) {
        alert('비밀번호는 6자 이상 입력하세요');
    }
});

loginForm.addEventListener('keydown', (e) =>{
    if (e.code === "Enter" && idInput.value.length > 0 && passwordInput.value.length > 0){
        if(isIdOk === true && isPasswordOk === true){
            movePage();
        }  else if (isIdOk === false){
            alert('이메일에 @를 포함시켜주세요');
        } else if (isPasswordOk === false) {
            alert('비밀번호는 6자 이상 입력하세요');
        }
    }
});

