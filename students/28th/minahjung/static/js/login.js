let user_id = document.getElementById('user_id');
let user_pw = document.getElementById('user_pw');
const login_btn = document.getElementsByClassName('login_btn')[0];
const login_article = document.querySelector('article');

function changeInputAndButton() {
    // padding 변경
    this.value ? this.className = 'change_padding' : this.className = 'default_padding';

    // 로그인 버튼 활성화 변경
    if (user_id.value && user_pw.value) {
        login_btn.removeAttribute('disabled');
        login_btn.style.backgroundColor = 'rgba(0, 149, 246, 1)';
    } else {
        login_btn.setAttribute('disabled', '');
        login_btn.style.backgroundColor = 'rgba(0, 149, 246, 0.3)';
    }
}

user_id.addEventListener('keyup', changeInputAndButton);
user_pw.addEventListener('keyup', changeInputAndButton);
login_btn.addEventListener('click', function () {
    if (!this.hasAttribute('disabled')) {
        location.href = '../../main.html';
    }
});
login_article.addEventListener('keydown', function (e) {
    if ((!login_btn.hasAttribute('disabled')) && (e.key === 'Enter')) {
        location.href = '../../main.html';
    }
})