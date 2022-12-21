import React from "react";
import "./Feed.scss";
import Comment from "../Comment/Comment";
export default function Feed({ img, otherName, name, text }) {
    return (
        <div className="article">
            <div className="article-feed">
                <div className="article-header">
                    <div className="article-profile">
                        <p className="article-pic"></p>
                        <p className="article-name">wecode_bootcamp</p>
                    </div>
                    <i className="fa-solid fa-ellipsis article-icon"></i>
                </div>
            </div>
            <div className="article-background">
                <img src={img} alt="bg1" className="bgimg" />
            </div>
            <div className="article-icons">
                <div>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-comment"></i>
                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </div>
                <div>
                    <i className="fa-regular fa-bookmark"></i>
                </div>
            </div>
            <div className="article-like">
                <div className="article-like-profile"></div>
                <p className="article-like-person">
                    <span className="person-name">{otherName}</span>님
                    <span>외 4명</span>이 좋아합니다.
                </p>
            </div>
            <div className="article-text">
                <p>
                    <span className="person-name">{name}</span>
                    {text}
                </p>
                <Comment />
            </div>
        </div>
    );
}
