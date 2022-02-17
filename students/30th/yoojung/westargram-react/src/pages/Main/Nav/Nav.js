import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {

  return (
    <>
      <nav>
        <div className="nav">
          {/* <!-- 위스타그램 로고 --> */}
          <h1 className="logo">westagram</h1>
          <div className="inputBox">
            {/* <!-- 검색바 --> */}
            <input type="password " id="password" placeholder="검색" />
          </div>
          <div>
            <div>
              {/* <!-- 최상단 네비 아이콘 & 프로필이미지 --> */}
              <img className="navImg" src="/images/direct-instagram.PNG" />
              <img className="navImg" src="/images/heart.png" />
              {/* Link -> 메인 로그인화면으로 가는 "/"  &   user이미지 */}
              <Link to="/"><img className="navUserImg" src="/images/light.PNG" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="navOutline"></div>
    </>
  )
}

export default Nav;