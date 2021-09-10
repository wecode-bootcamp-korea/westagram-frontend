// 로그인 인풋값에 값이 있을시 색상 변환
const inputTag = document.getElementsByTagName('input');
const idInput = document.getElementById('idInput');
const pwInput = document.getElementById('pwInput');
const loginBtn = document.getElementsByClassName('loginGo')[0];

idInput.addEventListener('keyup', btnClick);
pwInput.addEventListener('keyup', btnClick);

// 아이디 인풋값에 키보드를 눌렀다 뗄 때 실행
inputTag.addEventListener('keyup', function(event) {
        // 아이디만 입력하고, 비번을 입력하지 않았을 때 비활성화
        if (idInput.value.length > 0 && pwInput.value.length == 0) {
            loginBtn.style.backgroundColor = "#b9def7";
        }

        // 아이디는 입력하지 않고, 비번만 입력했을 때 비활성화
        if (idInput.value.length == 0 && pwInput.value.length > 0) {
            loginBtn.style.backgroundColor = "#b9def7";
        }

        // 인풋창에서 백스페이스로 값을 지워웠을 때
        if (`${event.key}` == 'Backspace') {
            if (idInput.value.length == 0 && pwInput.value.length == 0) {
            loginBtn.style.backgroundColor = "#b9def7";
            }
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