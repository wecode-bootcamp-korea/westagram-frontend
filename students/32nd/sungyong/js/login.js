const loginId = document.getElementById('loginId');
const loginPw = document.getElementById('loginPw');
const loginBtn = document.getElementById('loginBtn');


loginId.addEventListener('keyup', (e) => {
    if (e.code === 'Backspace' || e.code === 'Delete' ||e.code === 'ControlLeft') {
        if (loginId.value === '' || loginId.value === null) {
            loginBtn.style.backgroundColor = '#CCDFF9'; // id pw 값 삭제시 버튼 색상 초기화
        }
    } 

    else if (loginId.value !== '' && loginId.value !== null) {
        if (loginPw.value !== '' && loginPw.value !== null) {
            loginBtn.style.backgroundColor = '#769EF6'; // id pw 값 체크 후 버튼 색상 진하게
        }
    }
});

loginPw.addEventListener('keyup', (e) => {
    if (e.code === 'Backspace' || e.code === 'Delete') {
        if (loginPw.value === '' || loginPw.value === null) {
            loginBtn.style.backgroundColor = '#CCDFF9';
        }
    }
    else if (loginId.value !== '' && loginId.value !== null) {
        if (loginPw.value !== '' && loginPw.value !== null) {
            loginBtn.style.backgroundColor = '#769EF6';
        }
    }
});