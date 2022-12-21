import React from "react";
import "./MainRight.scss";

export default function MainRight() {
    return (
        <div className="main-right">
            <div className="main-right-person">
                <div className="main-right-person-pofile"></div>
                <div className="main-right-person-name">
                    wecode_bootcamp
                    <span className="main-right-name-span">
                        wecode | 위코드
                    </span>
                </div>
            </div>
            <div className="main-right-story">
                <div className="main-right-nav">
                    <div className="story">스토리</div>
                    <div className="every">모두 보기</div>
                </div>
                <div className="main-right-story-profile-div">
                    <div className="main-right-story-profile"></div>
                    <div className="main-right-story-name">
                        김광휘
                        <span className="main-right-story-span">23분 전</span>
                    </div>
                </div>
            </div>
            <div className="main-right-like">
                <div className="main-right-nav">
                    <div className="story">회원님을 위한 추천</div>
                    <div className="every">모두 보기</div>
                </div>
                <div className="main-right-like-div">
                    <div className="main-right-like-profile"></div>
                    <div className="main-right-like-name">
                        <div className="like-name-bold">
                            joaaaaahye
                            <span className="main-right-like-span">
                                _lejend_a님 외 2명이 ...
                            </span>
                        </div>
                        <button className="follow">팔로우</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
