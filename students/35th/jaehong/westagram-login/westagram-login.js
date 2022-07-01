const thisIsId = document.getElementsByClassName("id")[0];
const thisIsPw = document.getElementsByClassName("password")[0];
const thisIsButton = document.getElementsByClassName("button")[0];

//아이디의 유효성을 검사하는 함수
function isValidId() {
  let idValue = thisIsId.value;
  let isValidId = idValue.length > 0 && idValue.indexOf("@") >= 0;
  return isValidId;
}
//패스워드의 유효성을 검사하는 함수
function isValidPw() {
  let pwValue = thisIsPw.value;
  let isValidPw = pwValue.length > 5;
  return isValidPw;
}
//아이디, 패스워드 양쪽 유효성을 검사하는 함수
function isTotallyValid() {
  if (isValidId() && isValidPw()) {
    return true;
  } else {
    return false;
  }
}
//여기서 반드시 리턴이하 부분이 필요한가?

//버튼 활성화에 대한 함수
function buttonActivate() {
  thisIsButton.style.backgroundColor = "#0095f6";
  thisIsButton.cursor = "pointer";
  thisIsButton.disabled = false;
}

//버튼 비활성화에 대한 함수
function buttonDeactivate() {
  thisIsButton.style.backgroundColor = "#c4e1f7";
  thisIsButton.cursor = "default";
  thisIsButton.disabled = true;
}
//키보드가 타이핑 될 때마다 버튼 형태/기능 활성화 여부검사
document.addEventListener("keyup", (event) => {
  if (isTotallyValid()) {
    buttonActivate();
  } else {
    buttonDeactivate();
  }
});
//로그인 동작에 대한 함수
function login() {
  let address = "../westagram-main/westagram-main.html";
  location.href = address;
  thisIsId.value = null;
  thisIsPw.value = null;
  buttonFormDeact();
}
//로그인 버튼 클릭으로 인한 로그인 동작 함수
thisIsButton.addEventListener("click", login);

//
document.addEventListener("keypress", (event) => {
  if (event.code === "Enter" && isTotallyValid) {
    login();
  }
});
