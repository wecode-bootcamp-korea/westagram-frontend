const inputId = document.getElementsByClassName('userId')[0];
const inputPw = document.getElementsByClassName('userPw')[0];
const button = document.getElementsByClassName('loginBtn')[0];

let userIdValue = '';
let userPwValue = '';

const checkId = (e) => {
    userIdValue = e.target.value;
}

const checkPw = (e) => {
    userPwValue = e.target.value;
    if(userIdValue && userPwValue) {
        button.style.backgroundColor = 'rgb(65,147,239)';
    } else {
        button.style.backgroundColor = 'rgb(198,222,250)'
    }
}

inputId.addEventListener('input', checkId);
inputPw.addEventListener('input', checkPw);

//ID부분 우선 삭제시 비활성화 되지 않는 문제 해결 필요
//click 이벤트 미구현
//미션2 재확인하여 반영