import { render } from "@testing-library/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/Main");
  };

  return (
    <>
      <div className="bigcontainer">
        <div className="container">
          <div className="logo">Westagram</div>
          <div className="warp loginform">
            <div className="loginId">
              <input
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                id="id"
              />
            </div>
            <div className="loginPw">
              <input type="text" placeholder="비밀번호" id="pw" />
            </div>
            <button onClick={goToMain} id="loginBtn" type="button">
              로그인
            </button>
            <a href="">
              <footer>비밀번호를 잊으셨나요?</footer>
            </a>
          </div>
        </div>
        <div className="bottom">Copyright by SeongYong</div>
      </div>
    </>
  );
};

export default Login;
