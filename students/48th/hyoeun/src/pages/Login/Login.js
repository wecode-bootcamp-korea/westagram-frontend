import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="logo">westagram</div>
      <div className="form">
        <input
          className="email"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        ></input>
        <input
          className="password"
          type="password"
          placeholder="비밀번호"
        ></input>
      </div>
      <div>
        <button className="btn" type="button">
          로그인
        </button>
        <div>
          <a className="re-pa" href="#">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
