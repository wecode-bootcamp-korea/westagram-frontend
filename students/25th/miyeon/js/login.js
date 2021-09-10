// 로그인 인풋값에 값이 있을시 색상 변환
const inputTag = document.getElementsByTagName('input')[0];
const idInput = document.getElementById('idInput');
const pwInput = document.getElementById('pwInput');
const loginBtn = document.getElementsByClassName('loginGo')[0];

idInput.addEventListener('keyup', btnClick);
pwInput.addEventListener('keyup', btnClick);

// 백스페이스로 지운 다음, Id값과 pw값이 0이면 색상 비활성화
idInput.addEventListener('keyup', function(event) {
    if (`${event.key}` == 'Backspace') {
        if (idInput.value.length == 0 && pwInput.value.length == 0) {
        loginBtn.style.backgroundColor = "#b9def7";
        }
    }
        if (idInput.value.length > 0 && pwInput.value.length == 0) {
            loginBtn.style.backgroundColor = "#b9def7";
        }

        if (idInput.value.length == 0 && pwInput.value.length > 0) {
            loginBtn.style.backgroundColor = "#b9def7";
        }
    
})

function btnClick() {
    if (idInput.value.length > 0 && pwInput.value.length > 0) {
        loginBtn.style.backgroundColor = "#0095f6";
    }
}


// 특정 아이디와 비번 값이어야만 로그인이 되도록(메인페이지로 이동 가능하게)



// 비밀번호 잊으셨나요 버튼 클릭시 prompt창으로 핸드폰 번호 기입 


// (idWhat && pwWhat) ? cka : 거짓