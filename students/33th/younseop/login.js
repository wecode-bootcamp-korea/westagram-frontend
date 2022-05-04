const loginBtn = document.getElementById('login-btn');
const userId = document.getElementById('id');
const userPw = document.getElementById('password');
const linkToMain = document.getElementsByTagName('a')[0];

function activedLogin () {
    if (userId.value && userPw.value) {
        loginBtn.disabled = false;
        linkToMain.href = "/Users/seop/Desktop/wecode/westagram-frontend/students/33th/younseop/main.html";
    } else {
        loginBtn.disabled = true;
        linkToMain.href = "#none";
    }
}

userId.addEventListener('keyup', activedLogin);
userPw.addEventListener('keyup', activedLogin);