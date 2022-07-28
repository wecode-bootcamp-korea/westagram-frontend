const login = document.querySelector(".loginSubmit");
const id = document.querySelector("#idInput");
const pw = document.querySelector("#pwInput");

// ID입력창에 입력된 Value가 Email 형식인지 검증하는 정규식
const regExp = /^[0-9a-zA-Z]+[-_\.]?[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[a-zA-Z]{2,3}$/;

// 아이디 비밀번호 Input 검증 후 Value가 있으면 Login 버튼 활성화 , 색변경으로 시인성 강조
window.addEventListener("keyup", () => {
  id.value !== "" && pw.value !== ""
    ? (login.classList.add("loginAble"), (login.disabled = false))
    : (login.classList.remove("loginAble"), (login.disabled = true));
});

// Login 버튼 클릭시 Main 페이지로 연결 , 이메일 정규식 검증 , 비밀번호 길이 검증
const goToMain = () =>
  regExp.test(id.value) == true
    ? pw.value.length >= 5
      ? (window.location.href = "main.html")
      : alert("비밀번호의 길이가 너무 짧습니다.")
    : (alert("아이디가 이메일 형식이 아닙니다."),
      (id.innerHTML = ""),
      (pw.innerHTML = ""));
