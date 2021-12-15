import "./Main.scss";

const Main = () => {
  return (
    <>
      <section className="nav">
        <div className="logo">
          <div className="topLeft">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
              id="insta"
            />
            <span>Westagram</span>
          </div>
          <div className="search">
            <div className="glass">
              <i className="fas fa-search"></i>
            </div>
            <input type="text" placeholder="검색" />
          </div>
          <div className="info">
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
          </div>
        </div>
      </section>
      <div className="bigMiddleContainer">
        <section className="mainBox">
          <div className="feeds">
            <div className="mainTop">
              <div className="main-top-left-wrapper">
                <img
                  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160412_13%2Fengelgail_1460421708445z4dmx_JPEG%2Fsea-1034911_960_720.jpg&type=sc960_832"
                  id="sea"
                />
                <div className="account">
                  <h5>Wecode_28기 엄성용</h5>
                  <h6>Samoyed</h6>
                </div>
              </div>
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <div className="mainimg">
              <img src="https://cdn.pixabay.com/photo/2020/07/30/06/12/dog-5449489_1280.jpg" />
              <div className="textBox"></div>
            </div>
          </div>
          <div className="mainRight"></div>
          <div className="bottom_main">
            <div className="characters">
              <div className="farContainer">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
                <i className="fas fa-upload"></i>
              </div>
              <div className="smollContainer">
                <i className="far fa-bookmark"></i>
              </div>
            </div>
            <div className="comment">
              <div className="topComment">
                <div className="friend">
                  <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMzBfNTkg%2FMDAxNTIyMzcxMjQ2OTg3.jqfbA4OqZ3BrhgRChb2VWqGDTZNfzVzeWOCrmcqi-y8g.9gj_Vp7sWCDBltpSs_x1-TaAwxFVfxUt-n9jkds9_I0g.JPEG.dvc3810%2Fwolf-3241382_640.jpg&type=sc960_832" />
                  <h6>Wecode_28기 외 4명이 좋아합니다</h6>
                </div>
              </div>
              <div className="middleComment">
                <span id="wecode">Wecode_28기 엄성용</span>
                <span>
                  사모예드견(Samoyed dog)은 시베리아 원산으로
                  썰매용·가정견·애완용으로 많이 기른다. 북부 시베리아의 유목민
                  사모예드족이 옛날부터 기르던 썰매용 개로서, 부족의 이름을 따서
                  명명되었다. 19세기에 와서 미국과 영국의 북극 탐험가들에 의하여
                  발전되어 썰매 끄는 개로서 그들과 함께 활약한 후 처음 서양
                  각국에 소개되었다. 우아한 용모와 대담한 성격, 썰매용으로
                  단련된 강력한 힘을 인정받아 세계에 알려지면서 세계의 304여개의
                  견종 사이에서 가장 비싼 견종이라고도 한다.
                </span>
              </div>
              <div className="bottomComment">
                <input type="text" placeholder="댓글달기" />
                <button type="button">게시</button>
              </div>
            </div>
          </div>
        </section>
        <aside>
          <div calss="sideContainer">
            <div className="sideTop">
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160412_13%2Fengelgail_1460421708445z4dmx_JPEG%2Fsea-1034911_960_720.jpg&type=sc960_832"
                id="sea"
              />
              <div className="sideTopInside">
                <span>Wecode_28기 엄성용</span>
                <h6>Wecode | 28기</h6>
              </div>
            </div>
            <div className="sideMiddle">
              <div className="story">
                <h4>스토리</h4>
                <h5>모두 보기</h5>
              </div>
              <div className="friendStory">
                <div className="sideFirstStory">
                  <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140304_97%2Fekaros3558_13939196318173OGiB_JPEG%2F1686367-1920x1280-Orion-Constellation.jpg&type=sc960_832" />
                  <div className="firstSmallAccount">
                    <h5>Instar</h5>
                    <h6>Friday_night</h6>
                  </div>
                </div>
                <div className="sideSecondStory">
                  <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MDNfNDUg%2FMDAxNjE3NDU2ODk3NDQz.kcdnHRmvukQA6IXqzDoUT-qGctgMOr7BaWHIW6McQhgg.JAblgQsP-mNKjs6JO7EPLTrArU0UlDsEYgMUM1hVCtUg.JPEG.dan9199%2FIMG_6431.JPG&type=sc960_832" />
                  <div className="secondSmallAccount">
                    <h5>Latte is horse</h5>
                    <h6>Big_Brother</h6>
                  </div>
                </div>
                <div className="sideThirdStory">
                  <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMjVfMTM1%2FMDAxNjM3ODQ2Njk3MTYy.T4b-bduSbpqKgDqsEFoaxVF27nXJSTOqtJklaNnBP0Mg.WrhQ38PYLVVGq2N0shOsy09lOCFetRqpDZSWbwfppf4g.JPEG.gkdmsdms2974%2Foutput_3801115789.jpg&type=sc960_832" />
                  <div className="thirdSmallAccount">
                    <h5>airport_thief</h5>
                    <h6>Incheon_Airport</h6>
                  </div>
                </div>
                <div className="sideFourthStory">
                  <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MjJfNjgg%2FMDAxNjI0MzYwMjkxMjg1.KTruw39HP3PWfV4csyoSr81PfKp2hgRevGDmqjsTdPAg.NsQICe5NCDYD5hzwU_6pfzMVKo2YBkK0_x6kzTDvOhAg.JPEG.filmbybible%2Fimage.jpeg&type=sc960_832" />
                  <div className="fourthSmallAccount">
                    <h5>Loppi</h5>
                    <h6>Small_Brother</h6>
                  </div>
                </div>
                <div className="insideNickname"></div>
              </div>
            </div>
            <div className="sideBottom">
              <div className="bottomWrapper">
                <div className="storyBottom">
                  <h4>회원님을 위한 추천</h4>
                  <h5>모두 보기</h5>
                </div>
                <div className="bottomfirstWrapper">
                  <div className="bottomFirstStory">
                    <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140304_97%2Fekaros3558_13939196318173OGiB_JPEG%2F1686367-1920x1280-Orion-Constellation.jpg&type=sc960_832" />
                    <div className="firstBottomAccount">
                      <h5>Instar</h5>
                      <h6>Friday_night</h6>
                    </div>
                  </div>
                  <button className="firstButton" type="button">
                    팔로우
                  </button>
                </div>
                <div className="bottomSecondWrapper">
                  <div className="bottomSecondStory">
                    <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MDNfNDUg%2FMDAxNjE3NDU2ODk3NDQz.kcdnHRmvukQA6IXqzDoUT-qGctgMOr7BaWHIW6McQhgg.JAblgQsP-mNKjs6JO7EPLTrArU0UlDsEYgMUM1hVCtUg.JPEG.dan9199%2FIMG_6431.JPG&type=sc960_832" />
                    <div className="secondBottomAccount">
                      <h5>Latte is horse</h5>
                      <h6>Big_Brother</h6>
                    </div>
                  </div>
                  <button className="secondButton" type="button">
                    팔로우
                  </button>
                </div>
                <div className="bottomThirdWrapper">
                  <div className="bottomThirdStory">
                    <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMjVfMTM1%2FMDAxNjM3ODQ2Njk3MTYy.T4b-bduSbpqKgDqsEFoaxVF27nXJSTOqtJklaNnBP0Mg.WrhQ38PYLVVGq2N0shOsy09lOCFetRqpDZSWbwfppf4g.JPEG.gkdmsdms2974%2Foutput_3801115789.jpg&type=sc960_832" />
                    <div className="thirdBottomAccount">
                      <h5>airport_thief</h5>
                      <h6>Incheon_Airport</h6>
                    </div>
                  </div>
                  <button className="thirdButton" type="button">
                    팔로우
                  </button>
                </div>
                <div className="bottomFourthWrapper">
                  <div className="bottomFourthStory">
                    <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MjJfNjgg%2FMDAxNjI0MzYwMjkxMjg1.KTruw39HP3PWfV4csyoSr81PfKp2hgRevGDmqjsTdPAg.NsQICe5NCDYD5hzwU_6pfzMVKo2YBkK0_x6kzTDvOhAg.JPEG.filmbybible%2Fimage.jpeg&type=sc960_832" />
                    <div className="fourthBottomAccount">
                      <h5>Loppi</h5>
                      <h6>Small_Brother</h6>
                    </div>
                  </div>
                  <button className="fouthButton" type="button">
                    팔로우
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="foot"></div>
        </aside>
      </div>
    </>
  );
};

export default Main;
