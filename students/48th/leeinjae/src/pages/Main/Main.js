import React from "react";
import "./Main.scss";
import logo from "../../assets/images/instagram.png";
import compass from "../../assets//images/compass.png";
import heart from "../../assets//images/heart.png";
import profile from "../../assets//images/user.png";
import StoryUser from "../../components/StoryUser";
import RecommendUser from "../../components/RecommendUser";
import Feed from "../../components/Feed";

const Main = () => {
  return (
    <div className="main">
      <nav className="header">
        <div className="headerContent">
          <div className="logoBox">
            <div className="instagramLogo">
              <img src={logo} alt="로고" />
            </div>
            <div className="divider"></div>
            <a className="title" href="/">
              westagram
            </a>
          </div>
          <div className="searchForm">
            <input className="searchInput" type="text" placeholder="검색" />
            <i className="searchIcon"></i>
          </div>
          <div className="userMenu">
            <img src={compass} alt="나침반" />
            <img src={heart} alt="하트" />
            <img src={profile} alt="프로필" />
          </div>
        </div>
      </nav>

      <main>
        <div className="mainContentBox">
          <div className="feeds">
            <Feed />
            <Feed />
          </div>
          <div className="main-right">
            <div className="myProfile">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAqRXhpZgAASUkqAAgAAAABADEBAgAHAAAAGgAAAAAAAABHb29nbGUAAP/bAIQAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhIYEhQVFAEDBAQCAgIJAgIJCAICAggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI/8AAEQgALAAsAwERAAIRAQMRAf/EABoAAQEAAgMAAAAAAAAAAAAAAAADBAYHCAn/xAAyEAABAwMCAgcGBwAAAAAAAAACAQMEAAUGERIHFBMxNFNykrEIFRYXIUEJIiMyM0JR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APLSVLfSU9+s5+9f7L/tBLm3++c8y0Dm3++c8y0Dm3++c8y0Dm3++c8y0Dm3++c8y0CX2p7xl60EqBQKBQKDljhDwAunHZvKAx6e2zfLQnMpDmxngiPMbHSNSmoKsxiRWxROZJpst38iKmihzbiP4dUzM7FY75Fz2FCtF4dhLHfnwkbIY82I2UN8xF4tEOc4sAkRV2m2RJuTQVDGzz2HMcwHGH8xk8QrhdcOj6xHSs1ljzbik3pwYQUaamqz0W8l3ET4kJIjahuISUIx/YWgXC8X6yRMyvC3fGYMa8XsH8Z2gsJ+EUsBhbZJLIk7R2oyaNIZb9pqjakQbbbPYNwvPMJ4e5FaM4l4zbMkiMQ4Tl8t7LM2dPeuE8QJ2O5MRBDoWmABI5Ok7tIxb11Eg6RTYqwpj8dXGnlZcJtXGTQwLRdNRJOtF+y/egzHr5cWIU60tz5TdqkSUkPQReJGHHA3IBkGu1SFCJEVU1TcunXQVTMb8lmK0e+7j7qKOMQoHNudArIvE+LSt67diPGbqDpohkRdaqtBsHzz4kfFA5L8wcq+IhicgN399SebSNu3dCj2/f0e767NdNfrpQYkri5nU6FaYcnNMhkRLTLSfbmHbq+TcKShKSPMip6NuISqu8dF1VV1oM97j5xOkzJ0t7iNlrsudFSFLfO+SlORHRTJGXCU9SBFdcXauqauF9PzLQaJQVl9qe8ZetBKgUCgUCgrL7U94y9aCVAoFAoFB//Z"
                alt=""
              />
              <div className="myProfileText">
                <p>wecode_bootcamp</p>
                <p>Wecode | 위코드</p>
              </div>
            </div>

            <div className="story">
              <div className="storyHeader">
                <p className="storyTitle">스토리</p>
                <p className="all">모두 보기</p>
              </div>
              <div className="storyContent">
                <div className="storyUser">
                  <div className="storyUserTime">
                    <StoryUser />
                  </div>
                </div>
              </div>
            </div>

            <div className="recommend">
              <div className="recommendHeader">
                <p className="recommendTitle">회원님을 위한 추천</p>
                <p className="all">모두 보기</p>
              </div>
              <div className="recommendContent">
                <RecommendUser />
              </div>
            </div>

            <div className="info">
              <p>
                Instagram 정보 · 지원 · 홍보 센터 · API · <br /> 채용 정보 ·
                개인정보처리방침 · 약관 · <br /> 디렉터리 · 프로필 · 해시태그 ·
                언어
              </p>
              <p>© 2019 INSTAGRAM</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
