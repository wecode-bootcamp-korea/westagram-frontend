const id = document.getElementById("id");
const pw = document.getElementById("pw");
const login = document.getElementById("login");

login.addEventListener("click", function () {
  const id = document.getElementById("id").value;
  const password = document.getElementById("pw").value;

  if (!id) {
    alert("아이디를 입력해주세요!");
    return;
  } else if (!password) {
    alert("비밀번호를 입력해주세요!");
    return;
  } else {
    alert("로그인 성공!");
  }
});
