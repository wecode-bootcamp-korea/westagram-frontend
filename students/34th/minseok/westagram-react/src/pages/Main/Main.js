import '../../styles/reset.css';
import './Main.css';

function Main() {
  return (
    <div className='twoDividedArea'>
      <header className='topArea'>
        <nav className='logo'>
          <img src='/images/instagram.png' alt='westagramLogo' />
          <span>westagram</span>
        </nav>
        <input type='search' placeholder='🔍 검색' />
        <nav className='icon'>
          <img
            src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png'
            alt='탐색'
          />
          <img
            src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
            alt='하트'
          />
          <img
            src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png'
            alt='마이페이지'
          />
        </nav>
      </header>
      <div className='bottomArea'>
        <main className='main'>
          <article className='posting'>
            <div className='writerProfile'>
              <img
                className='writerProfileImage'
                src='/images/penguin-img.png'
                alt='프로필이미지'
              />
              <p>cannon_mj</p>
              <img
                className='writerProfileDetails'
                src='/images/addHost.png'
                alt='더보기'
              />
            </div>
            <div className='postingImage'>
              <img src='/images/feed-images.jpg' alt='바다사진' />
            </div>
            <i className='postingIcon'>
              <img
                className='postingIconHeart'
                src='/images/feedHeart.png'
                alt='좋아요아이콘'
              />
              <img
                className='postingIconSayballon'
                src='/images/sayBalloon.png'
                alt='말풍선아이콘'
              />
              <img
                className='postingIconShare'
                src='/images/share.png'
                alt='공유하기아이콘'
              />
              <img
                className='postingIconBookmark'
                src='/images/bookMark.png'
                alt='북마크아이콘'
              />
            </i>
            <div className='postingComment'>
              <p className='RepresentativeUser'>땡땡이 좋아합니다</p>
              <p className='userComment'>sss 위워크에서 진행은 베이킹 클래스</p>
              <p className='userComment'>ddd 거봐 좋았잖아~~~~🥰</p>
            </div>
            <div className='addComment'>
              <input
                className='addCommentText'
                type='text'
                placeholder='댓글 달기...'
              />
              <button className='addCommentButton commonButton' type='submit'>
                게시
              </button>
            </div>
          </article>
          <aside className='sidebar'>
            <div className='sidebarHost'>
              <img
                className='sidebarHostImage'
                src='/images/penguin-img.png'
                alt='호스트이미지'
              />
              <div className='sidebarHostId'>
                <p className='sidebarHostIdName'>김펭귄</p>
                <p className='sidebarHostIdDescription'>프론트 앤드 개발자</p>
              </div>
            </div>
            <div className='sidebarHistory'>
              <div className='sidebarHistoryTitle'>
                <h1>스토리</h1>
                <button className='commonButton'>모두 보기</button>
              </div>
              <ul className='sidebarHistoryUser'>
                <li className='sidebarHistoryUserList'>
                  <img
                    className='sidebarHistoryUserListImage'
                    src='/images/penguin-img.png'
                    alt='유저이미지'
                  />
                  <div className='sidebarHistoryUserListId'>
                    <div className='sidebarHistoryUserListIdName'>김원숭</div>
                    <div className='sidebarHistoryUserListIdTime'>16분 전</div>
                  </div>
                </li>
                <li className='sidebarHistoryUserList'>
                  <img
                    className='sidebarHistoryUserListImage'
                    src='/images/penguin-img.png'
                    alt='유저이미지'
                  />
                  <div className='sidebarHistoryUserListId'>
                    <div className='sidebarHistoryUserListIdName'>김원숭</div>
                    <div className='sidebarHistoryUserListIdTime'>16분 전</div>
                  </div>
                </li>
                <li className='sidebarHistoryUserList'>
                  <img
                    className='sidebarHistoryUserListImage'
                    src='/images/penguin-img.png'
                    alt='유저이미지'
                  />
                  <div className='sidebarHistoryUserListId'>
                    <div className='sidebarHistoryUserListIdName'>김원숭</div>
                    <div className='sidebarHistoryUserListIdTime'>16분 전</div>
                  </div>
                </li>
                <li className='sidebarHistoryUserList'>
                  <img
                    className='sidebarHistoryUserListImage'
                    src='/images/penguin-img.png'
                    alt='유저이미지'
                  />
                  <div className='sidebarHistoryUserListId'>
                    <div className='sidebarHistoryUserListIdName'>김원숭</div>
                    <div className='sidebarHistoryUserListIdTime'>16분 전</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='sidebarFallow'>
              <div className='sidebarFallowTitle'>
                <h1>회원님을 위한 추천</h1>
                <button className='commonButton'>모두 보기</button>
              </div>
              <ul className='sidebarFallowUser'>
                <li className='sidebarFallowUserList'>
                  <img
                    className='sidebarFallowUserListImage'
                    src='/images/penguin-img.png'
                    alt='유저이미지'
                  />
                  <div className='sidebarFallowUserListId'>
                    <p className='sidebarFallowUserListIdName'>김다람</p>
                    <p className='sidebarFallowUserListIdTime'>
                      ...외 2명이 추천누름
                    </p>
                  </div>
                  <button className='sidebarFallowUserListButton commonButton'>
                    팔로우
                  </button>
                </li>
              </ul>
            </div>
          </aside>
          <footer className='footer'>
            <p className='footerInformation'>위스타그램 정보입니다.</p>
            <p className='footerMakeYear'>2022년도에 제작</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default Main;
