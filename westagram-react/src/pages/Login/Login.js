

import React from 'react';
import '../../assets/styles/reset.css';
import '../../assets/styles/common.css';
import './Login.css';

function Login() {

  return(
    <>
    <section className="main-box">

      <div className="logo">Westagram</div>

      <form className="wrap">
        <input type="text" className="nameEmail" placeholder="전화번호, 사용자 이름 또는 이메일" />

        <input type="password" className="passWord" placeholder="비밀번호"/>
        <button className="login-btn">로그인</button>
      </form>

      <div className="or-wrap">
        <div className="line"></div>
        <p>또는</p>
        <div className="line"></div>
      </div>

      <div className="facebook-login-btn">
        <button>
          <img src="../../images/facebook_icon.png"/>
          <span>Facebook으로 로그인</span>
        </button>
      </div>

      <div className="forgot-password">
        <a href="#">비밀번호를 잊으셨나요?</a>
      </div>

    </section>

    <section className="join-box">
      <p className="let-join">계정이 없으신가요?<a href="#">가입하기</a></p>
    </section>

    <div className="app-down">
      <p>앱을 다운로드하세요.</p>
      <div className="download-image">
        <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo" target="_blank"><img src="../../images/appstoredownload.png"/></a>
        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D9B98617F-78AA-471A-A22F-E8F80A1366E9%26utm_content%3Dlo%26utm_medium%3Dbadge" target="_blank"><img src="../../images/googleplaydownload.png"/></a>
      </div>
    </div>

    </>
    )
}

export default Login;
