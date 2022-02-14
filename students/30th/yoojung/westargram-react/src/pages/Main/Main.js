import React from "react";
import "./Main.css";
// import "../../../public/images";

const Main = () => {


  return (
    <>
      <div>
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
                <img className="navUserImg" src="/images/light.PNG" />
              </div>
            </div>
          </div>
        </nav>
        <div className="navOutline"></div>
      </div>
      <div className="main">
        <div>
          <main>

            {/* <!-- 하단 섹션 시작부분 --> */}
            <br />
            <section className="main">

              <div>
                <div>

                  <article>
                    <div className="feedsMain">
                      <div className="feedIdText">
                        {/* <!-- 피드 상단 프로필이미지 & 아이디 --> */}
                        <img className="profileImg" alt="profileImg" src="/images/light.PNG" />
                        <div>nyj_n</div>
                        {/* <!-- nyj_n --> */}
                      </div>
                      <img className="feedImg" alt="profileImg" src="/images/sakura.PNG" />
                      <div className="feedBottomIcon">
                        <div>
                          {/* <!-- 피드 하단 아이콘 --> */}
                          <img className="feedIcon" alt="heartIcon" src="/images/heart.png" />
                          <img className="feedIcon" alt="chatIcon" src="/images/chat-bubble.png" />
                          <img className="feedIcon" alt="directIcon" src="/images/direct-instagram.png" />
                        </div>
                        <div>
                          <img className="feedIcon" alt="saveIcon" src="/images/save-instagram.png" />
                        </div>
                      </div>
                      {/* <!-- 피드 좋아요 --> */}
                      <div className="feedBottom">
                        {/* <div style="font-size: small; font-weight: bold;"> */}
                        <div>
                          누군가 좋아합니다
                        </div>
                        <div className="commentTextStyle">
                          {/* <!-- 피드 아이디 & 내용 --> */}

                          <div className="idStyle">nyj_n</div>
                          <a>벚꽃 🌸</a>
                        </div>
                        <div className="commentViewBox">
                          <div className="commentFlex">
                            <span className="commentUser">yookiki</span>
                            <li className="commentStyle">여긴 어디?</li>
                          </div>
                        </div>
                      </div>

                      <section className="comment">
                        <div>
                          <div className="commentBox">
                            {/* <!-- 피드댓글 input --> */}
                            <input id="commentInput" type="text " placeholder="댓글달기.." />
                            <button id="commentBtn">게시</button>
                          </div>
                        </div>
                      </section>

                    </div>
                  </article>
                </div>
              </div>

              {/* <!--우측 피드 --> */}
              <div className="mainRight">
                <div>
                  <div className="mainRightImg">
                    <div>
                      {/* <!-- 상단 이미지 --> */}
                      <img className="rightImg" alt="profileImg" src="/images/light.PNG" />
                    </div>
                    <div>
                      nyj_n
                    </div>
                  </div>
                  <div>
                    <p>회원님을 위한 추천</p>
                  </div>
                  <div className="mainRightImg">
                    <div>
                      {/* <!-- 추천 아이디 --> */}
                      <img className="recommendImg" alt="profileImg" src="/images/bluebottle.PNG" />
                    </div>
                    <div>
                      Yookiki
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
  ;
export default Main;