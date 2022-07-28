// 1. 5글자 이상 입력시 로그인 버튼 활성화, 지웠을시 비활성화

const id = document.querySelector('#id');
const pw = document.querySelector('#pw');
const button = document.querySelector('#button');

// id, ps, button 각 차례로 변수 담기

const active = function () {
  let idValue = id.value;
  let pwValue = pw.value;
  // (idValue.length >= 5) && (pwValue.length >= 5) ? button.classList.add('loginActive') : button.classList.remove('loginActive');
  (idValue.length >= 5) && (pwValue.length >= 5) ? button.disabled = false : button.disabled = true;
}
//아이디, 비밀번호 각 5글자 이상시 로그인 버튼 활성화, 다시 지웠을때 로그인 버튼 비활성화. (삼항연산자)

id.addEventListener('keyup', active);
pw.addEventListener('keyup', active);

//각 아이디,패스워드 값에 keyup 이벤트 활성화시 해당 함수 실행.