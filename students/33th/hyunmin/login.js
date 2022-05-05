const id = document.getElementById('id');
const password = document.getElementById('password');
const loginBtn = document.getElementsByClassName('loginBtn')[0];

const verifyId = () => {
    const idValue = id.value;
    return idValue.includes('@') ? true : false;
}

const verifyPw = () => {
    const pwValue = password.value;
    return pwValue.length>=5 ? true : false;
}

// ID, PW 길이에 따른 로그인버튼
const activateLogin = () => {
    if(verifyId() && verifyPw()) {
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
    location.href = './main.html'
}

id.addEventListener('keyup', activateLogin);
password.addEventListener('keyup', activateLogin);
loginBtn.addEventListener('click', successLogin);
