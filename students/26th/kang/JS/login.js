'use strict';

// 구현해야 하는 것.
// 001. insta btn이 평소에는 연한 파란색이다가 id와 pw가 작성되면 원래 색으로 돌아온다.
// id, pw가 둘 다 작성되어야 원래 색으로 오는거니까 "and 연산자로 묶고". 가자.
// 콜백함수가 더 헷갈린다. 함수를 따로 생성해서 써주자.

const thisIsBtn = document.getElementById('login-btn');
const thisIsId = document.getElementById('idBox');
const thisIsPw = document.getElementById('pwBox');

function controlColor() {
  const idValue = document.getElementById('idBox').value;
  const pwValue = document.getElementById('pwBox').value;

  console.log('idValue', idValue);
  console.log('pwValue', pwValue);

  const condition = idValue === '' && pwValue === '';
  console.log(condition);

  condition ? (thisIsBtn.style.background = '#7acaff') : (thisIsBtn.style.background = '#0095F6');
}
thisIsId.addEventListener('keyup', controlColor);
thisIsPw.addEventListener('keyup', controlColor);

// 멘토님 코칭 후.
// 내가 원하던 파란색이 계속 나오지 않았던 이유를 코드로 보겠다.

// const condition = idValue && pwValue === '';
//   console.log(condition);
//   condition ? (thisIsBtn.style.background = '#7acaff') : (thisIsBtn.style.background = '#0095F6');

//   이미 조건을 줄 때부터 오류가 있었다. 둘 다 공백인 상태를 원한다면 idValue도 공백, pwValue도 공백이었어야 한다.
//   하지만 난 pwValue에만 공백이라는 조건을 줬고, 여기서 오류가 시작됐다.

//   그리고 삼항연산자.
//   삼항연산자의 ?에는 조건이 맞다면 나올 (=true) 결과를 써주고, : 에는 조건과 다를 때( = false)의 결과를 써줬어야 한다.
//   나는 참 거짓 결과의 위치를 바꿔서 작성을 했다. 위치만 맞춰서 작성해줬으면 될 것을 내가 작성한 코드로 이어나가려면

//   const condition = idValue !== '' && pwValue !== ''; 라고 작성해줘야 한다.

// 멘토님의 마지막 말씀. 항상 consoole.log로 내 코드가 어떻게 작동하는지 확인해줘라. 잊지 말자
