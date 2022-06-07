import '../../styles/reset.css';
import './Main.css';

function Main() {
  return (
    // gridArea
    <div className='twoDividedArea'>
      {/* header */}
      <header className='topArea'>
        {/* nav */}
        <nav className='logo'>
          <img src='/images/instagram.png' alt='westagramLogo' />
          <span>westagram</span>
        </nav>
        {/* searchId */}
        <input type='search' placeholder='🔍 검색' />
        {/* nav */}
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
        {/* gridArea */}
        <main className='main'>
          <article className='posting'>
            <div className='posting_profile'>
              <img
                className='posting_profile_image'
                src='/images/penguin-img.png'
                alt='프로필이미지'
              />
              <p>cannon_mj</p>
              <img
                className='posting_profile_details'
                src='/images/addHost.png'
                alt='더보기'
              />
            </div>
            <div className='posting_image'>
              <img src='/images/feed-images.jpg' alt='바다사진' />
            </div>
            <i className='posting_icon'>
              <img
                className='posting_icon_heart'
                src='/images/feedHeart.png'
                alt='좋아요아이콘'
              />
              <img
                className='posting_icon_sayBallon'
                src='/images/sayBalloon.png'
                alt='말풍선아이콘'
              />
              <img
                className='posting_icon_share'
                src='/images/share.png'
                alt='공유하기아이콘'
              />
              <img
                className='posting_icon_bookMark'
                src='/images/bookMark.png'
                alt='북마크아이콘'
              />
            </i>
            {/* inputComment */}
            <div className='posting_othersComment'>
              <p className='posting_othersComment_representative'>
                땡땡이 좋아합니다
              </p>
              <p className='posting_othersComment_comment'>
                sss 위워크에서 진행은 베이킹 클래스
              </p>
              <p className='posting_othersComment_comment'>
                ddd 거봐 좋았잖아~~~~🥰
              </p>
            </div>
            {/* active_addComment */}
            <div className='posting_addComment'>
              <input
                className='posting_addComment_text'
                type='text'
                placeholder='댓글 달기...'
              />
              <button
                className='posting_addComment_button commonButton'
                type='submit'
              >
                게시
              </button>
            </div>
          </article>
          {/* sideBar */}
          <aside className='sideBar'>
            <div className='sideBar_host'>
              <img
                className='sideBar_host_image'
                src='/images/penguin-img.png'
                alt='호스트이미지'
              />
              <div className='sideBar_host_id'>
                <p className='sideBar_host_id_name'>김펭귄</p>
                <p className='sideBar_host_id_description'>
                  프론트 앤드 개발자
                </p>
              </div>
            </div>
            {/* userHistory */}
            <div className='sideBar_history'>
              <div className='sideBar_history_title'>
                <h1>스토리</h1>
                <button className='commonButton'>모두 보기</button>
              </div>
              <ul className='sideBar_history_user'>
                <li className='sideBar_history_user_list'>
                  <img
                    className='sideBar_history_user_list_image'
                    src='/images/penguin-img.png'
                    alt='유저이미지'
                  />
                  <div className='sideBar_history_user_list_id'>
                    <div className='sideBar_history_user_list_id_name'>
                      김원숭
                    </div>
                    <div className='sideBar_history_user_list_id_time'>
                      16분 전
                    </div>
                  </div>
                </li>
                <li className='sideBar_history_user_list'>
                  <img
                    className='sideBar_history_user_list_image'
                    src='/images/penguin-img.png'
                    alt='유저이미지'
                  />
                  <div className='sideBar_history_user_list_id'>
                    <div className='sideBar_history_user_list_id_name'>
                      김원숭
                    </div>
                    <div className='sideBar_history_user_list_id_time'>
                      16분 전
                    </div>
                  </div>
                </li>
                <li className='sideBar_history_user_list'>
                  <img
                    className='sideBar_history_user_list_image'
                    src='/images/penguin-img.png'
                    alt='유저이미지'
                  />
                  <div className='sideBar_history_user_list_id'>
                    <div className='sideBar_history_user_list_id_name'>
                      김원숭
                    </div>
                    <div className='sideBar_history_user_list_id_time'>
                      16분 전
                    </div>
                  </div>
                </li>
                <li className='sideBar_history_user_list'>
                  <img
                    className='sideBar_history_user_list_image'
                    src='/images/penguin-img.png'
                    alt='유저이미지'
                  />
                  <div className='sideBar_history_user_list_id'>
                    <div className='sideBar_history_user_list_id_name'>
                      김원숭
                    </div>
                    <div className='sideBar_history_user_list_id_time'>
                      16분 전
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* serRecommendation */}
            <div className='sideBar_recommendation'>
              <div className='sideBar_recommendation_title'>
                <h1>회원님을 위한 추천</h1>
                <button className='commonButton'>모두 보기</button>
              </div>
              <ul className='sideBar_recommendation_user'>
                <li className='sideBar_recommendation_user_list'>
                  <img
                    className='sideBar_recommendation_user_list_image'
                    src='/images/penguin-img.png'
                    alt='유저이미지'
                  />
                  <div className='sideBar_recommendation_user_list_id'>
                    <p className='sideBar_recommendation_user_list_id_name'>
                      김다람
                    </p>
                    <p className='sideBar_recommendation_user_list_id_time'>
                      ...외 2명이 추천누름
                    </p>
                  </div>
                  <button className='sideBar_recommendation_user_list_Fallow commonButton'>
                    팔로우
                  </button>
                </li>
                <li className='sideBar_recommendation_user_list'>
                  <img
                    className='sideBar_recommendation_user_list_image'
                    src='/images/penguin-img.png'
                    alt='유저이미지'
                  />
                  <div className='sideBar_recommendation_user_list_id'>
                    <p className='sideBar_recommendation_user_list_id_name'>
                      김다람
                    </p>
                    <p className='sideBar_recommendation_user_list_id_time'>
                      ...외 2명이 추천누름
                    </p>
                  </div>
                  <button className='sideBar_recommendation_user_list_Fallow commonButton'>
                    팔로우
                  </button>
                </li>
                <li className='sideBar_recommendation_user_list'>
                  <img
                    className='sideBar_recommendation_user_list_image'
                    src='/images/penguin-img.png'
                    alt='유저이미지'
                  />
                  <div className='sideBar_recommendation_user_list_id'>
                    <p className='sideBar_recommendation_user_list_id_name'>
                      김다람
                    </p>
                    <p className='sideBar_recommendation_user_list_id_time'>
                      ...외 2명이 추천누름
                    </p>
                  </div>
                  <button className='sideBar_recommendation_user_list_Fallow commonButton'>
                    팔로우
                  </button>
                </li>
                <li className='sideBar_recommendation_user_list'>
                  <img
                    className='sideBar_recommendation_user_list_image'
                    src='/images/penguin-img.png'
                    alt='유저이미지'
                  />
                  <div className='sideBar_recommendation_user_list_id'>
                    <p className='sideBar_recommendation_user_list_id_name'>
                      김다람
                    </p>
                    <p className='sideBar_recommendation_user_list_id_time'>
                      ...외 2명이 추천누름
                    </p>
                  </div>
                  <button className='sideBar_recommendation_user_list_Fallow commonButton'>
                    팔로우
                  </button>
                </li>
              </ul>
            </div>
          </aside>
          {/* footer */}
          <footer className='footer'>
            <p className='footer_information'>위스타그램 정보입니다.</p>
            <p className='footer_makeYear'>2022년도에 제작</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default Main;
