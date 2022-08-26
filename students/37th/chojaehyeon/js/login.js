const idInput = document.querySelector("#id-input");
const pwInput = document.querySelector("#pw-input");
const loginButton = document.querySelector("#login-button");
const loginLink = document.querySelector("#login-link");
//  감싸고 있는 부모요소에 eventlistner에
// 이벤트 위임, 이벤트 버블링, 이벤트 캡쳐링
console.log(loginLink);
function typedLogin() {
  let loginId = idInput.value;
  let loginPw = pwInput.value;

  if (loginId.includes("@") && loginPw.length >= 5) {
    loginButton.classList = "on-button";
    loginLink.className = "on-link";
  } else {
    loginButton.classList = "off-button";
    loginLink.className = "off-link";
  }
}
//check Id PW 펑션을 나눠놓으면
//각각 수정 유지 보수도 쉬워짐.

//3항 연산자 활용해보기.
//트루일때 폴스 폴스일때 트루 -> 이런건 !not연산자 사용 굿.!!@

const init = () => {
  idInput.addEventListener("keyup", typedLogin);
  pwInput.addEventListener("keyup", typedLogin);
};
// 펑션이 많아질 경우 구분하기 위함
init();

//boolean naming convention
//isValidId isValidPw 등등... true false 반환하는 함수 작명예시.

// keycode 같은 디프리케이티드 되는 것들 잘 유의해서 써라.

// url이동시 replace 뒤로가기 안됨
