const idInput = document.querySelector('.id-input');
const passwordInput = document.querySelector('.password-input');
const loginBtn = document.querySelector('.login-btn');
const loginForm = document.querySelector('.login-form');


function checkIdAndPassword() {
    if(idInput.value.length > 0 && passwordInput.value.length > 0) {
        loginBtn.classList.remove("disabled-btn");

    } else {
        loginBtn.classList.add("disabled-btn");
    }
}

function validationId() {
    if (idInput.value.includes("@")) {
        return true;
    } else {
        return false;
    }
}
function validationPassword() {
    if (passwordInput.value.length > 5) {
        return true;
    } else {
        return false;
    }
}


function movePageOrAlert() {
    if(validationId() === true && validationPassword() === true){
        location.href = "main.html";
    }  else if (validationId() === false){
        alert('이메일에 @를 포함시켜주세요');
    } else if (validationPassword() === false) {
        alert('비밀번호는 6자 이상 입력하세요');
    }
}

loginForm.addEventListener('input', function(){
    checkIdAndPassword();
    validationId();
    validationPassword();
});

loginBtn.addEventListener('click', function(){
    movePageOrAlert()
});

loginForm.addEventListener('keydown', (e) =>{
    if (e.code === "Enter" && idInput.value.length > 0 && passwordInput.value.length > 0){
        movePageOrAlert()
    }
});

