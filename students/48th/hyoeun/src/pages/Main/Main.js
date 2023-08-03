import React from "react";
import "./Main.css";

const Main = () => {
  return (
    // nav 바
    <div className="main">
      <nav className="nav">
        <div className="logo">
          <img className="images" src="/images/instagram.png" />
          <h3>WESTAGRAM</h3>
        </div>
        <input type="text" placeholder="검색"></input>
        <div className="imgsElements">
          <img className="images" src="/images/compass.png" />
          <img className="images" src="/images/heart.png" />
          <img className="images" src="/images/user.png" />
        </div>
      </nav>
      <main>
        <div>
          {/* 왼쪽편 */}
          {/* 피드이미지 */}
          <div>
            <img src="/" alt="동그란이미지사진" />
          </div>
          <div>
            <h4>wecode_bootcamp</h4>
          </div>
          <img className="sand" src="/images/sand1.png" width="60%" />

          {/* 피드 밑 아이콘 */}
          <div className="imgsElements">
            <img className="images" src="/images/heart.png" />
            <img className="images" src="/images/msg.png" />
            <img className="images" src="/images/download.png" />
          </div>

          {/*피드 아이곤 아래 좋아합니다 부분*/}

          <div class="likesleft">
            <img src="" alt="동그란사진" />
            <p>님 외 4명이좋아합니다</p>
            <p>
              sand ㅇㅁㄴㄹㄴㅁㅇㄹㅇㅁㅇ<a> 더 보기</a>
            </p>
          </div>
          <input type="text" placeholder="댓글 달기..." />
          <button>게시</button>
        </div>
      </main>
    </div>
  );
};

export default Main;
