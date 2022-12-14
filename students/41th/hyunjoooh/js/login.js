// input id 에 값이 생기고, input pw 에 값이 생기면
// 로그인버튼 login_btn_active 가 display block
// 동시에 로그인버튼 login_btn_no_active 은 none
// *** 삼항연산자 적용 ***

const loginBtn = document.getElementsByClassName("login_btn")[0];
const inputId = document.getElementsByClassName("id")[0];
const inputPw = document.getElementsByClassName("pw")[0];

const onKeyUpLogin = (e) => {
  inputId.value.length && inputPw.value.length > 3
    ? ((loginBtn.style.backgroundColor = "rgb(74, 116, 240)"),
      (loginBtn.style.cursor = "pointer"))
    : ((loginBtn.style.backgroundColor = "rgb(184, 199, 244)"),
      (loginBtn.style.cursor = "none"));
  return;
};

const loginBtnColorChange1 = (e) => {
  loginBtn.style.backgroundColor = "rgb(38, 76, 187)";
};

const loginBtnColorChange2 = (e) => {
  loginBtn.style.backgroundColor = "rgb(74, 116, 240)";
};

inputPw.addEventListener("keyup", onKeyUpLogin);
inputId.addEventListener("keyup", onKeyUpLogin);
loginBtn.addEventListener("mousedown", loginBtnColorChange1);
loginBtn.addEventListener("mouseup", loginBtnColorChange2);

// 다 실행은 되는데
// 아이디값을 지웠을 때 로긴버튼 비활성화 안됨
// 패스워드값을 마우스로 드래그하여 백스페이스 지웠을때 로긴버튼 비활성화 안됨 (해결!)
// --> inputId 에도 inputPw 에 이벤트로 걸어준 함수를 동일하게 걸어주면 해결되는 것이였음!
// 그리고 추가적으로, 로긴 활성화버튼, 비활성화버튼 따로 만들어줄 필요 없고
// 로긴 버튼 하나에서 백그라운드컬러와 커서포인터만 스타일을 따로 주면 되는 것이였음!
