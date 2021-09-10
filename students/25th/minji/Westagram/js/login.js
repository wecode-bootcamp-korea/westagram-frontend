const login_id = document.querySelector(".login_id");
const login_pw = document.querySelector(".login_pw");
const login_form = document.querySelector(".login_form");
const btn_login = document.querySelector(".btn_login");

// 유효성검사 통과시 버튼 활성화하고 메인으로 이동
const activateButton = () => {
  login_id.value.includes("@") && login_pw.value.length >= 5
    ? ((btn_login.disabled = false), (btn_login.style.opacity = 1))
    : ((btn_login.disabled = true), (btn_login.style.opacity = 0.4));
};

login_form.addEventListener("keyup", activateButton);
