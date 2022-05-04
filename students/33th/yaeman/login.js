const idForm = document.querySelector('#login-id')
const pwForm = document.querySelector('#login-pw');
const loginButton = document.querySelector('.login-btn');

function loginBtn() {
    const idVaule = idForm.value;
    const pwVaule = pwForm.value;

    if(idVaule.length > 0 && pwVaule.length > 0) {
        loginButton.disabled = false; //disabled 속성 설정하기 true면 비활성화 false면 활성화
        loginButton.style.cursor = "pointer";
        loginButton.style.backgroundColor = "#1c7ed6";
    } else {
        loginButton.disabled = true;
        loginButton.style.cursor = "default";
        loginButton.style.backgroundColor = "#C4E1FB";
    }
}

idForm.addEventListener('keyup', loginBtn);
pwForm.addEventListener('keyup', loginBtn);

