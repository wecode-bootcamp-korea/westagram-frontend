const Id = document.getElementById("Id");
const Pw = document.getElementById("Password");
const Button = document.getElementById("login-button");

/**Id.addEventListener("keyup", login);
Pw.addEventListener("keyup", login);

function login() {
  if (!(Id.value && Pw.value)) {
    Button.disabled = true;
  } else {
    Button.disabled = false;
    Button.style.cursor = "pointer";
    Button.classList.remove("no-login");
    Button.classList.add("yes-login");
  }
}**/

/*function loginbutton() {
  if (Id.value && Pw.value) {
    if (Id.value.indexOf("@") >= 1 && Pw.value.length >= 5) {
      Button.disabled = false;
      Button.style.cursor = "pointer";
      Button.classList.remove("no-login");
      Button.classList.add("yes-login");
    } else {
      Button.disabled = true;
      Button.classList.remove("yes-login");
      Button.classList.add("no-login");
    }
  }
}

Id.addEventListener("keyup", loginbutton);
Pw.addEventListener("keyup", loginbutton);*/

//아이디에 @포함, 비밀번호 5글자 이상 기능 넣기
// 1. 아이디랑 비밀번호 비어있으면 버튼 비활성화
// 2. 아이디에@없고 비밀번호 5글자 미만이면 비활성화
// 각각 input 아래에 올바른 형식으로 입력하세요 빨간 글씨 나타나게?
// input id = ID 아래에 <p> 넣기
// <p> 안에 innerHTML로 올바른~ 넣기
// input id = Password도 똑같이

// 3. 그 외에는 활성화

function Login() {
  if (!(Id.value && Pw.value)) {
    Button.disabled = true;
    Button.classList.remove("yes-login");
    Button.classList.add("no-login");
  }

  if (Id.value.indexOf("@") == -1 || Pw.value.length <= 5) {
    Button.disabled = true;
    Button.classList.remove("yes-login");
    Button.classList.add("no-login");
  } else {
    Button.disabled = false;
    Button.style.cursor = "pointer";
    Button.classList.remove("no-login");
    Button.classList.add("yes-login");
  }
}

Id.addEventListener("keyup", Login);
Pw.addEventListener("keyup", Login);
