import "./Login.scss";
import React from "react";

import Close from "../../assets/images/close.png";

const Login = () => {
  return (
    <>
      <main className="boxLogin">
        <article className="boxContainer">
          <section className="boxCloseBtnArea">
            <button className="btnClose" />
          </section>
          <section className="boxTitle">
            <h1 className="txtTitle">Westagram</h1>
          </section>
          <section className="boxLoginInfo">
            <form className="boxLoginForm">
              <div className="boxId">
                <input
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  className="inputId"
                />
              </div>
              <div className="boxPw">
                <input
                  type="password"
                  placeholder="비밀번호"
                  className="InputPw"
                />
              </div>
              <div className="boxIsSaveLoginInfo">
                <input type="checkbox" className="inputIsSaveCheckBox" />
                <span className="txtIsSaveComment">로그인 정보 저장하기</span>
              </div>
              <div className="boxLoginBtn">
                <input type="submit" className="btnLogin" value="로그인" />
              </div>
              <div className="boxForgetPassword">
                <span className="txtForgetPassword">
                  비밀번호를 잊으셨나요?
                </span>
              </div>
            </form>
          </section>
        </article>
      </main>
    </>
  );
};

export default Login;
