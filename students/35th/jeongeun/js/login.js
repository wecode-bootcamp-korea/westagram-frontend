// id, pw 에 각각 한 글자 이상 써야 버튼이 활성화 되도록 해주세요. 
// 원래 연한 파란색이었다가 -> 활성화 되면 파란색으로!

// 현재 id, pw 입력 시 무조건 로그인 버튼이 활성화 되어 있도록 구현이 되어 있습니다.
// 실제 로그인 하는 경우를 생각하며 validation(유효성 검사) 기능을 추가해주세요.
// ex) id >>> '@' 포함 / pw >>> 5글자 이상

const id = document.querySelector('.id');
const pw = document.querySelector('.password');
const button = document.querySelector('button');

// const changeButtonColor = function () {
//   if (id.value.length && pw.value.length > 1) {
//     button.style.backgroundColor = 'blue';
//     return
//   } else {
//     button.style.backgroundColor = '#BEE2FD';
//     return
//   }
// }

const changeButtonColor = function () {
  ((id.value.length > 1) && (pw.value.length > 4) && (id.value.includes('@'))) ? (
    button.style.backgroundColor = 'blue'
  ) : (
    button.style.backgroundColor = '#BEE2FD'
  )
}


id.addEventListener('keyup', changeButtonColor);
pw.addEventListener('keyup', changeButtonColor);
