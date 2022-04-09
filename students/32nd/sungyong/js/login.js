const id = document.getElementById('loginId');
const pw = document.getElementById('loginPw');
const btn = document.getElementById('loginBtn');

id.addEventListener('keyup', (e) => {
    if (e.code === 'Backspace' || e.code === 'Delete' || e.code === 'ControlLeft') { // id pw 값 삭제시 -> 색상: 초기화, 커서 : auto
        (id.value === '' || id.value === null ? btn.disabled = true : btn.disabled = false);
    }
    else if (id.value !== '' && id.value !== null) { // id pw 값 체크 후 -> 색상: 진하게, 커서: pointer
        (pw.value !== '' && pw.value !== null ? btn.disabled = false : btn.disabled = true);
    }
});

pw.addEventListener('keyup', (e) => {
    if (e.code === 'Backspace' || e.code === 'Delete') {
        (pw.value === '' || pw.value === null ? btn.disabled = true : btn.disabled = false);
    }
    else if (id.value !== '' && id.value !== null) {
        (pw.value !== '' && pw.value !== null ? btn.disabled = false : btn.disabled = true);
    }
});

btn.addEventListener('click', (e) => { // missio5 ID, PW validation
    if(id.value.indexOf('@') !== -1 ) {
        if (pw.value.length < 5) {
            alert('패스워드는 최소 5자 이상입니다.');
        }
        else {
            location.href = 'main.html';
        }
    }
    else {
        alert('아이디는 "@" 가 포함되어야 합니다.');
    }
});