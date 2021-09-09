// 로그인 인풋값에 값이 있을시 색상 변환
let idInput = document.getElementById('idInput');
let pwInput = document.getElementById('pwInput');
let loginBtn = document.getElementById('loginClick');

idInput.addEventListener('click', function() {
    let idval = document.getElementById('idInput').value;

    if (!idval) {
        loginBtn.style.backgroundColor = 'black';
    } else {
        loginBtn.style.backgroundColor = 'white';
    }
});

// 특정 아이디와 비번 값이어야만 로그인이 되도록(메인페이지로 이동 가능하게)



// 비밀번호 잊으셨나요 버튼 클릭시 prompt창으로 핸드폰 번호 기입 d