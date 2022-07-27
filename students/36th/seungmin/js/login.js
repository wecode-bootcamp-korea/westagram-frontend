const login = document.querySelector(".loginSubmit");
const id = document.querySelector("#idInput");
const pw = document.querySelector("#pwInput");

// 아이디 비밀번호 Input 검증 후 Value가 있으면 Login 버튼 활성화 , 색변경으로 시인성 강조
window.addEventListener("keyup", () => {
  id.value !== "" && pw.value !== ""
    ? (login.classList.add("loginAble"), (login.disabled = false))
    : (login.classList.remove("loginAble"), (login.disabled = true));
});

// Login 버튼 클릭시 Main 페이지로 연결
const goToMain = () => (window.location.href = "main.html");
