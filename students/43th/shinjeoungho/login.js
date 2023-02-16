const id = document.getElementById("email");
const password = document.getElementById("pas");
const loginButton = document.getElementById("loginBtn");

document.body.addEventListener("keyup", () => {
  console.log(id.value);
  console.log(password.value);

  if (id.value.length >= 1 && password.value.length >= 1) {
    loginButton.style.backgroundColor = "blue";
  } else {
    loginButton.style.backgroundColor = "#c4e1fb";
  }
});

loginButton.addEventListener("click", () => {
  console.log(id.value);
  console.log(password.value);

  if (id.value.length == 0) {
    alert("아이디를 입력하세요");
  } else if (id.value.length > 1 && password.value.length == 0) {
    alert("비밀번호를 입력하세요");
  } else if (
    id.value.length > 20 ||
    !id.value.includes("@", 5) ||
    !id.value.includes(".", 10)
  ) {
    alert("아이디 형식이 맞지 않습니다. 다시 입력하세요");
  } else if (id.value.length > 1 && password.value.length < 5) {
    alert("비밀번호는 5글자 이상입니다.");
  } else if (id.value === password.value) {
    alert("아이디와 비밀번호를 다르게 입력해주세요");
  } else {
    alert("로그인 성공");
  }
});
