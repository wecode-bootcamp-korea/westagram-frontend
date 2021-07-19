

// 1. 이메일을 입력한다
// 2. 비밀번호를 입력한다
// 3. 이메일에 값이 있는지 확인한다.
// 4. 비밀번호에 값이 있는지 확인한다.
// 5. 둘 다 값이 있으면 버튼을 활성화(여러 방법)
// 6. 하나라도 값이 없으면 그대로 진행
// 7. 로그인 버튼을 누른다
// 8. 알림창을 띄운다. "로그인 성공!"

// 3-1. 이메일 인풋에 접근
// 3-2. 인풋의 값을 가져와야 함

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const button = document.getElementsByClassName('button')[0];

function getValue(){
    if(email.value && password.value){
        // 버튼 활성화하는 방법 추가
        button.disabled = false;
        button.style.backgroundColor = '#0095F6';
    } else {
        // 버튼 비활성화
        button.disabled = true;
        button.style.backgroundColor = '#c0dffd';
    }
}

email.addEventListener("keyup", getValue);
password.addEventListener("keyup", getValue);