const loginId = document.getElementById('login-id');
const loginPassword = document.getElementById('login-password');
const buttonLogin = document.getElementById('login-button');

loginId.addEventListener('keyup', loginEvent);
loginPassword.addEventListener('keyup', loginEvent);

function loginEvent() {

    if (loginId.value.length >= 1 && loginPassword.value.length >= 1) {
        buttonLogin.disabled = false;
        buttonLogin.style.backgroundColor = '#0095F6';
    }
}


function login() {
    if (!loginId.value.includes('@')) {
        alert('아이디에 @를 포함하세요');
        return;
    }

    if (loginId.value.length < 5) {
        alert('아이디를 5자 이상 입력하세요');
        return;
    }
    if (loginPassword.value.length < 5) {
        alert('비밀번호를 5자 이상 입력하세요');
        return;
    }
    location.href = "main.html";
}



