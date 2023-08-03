import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <div className="title">westagram</div>
        <div className="form">
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          ></input>
          <input type="password" placeholder="비밀번호"></input>
        </div>
        <div className="loginButton">
          <Link to='/main'>로그인</Link>
        </div>

        <a className="forgot" href="/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default Login;
