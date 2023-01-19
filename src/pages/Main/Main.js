
import React, { useState } from 'react';
import './Main.scss';
import Nav from './Nav/Nav';
import Feeds from '../Main/Feeds/Feeds';


const Home = () => {
  const [color, setColor] = useState('red');
  return( 
  <>
    <main>
     <Nav /> 
     <Feeds />
       <div className="main-right">
       <div className="main-right-profile">
          <img alt="sorry" src="./images/lukas.jpg" />
          <div className="main-right-profile-text">
            <p>Wecode_bootcamp</p>
            <p>WeCode | 위코드</p>
          </div>
        </div>
       <div>
        <div className="story-box">   
        <div className="view-all">
          <span>스토리</span>
          <span>모두 보기</span>
        </div>
         <div className="story">
          <ul className="story-ul">
            <li className="story-li">
              <div className="follow-li-box">
                <img alt="sorry" className="circle" src="./images/lukas.jpg" />
                <div>
                  <p>alexhynul</p>
                  <p>1시간 전</p>
                </div>
              </div>
            </li>
            <li className="story-li">
              <div className="follow-li-box">
                <img alt="sorry" className="circle" src="./images/lukas.jpg" />
                <div>
                  <p>ohynul</p>
                  <p>30분 전</p>
                </div>
              </div>
            </li>
            <li className="story-li">
              <div className="follow-li-box">
                <img alt="sorry" className="circle" src="./images/lukas.jpg" />
                <div>
                  <p>alexis</p>
                  <p>2시간 전</p>
                </div>
              </div>
            </li>
            <li className="story-li">
              <div className="follow-li-box">
                <img alt="sorry" className="circle" src="./images/lukas.jpg" />
                <div>
                  <p>alexhynul</p>
                  <p>1시간 전</p>
                </div>
              </div>
            </li>
         </ul>
         <div>
       </div>
     </div>
     </div>
     <div className="recommend-box">
       <div className="view-all">
         <span>회원님을 위한 추천</span>
         <span>모두 보기</span>
       </div>
         </div>
         <ul className="recommend-ul">
         <li>
          <div className="follow-li-box">
              <img alt="sorry" src="./images/duncan.jpg" />
            <div>
              <p>bowerbird_sym</p>
              <p>회원님을 팔로우합니다.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="follow-li-box">
              <img alt="sorry" src="./images/duncan.jpg" />
            <div>
              <p>bower_sym</p>
              <p>회원님을 팔로우합니다.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="follow-li-box">
              <img alt="sorry" src="./images/duncan.jpg" />
            <div>
              <p>bird_sym</p>
              <p>회원님을 팔로우합니다.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="follow-li-box">
              <img alt="sorry" src="./images/duncan.jpg" />
            <div>
              <p>bobird_sym</p>
              <p>회원님을 팔로우합니다.</p>
            </div>
          </div>
        </li>
         </ul>
       </div>
     </div>
     </main>
     </>
    )
}

export default Home;