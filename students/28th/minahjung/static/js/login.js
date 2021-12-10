const userId = document.getElementById('user_id');
const userPw = document.getElementById('user_pw');
const loginBtn = document.getElementsByClassName('login_btn')[0];
const loginForm = document.querySelector('form');

function changeInputAndButton() {
    // padding 변경
    this.value ? this.className = 'change_padding' : this.className = 'default_padding';

    // 로그인 버튼 활성화 변경
    if (userId.value && userPw.value) {
        if (IsInputValid() === true) {
            loginBtn.removeAttribute('disabled');
            loginBtn.style.backgroundColor = 'rgba(0, 149, 246, 1)';
        }
    } else {
        loginBtn.setAttribute('disabled', '');
        loginBtn.style.backgroundColor = 'rgba(0, 149, 246, 0.3)';
    }
}

// 로그인 입력값 유효성 검사
function IsInputValid() {
    if ((userId.value.includes('@')) && (userPw.value.length > 4)) {
        return true;
    } else {
        return false;
    }
}

userId.addEventListener('input', changeInputAndButton);
userPw.addEventListener('input', changeInputAndButton);

loginBtn.addEventListener('click', function () {
    if (!this.hasAttribute('disabled')) {
        location.href = './main.html';
    }
});
loginForm.addEventListener('keydown', function (e) {
    if ((!loginBtn.hasAttribute('disabled')) && (e.key === 'Enter')) {
        location.href = './main.html';
    }
})