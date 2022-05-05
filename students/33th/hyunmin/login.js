const id = document.getElementById('id');
const password = document.getElementById('password');
const loginBtn = document.getElementsByClassName('loginBtn')[0];

// ID, PW 길이에 따른 로그인버튼
const activateLogin = () => {
    let idValue = id.value;
    let pwValue = password.value;

    if(idValue.length >= 1 && pwValue.length >= 1) {
        loginBtn.disabled = false;
        loginBtn.style.backgroundColor = '#0095F6';
        loginBtn.style.cursor = 'pointer';
    } else {
        loginBtn.disabled = true;
        loginBtn.style.backgroundColor = '#C0DFFD';
        loginBtn.style.cursor = 'default';
    }
}

const successLogin = () => {
    alert('로그인 성공!');
}

id.addEventListener('keyup', activateLogin);
password.addEventListener('keyup', activateLogin);
loginBtn.addEventListener('click', successLogin);
