const loginId = document.getElementById('loginId');
const loginPw = document.getElementById('loginPw');
const loginBtn = document.getElementById('loginBtn');

loginId.addEventListener('keyup', (e) => {
    if (e.code === 'Backspace' || e.code === 'Delete' || e.code === 'ControlLeft') { // id pw 값 삭제시 -> 색상: 초기화, 커서 : auto
        (loginId.value === '' || loginId.value === null ? loginBtn.disabled = true : loginBtn.disabled = false);
    }
    else if (loginId.value !== '' && loginId.value !== null) { // id pw 값 체크 후 -> 색상: 진하게, 커서: pointer
        (loginPw.value !== '' && loginPw.value !== null ? loginBtn.disabled = false : loginBtn.disabled = true);
    }
});

loginPw.addEventListener('keyup', (e) => {
    if (e.code === 'Backspace' || e.code === 'Delete') {
        (loginPw.value === '' || loginPw.value === null ? loginBtn.disabled = true : loginBtn.disabled = false);
    }
    else if (loginId.value !== '' && loginId.value !== null) {
        (loginPw.value !== '' && loginPw.value !== null ? loginBtn.disabled = false : loginBtn.disabled = true);
    }
});

loginBtn.addEventListener('click', (e) => {
    if(loginId.value.indexOf('@') !== -1 ) {
        (loginPw.value.length < 5) ? alert('패스워드는 최소 5자 이상입니다.') : location.href = 'main.html';
    }
    else {
        alert('아이디는 "@" 가 포함되어야 합니다.');
    }
});