import React from "react";
import "../Login/Login.css";
const LoginPage = () => {
  // const id = document.getElementById("id");
  // const password = document.getElementById("password");
  // const button = document.querySelector(".check");

  // function checkLogin(id, password) {
  //   if (id.length > 5 && password.length > 5) {
  //     button.disabled = false;
  //   } else {
  //     button.disabled = true;
  //   }
  // }

  // function buttonClick() {
  //   if (id.value && password.value) {
  //     checkLogin(id.value, password.value);
  //     button.style.background = "blue";
  //     button.style.cursor = "pointer";
  //   }
  //   if (!(id.value && password.value)) {
  //     checkLogin(id.value, password.value);
  //     button.style.background = "rgba(0, 0, 255, 0.5)";
  //   }
  // }
  // id.addEventListener("input", buttonClick);
  // password.addEventListener("input", buttonClick);

  return (
    <body className="login-display">
      <div className="login-box">
        <div className="logo">westagram</div>
        <div className="check-box">
          <input
            className="idPas"
            id="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="idPas"
            id="password"
            type="password"
            placeholder="비밀번호"
          />
          <button className="check" disabled>
            로그인
          </button>

          <a href="" className="forget">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </body>
  );
};

export default LoginPage;
