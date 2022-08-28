const $inputBox = document.querySelector('#inputBox')
const $inputId = document.querySelector('#inputId');
const $inputPw = document.querySelector('#inputPw');
const $inputBtn = document.querySelector('#loginBtn');

// 함수는 기능별로 분류해야 가독성 및 유지보수에 좋다.
// 아래 함수는 인풋값을 true, false 로 판단만 해주는 역할
// id, pw 의 판별은 별도의 함수로 빼서 확인, 판별 조건만 수정하기 쉽게
// ture, false 값을 담는 변수는 is- 로 선언, isValidId
// 확인된 불린 값을 받아 버튼을 활성화 하는 함수 선어, 작성은 바깥에

function handleInput() {
    const idValue = $inputId.value;
    const pwValue = $inputPw.value;
    
    isValidId = checkId(idValue);
    isValidPw = checkPw(pwValue);

    const isAllValid = isValidId && isValidPw;
    handleBtn(isAllValid);
}

// 아이디와 비밀번호 유효성 확인

function checkId(value) {
    if (value.includes("@")) {
        return true;
    } else {
        return false;
    }
}

function checkPw(value) {
    if (value.length >= 5) {
        return true;
    } else {
        return false;
    }
}

// 불린 값을 받는 삭제버튼
// 삼항 연산자 활용, 불린값을 기준으로 두가지 값 적용

function handleBtn(isBtnValid) {
    $inputBtn.disabled = isBtnValid ? false : true;
    $inputBtn.style.cursor = isBtnValid ? "pointer" : "default";
}

// 버튼 활성화 후, 이메일 주소를 검사한 후 이메일 주소가 형식이 맍으면 main.html 으로 이동합니다.

const isEmail = (email) => {
    const emailRegex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(email);
}

function submitLogin(event) {
    event.preventDefault();
    if (isEmail($inputId.value)) {
        location.href = "/Users/rayong/Desktop/westagram-frontend/students/37th/rayong/main/main.html";
    } else {
        alert("이메일 주소가 맞나요?");
    }
}

// 페이지 안에 이벤트가 많아질 경우 아래처럼 별도 함수로 묶어서 관리
// input 태그를 form 태그로 감싸면, 각 이벤트들을 하나의 이벤트리스터러 확인 가능

const init = () => {
    $inputBox.addEventListener('keyup', handleInput);  
    $inputBox.addEventListener('submit', submitLogin);
};

init();