import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginTextPage extends Component {
  render() {
    return (
      <article className="loginArticle">
        <Link className="leftArrow" to="/">
          <i className="fas fa-arrow-left"></i>
        </Link>
        <div>
          <img className="logo" src="Image/loginLogo.png" alt="logo" />
        </div>
        <div>
          <h1 className="LoginTextPageTitle">로그인</h1>
          <p className="LoginTextPageText">
            외워야 할 비밀번호가 많아 불편하셨죠?
            <br />
            <p className="LoginTextPageSubText">
              이제 일회용 코드를 이용하여 간편하게 로그인
              <br />
              하세요
            </p>
            <br />
            * 이메일 또는 휴대폰 번호 최초 인증 후 사용
            <br />
            가능
          </p>
        </div>

        <footer className="LoginTextPageFooter">
          <p className="LoginTextPageFooterMainText">
            WEKEA.kr -{' '}
            <Link className="LoginTextPageFooterLink" to="/">
              개인정보처리방침
            </Link>
          </p>
          <p className="LoginTextPageFooterSubText">
            © Inter WEKEA Systems B.V. 1999-2021
          </p>
        </footer>
      </article>
    );
  }
}
