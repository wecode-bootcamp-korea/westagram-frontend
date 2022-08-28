import React from 'react';

const Main = () => {
  return (
    <>
      <nav className='nav'>
        <div className='nav__container'>
          <div className='nav__logo'>
            <i className='nav__logo__img fa-brands fa-instagram'></i>
            <span className='nav__logo__divider'></span>
            <span className='nav__logo__title'>Westagram</span>
          </div>
          <div className='nav__find'>
            <input className='nav__input' type='text' placeholder='검색' />
            <i className='nav__find__icon fa-solid fa-magnifying-glass'></i>
          </div>
          <div className='nav__icons'>
            <i className='nav__icon__explore fa-regular fa-compass'></i>
            <i className='nav__icon__heart fa-regular fa-heart'></i>
            <img
              className='nav__profile__img'
              src='images/my__profile.jpg'
              alt='my__profile__img'
            />
          </div>
          <div className='nav__menubox'>
            <div className='menubox__triangle'></div>
            <div className='menubox__contents'>
              <div className='menubox__profile'>
                <div className='menubox__icon'>
                  <i className='menubox__user fa-regular fa-user'></i>
                </div>
                <div className='menubox__text'>프로필</div>
              </div>
              <div className='menubox__save'>
                <div className='menubox__icon'>
                  <i className='menubox__bookmark fa-regular fa-bookmark'></i>
                </div>
                <div className='menubox__text'>저장됨</div>
              </div>
              <div className='menubox__settings'>
                <div className='menubox__icon'>
                  <i className='menubox__setting fas fa-cog'></i>
                </div>
                <div className='menubox__text'>설정</div>
              </div>
              <div className='menubox__logout'>로그아웃</div>
            </div>
          </div>
          <div className='nav__findbox'>
            <div className='findbox__triangle'></div>
            <div className='findbox__contents'></div>
          </div>
        </div>
      </nav>
      <main className='main'>
        <div className='main__container'>
          <div className='feeds'>
            <article className='feeds__container'>
              <div className='feeds__header'>
                <div className='feeds__profile'>
                  <img
                    className='feeds__profile__img'
                    src='images/feeds__profile.jpg'
                    alt='feeds__profile__img'
                  />
                  <div className='id'>canon_mj</div>
                </div>
                <div className='feeds__more'>
                  <i className='feeds__more__icon fas fa-ellipsis-h'></i>
                </div>
              </div>
              <img
                className='feeds__img'
                src='images/feeds__img.jpg'
                alt='feeds__img'
              />
              <div className='feeds__contents'>
                <div className='feeds__icons'>
                  <div className='feeds__icons__left'>
                    <i className='feeds__icon__heart far fa-heart'></i>
                    <i className='feeds__icon__comment fa-regular fa-comment'></i>
                    <i className='feeds__icon__plane fa-regular fa-paper-plane'></i>
                  </div>
                  <div className='feeds__icon__right'>
                    <i className='feeds__icon__bookmark fa-regular fa-bookmark'></i>
                  </div>
                </div>
                <div className='feeds__likes'>
                  <div className='feeds__likes__image'>
                    <img
                      className='feeds__likes__img'
                      src='images/likes__profile.jpg'
                      alt='feeds__likes__img'
                    />
                  </div>
                  <div className='feeds__likes__text'>
                    <span className='id feeds__id'>aineworld</span>님
                    <span className='feeds__people'>외 10명</span>이 좋아합니다
                  </div>
                </div>
                <div className='feeds__texts'>
                  <div className='feeds__texts__content'>
                    <div className='id'>canon_mj</div>
                    <div className='feeds__text'></div>
                    위워크에서 진행한 베이킹 클래스...
                  </div>
                  <div className='more__gray'>더보기</div>
                </div>
                <div className='newReply'>
                  <div className='feeds__texts__reply'>
                    <div className='feeds__texts__reply__left'>
                      <div className='id'>neceosecius</div>
                      <div className='feeds__text'>거봐 좋았잖아~~~~😛</div>
                    </div>
                    <div className='feeds__texts__reply__right'>
                      <i className='feeds__texts__heart fa-regular fa-heart'></i>
                      <i className='feeds__texts__remove fa-regular fa-trash-can'></i>
                    </div>
                  </div>
                </div>
                <div className='feeds__time'>
                  <span className='more__gray time__before'>42분전</span>
                </div>
              </div>
              <div className='feeds__reply'>
                <input
                  className='feeds__reply__input'
                  type='text'
                  placeholder='댓글 달기....'
                />
                <span className='feeds__reply__text'>게시</span>
              </div>
            </article>
          </div>
          <aside className='main-right'>
            <div className='main-right__container'>
              <div className='right__profile'>
                <div className='right__profile__image'>
                  <img
                    className='right__profile__img'
                    src='images/my__profile.jpg'
                    alt='my__profile__img'
                  />
                </div>
                <div className='right__profile__id'>
                  <div id='userID' className='id' data-id='wecode_bootcamp'>
                    wecode_bootcamp
                  </div>
                  <div className='more__gray'>WeCode | 위코드</div>
                </div>
              </div>
              <div className='right__story'>
                <div className='right__title'>
                  <div className='more__gray'>스토리</div>
                  <div className='right__more'>모두 보기</div>
                </div>
                <div className='right__story__profile'>
                  <div className='right__story__image'>
                    <img
                      className='right__story__img'
                      src='images/story__profile_01.jpg'
                      alt='right__profile__img'
                    />
                  </div>
                  <div className='right__story__id'>
                    <div className='id'>_yum_s</div>
                    <div className='more__gray time__before'>16분전</div>
                  </div>
                </div>
                <div className='right__story__profile'>
                  <div className='right__story__image'>
                    <img
                      className='right__story__img'
                      src='images/story__profile_02.jpg'
                      alt='right__profile__img'
                    />
                  </div>
                  <div className='right__story__id'>
                    <div className='id'>drink_eat_drink</div>
                    <div className='more__gray time__before'>3시간 전</div>
                  </div>
                </div>
                <div className='right__story__profile'>
                  <div className='right__story__image'>
                    <img
                      className='right__story__img'
                      src='images/story__profile_03.jpg'
                      alt='right__profile__img'
                    />
                  </div>
                  <div className='right__story__id'>
                    <div className='id'>hyukyc</div>
                    <div className='more__gray time__before'>20시간 전</div>
                  </div>
                </div>
                <div className='right__story__profile'>
                  <div className='right__story__image'>
                    <img
                      className='right__story__img'
                      src='images/story__profile_04.jpg'
                      alt='right__profile__img'
                    />
                  </div>
                  <div className='right__story__id'>
                    <div className='id'>jminkeek</div>
                    <div className='more__gray time__before'>26시간전</div>
                  </div>
                </div>
              </div>
              <div className='right__recommendation'>
                <div className='right__title'>
                  <div className='more__gray'>회원님을 위한 추천</div>
                  <div className='right__more'>모두 보기</div>
                </div>
                <div className='right__recommendation__profile'>
                  <div className='right__recommendation__left'>
                    <div className='right__recommendation__image'>
                      <img
                        className='right__recommendation__img'
                        src='images/recommendation__profile_01.jpg'
                        alt='right__profile__img'
                      />
                    </div>
                    <div className='right__recommendation__id'>
                      <div className='id'>joaaaaaaahye</div>
                      <div className='more__gray'>_legend_a님 외 2명이...</div>
                    </div>
                  </div>
                  <div className='right__follow'>팔로우</div>
                </div>
                <div className='right__recommendation__profile'>
                  <div className='right__recommendation__left'>
                    <div className='right__recommendation__image'>
                      <img
                        className='right__recommendation__img'
                        src='images/recommendation__profile_02.jpg'
                        alt='right__profile__img'
                      />
                    </div>
                    <div className='right__recommendation__id'>
                      <div className='id'>rampart81</div>
                      <div className='more__gray'>
                        ringo,in,seoul님 외 12명...
                      </div>
                    </div>
                  </div>
                  <div className='right__follow'>팔로우</div>
                </div>
                <div className='right__recommendation__profile'>
                  <div className='right__recommendation__left'>
                    <div className='right__recommendation__image'>
                      <img
                        className='right__recommendation__img'
                        src='images/recommendation__profile_03.jpg'
                        alt='right__profile__img'
                      />
                    </div>
                    <div className='right__recommendation__id'>
                      <div className='id'>shawnjjoo</div>
                      <div className='more__gray'>jimmylee1220님 외 1...</div>
                    </div>
                  </div>
                  <div className='right__follow'>팔로우</div>
                </div>
              </div>
            </div>
            <footer className='footer'>
              <div className='footer__menu'>
                <span>소개</span> · <span>도움말</span> · <span>홍보 센터</span>{' '}
                · <span>API</span> · <span>채용 정보</span> ·
                <span>개인정보처리방침</span> · <span>약관</span> ·
                <span>위치</span> · <span>언어</span>
              </div>
              <div className='footer__copyright'>
                © 2022 INSTAGRAM FROM META
              </div>
            </footer>
          </aside>
        </div>
      </main>
    </>
  );
};

export default Main;
