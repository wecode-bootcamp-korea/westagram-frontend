const inputForm = document.querySelector('.login__form');
const inputId = document.querySelector('.input__id');
const inputPw = document.querySelector('.input__pw');
const inputBtn = document.querySelector('.login__form--btn');

function validate() {
  const idValue = inputId.value;
  const pwValue = inputPw.value;
  isValid(idValue, pwValue);
}

function isValid(id, pw) {
  const isId = id.includes('@'); // 이메일 @ 포함 확인
  const isPw = pw.length >= 5; // 비밀번호 길이 확인
  const isIdPw = isId && isPw;

  if (isIdPw) {
    inputBtn.disabled = false;
    inputBtn.style.backgroundColor = 'royalblue';
    inputBtn.style.cursor = 'pointer';
  } else {
    inputBtn.disabled = true;
    inputBtn.style.backgroundColor = '#C5E1FC';
    inputBtn.style.cursor = 'default';
  }
  // isIdPw ? location.href = "/main.html" : alert("로그인 양식을 지키세요!");
}

function pageMove(event) {
  console.log(event);
  event.preventDefault();
  location.href = '/main.html';
}

// 앤트리 포인트
inputForm.addEventListener('input', validate);
// inputBtn.addEventListener('click', pageMove);
inputForm.addEventListener('submit', pageMove);



// inputId.addEventListener('input', validate);
// inputPw.addEventListener('input', validate);

// 초기 코드
// !(입력값이 둘다 있을 경우) - 버튼 비활성화
// if(!(idValue && pwValue)) {
//   inputBtn.disabled = true;
//   inputBtn.style.backgroundColor = "#C5E1FC";
//   inputBtn.style.cursor = 'default';
// // 입력값이 둘다 있을 경우 - 버튼 활성화
// } else {
//   inputBtn.disabled = false;
//   inputBtn.style.backgroundColor = "royalblue";
//   inputBtn.style.cursor = 'pointer';
// }

// id pw 한번에 처리

// 3항 연산자
// loginBtn.disabled = btnValid ? false : ture;
// loginBtn.style.opacity = btnValid ? 1 : 0.5;
// loginBtn.style.cursor = btnValid ? "pointer" : "default";
// init
// value.includes('@') &&
// value.length > 5
// boolean 컨벤션 ex) "is"valid
// window.location.pathname /main.value
// location.replace
// keyup,input 이벤트 확인
