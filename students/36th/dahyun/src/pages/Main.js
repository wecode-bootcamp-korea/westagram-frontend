import React from 'react';

export const Main = () => {
  return (
    <div className="mainApp">
      <header className="header-logo">
        <nav className="nav-logo">
          <div className="logo">
            <a href="#!">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <h1 className="logo-title">
              <a href="#!">Instagram</a>
            </h1>
          </div>
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input className="searchBar" type="text" placeholder="검색" />
          </div>
          <div className="navbar">
            <a href="#!">
              <img src="images/explore.png" alt="탐색" />
            </a>
            <a href="#!">
              <img src="images/heart.png" alt="좋아하는 페이지" />
            </a>
            <a href="#!">
              <img src="images/profile.png" alt="유저 프로필" />
            </a>
          </div>
        </nav>
      </header>
      <div className="main-container">
        <main>
          <section className="timeline">
            <ol>
              <li>
                <article className="post-1">
                  <header className="header-post">
                    <div className="author-img"></div>
                    <h2>Pulan</h2>
                    <button type="button">
                      <i className="fa-solid fa-ellipsis"></i>
                    </button>
                  </header>
                  <div className="post1-img"></div>
                  <footer className="footer-post">
                    <div className="feed-btns">
                      <div className="btns-likes">
                        <i className="likeMenu3 fa-regular fa-heart"></i>
                        <i className="likeMenu3 fa-regular fa-comment"></i>
                        <i className="likeMenu3 fa-regular fa-share-from-square"></i>
                      </div>
                      <i className="fa-regular fa-bookmark"></i>
                    </div>
                    <div className="feed-likes">
                      <span>------</span>
                      <p className="likeNumText">xxx님외 n명이 좋아합니다.</p>
                    </div>
                    <ol className="feed-comments">
                      <li className="comment">
                        <span className="userId">Pulan</span>
                        <span className="content">정말 멋있는 사진이에요~</span>
                      </li>
                      <li className="comment">
                        <span className="userId">Pulan</span>
                        <span className="content">정말 멋있는 사진이에요~</span>
                      </li>
                      <li className="comment">
                        <span className="userId">Pulan</span>
                        <span className="content">정말 멋있는 사진이에요~</span>
                      </li>
                    </ol>
                    <form className="comment-form">
                      <input
                        className="comment-input"
                        type="text"
                        placeholder="댓글 달기..."
                      />
                      <button className="comment-btn" type="submit">
                        게시
                      </button>
                    </form>
                  </footer>
                </article>
              </li>
            </ol>
          </section>
        </main>
        <aside>
          <header className="user-profile">
            <div className="profile-img"></div>
            <div className="profile-info">
              <h2>wecode_bootCamp</h2>
              <p>WeCode | 위코드</p>
            </div>
          </header>
          <section className="story">
            <header className="header-story">
              <h2>스토리</h2>
              <button type="button">모두 보기</button>
            </header>
            <main className="story-list">
              <ol>
                <li>
                  <article className="updated-users">
                    <div className="updated-user">
                      <div className="updated-user__img"></div>
                      <div className="updated-user__info">
                        <h2>yum_s</h2>
                        <span>16분 전</span>
                      </div>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="updated-users">
                    <div className="updated-user">
                      <div className="updated-user__img"></div>
                      <div className="updated-user__info">
                        <h2>drink_eat_drink</h2>
                        <span>3시간 전</span>
                      </div>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="updated-users">
                    <div className="updated-user">
                      <div className="updated-user__img"></div>
                      <div className="updated-user__info">
                        <h2>hyukyc</h2>
                        <span>20시간 전</span>
                      </div>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="updated-users">
                    <div className="updated-user">
                      <div className="updated-user__img"></div>
                      <div className="updated-user__info">
                        <h2>jminkeek</h2>
                        <span>21시간 전</span>
                      </div>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="updated-users">
                    <div className="updated-user">
                      <div className="updated-user__img"></div>
                      <div className="updated-user__info">
                        <h2>yum_s</h2>
                        <span>16분 전</span>
                      </div>
                    </div>
                  </article>
                </li>
              </ol>
            </main>
          </section>
          <section className="suggestion">
            <header className="header-suggestion">
              <h2>회원님을 위한 추천</h2>
              <button type="button">모두 보기</button>
            </header>
            <main className="suggestion-list">
              <ul>
                <li>
                  <article className="updated-users">
                    <div className="updated-user">
                      <div className="updated-user__img"></div>
                      <div className="updated-user__info">
                        <h2>Joaaaaaahye</h2>
                        <span>_legend_a님 외 2명이...</span>
                      </div>
                    </div>
                    <button type="button">팔로우</button>
                  </article>
                </li>
                <li>
                  <article className="updated-users">
                    <div className="updated-user">
                      <div className="updated-user__img"></div>
                      <div className="updated-user__info">
                        <h2>rampart81</h2>
                        <span>ringo.in.seoul님 외 12...</span>
                      </div>
                    </div>
                    <button type="button">팔로우</button>
                  </article>
                </li>
                <li>
                  <article className="updated-users">
                    <div className="updated-user">
                      <div className="updated-user__img"></div>
                      <div className="updated-user__info">
                        <h2>shawnjjoo</h2>
                        <span>jimmylee1220님 외 1...</span>
                      </div>
                    </div>
                    <button type="button">팔로우</button>
                  </article>
                </li>
              </ul>
            </main>
          </section>
          <footer className="footer">
            <a href="#!" target="_blank">
              Instagram 정보
            </a>
            <a href="#!" target="_blank">
              지원
            </a>
            <a href="#!" target="_blank">
              홍보 센터
            </a>
            <a href="#!" target="_blank">
              API
            </a>{' '}
            <br />
            <a href="#!" target="_blank">
              채용 정보
            </a>
            <a href="#!" target="_blank">
              개인정보처리방침
            </a>
            <a href="#!" target="_blank">
              약관
            </a>{' '}
            <br />
            <a href="#!" target="_blank">
              디렉터리
            </a>
            <a href="#!" target="_blank">
              프로필
            </a>
            <a href="#!" target="_blank">
              해시태그
            </a>
            <a href="#!" target="_blank">
              언어
            </a>
          </footer>
        </aside>
      </div>
    </div>
  );
};
