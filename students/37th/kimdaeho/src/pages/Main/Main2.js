import React from "react";
import "../Main/Main2.scss"

function Main2(){
    return(
        <>
            <nav className="nav">
                <div className="nav_logo">
                    <img src="/images/instagram.png" alt="logo"/>
                    <h1>Westagram</h1>
                </div>
                <div className="nav_search">
                    <input className="nav_search_input" type="text" placeholder="검색" />
                </div>
                <div className="nav_profile">
                    <img src="/images/explore.png" alt="profile_icon1"/>
                    <img src="/images/1.png" alt="profile_icon2"/>
                    <img src="/images/profile.png" alt="profile_icon3"/>
                </div>
            </nav>
            <main>
                <div className="feeds">
                    <ArticleHead />
                    <img className="article_main" src="/images/articleMain.png" alt="article_main"/>
                    <ArticleFooter />
                </div>
                <div className="main_right">
                    <div className="main_right_profile">
                        <img src="/images/articleProfile.jpeg" alt="main_right_Profile"/>
                        <div className="right_profile_view">
                            <h3>ant_ddunddun</h3>
                            <p>Wecode | 위코드</p>
                        </div>
                    </div>
                    <MainRightList />
                </div>
            </main>
        </>
    )
};

// compnent - main // 
function ArticleHead(){
    return(
        <div className="article_header">
            <img src="/images/articleProfile.jpeg" alt="article_Profile"/>
            <div className="article_header_text">
                <h2>ant_ddunddun</h2>
                <p>WeCode-위코드</p>
            </div>
            <div className="article_add_menu"><a className="link" href="#!">...</a></div>
            
        </div>
    )
}

function ArticleFooter(){
    return(
        <div className="article_footer">
            <div className="article_footer_icon">
                <img src="/images/1.png" alt="like" onClick={()=>{console.log("hello")}}  />
                <img src="/images/2.png" alt="messeage"/>
                <img src="/images/3.png" alt="share"/>
            </div>
            <div className="article_footer_attention">
                <img src="/images/attention.jpeg" alt="attention_photo"/>
                <p><a href="#!">daeho_773</a>님 외 <a href="#!">4명이</a> 좋아합니다.</p>
            </div>
            <div className="article_footer_explanation">
                <p><a href="#!">ant_ddunddun</a>포메라니안이 세상을 구한다🥺</p>
                <p id="explanation_time">55분 전</p>
            </div>
            <form className="artice_footer_comment">
                <a href="#!">게시</a>
                <input id="commnet_input" type="text" placeholder="댓글 달기..."/>
            </form>     
        </div>
    )
}

function MainRightList(){
    return(
        <>
            <ul className="main_right_list1">
                <div className="main_right_list_section">
                    <p>스토리</p>
                    <a href="#!">모두보기</a>
                </div>
                <li className="section_list">
                    <img src="/images/a.jpeg" alt="list_1_photo"/>
                    <div>
                        <a href="#!">dogddunddun</a>
                        <p>32분 전</p>
                    </div>
                </li>
                <li className="section_list">
                    <img src="/images/b.jpeg" alt="list_2_photo"/>
                    <div>
                        <a href="#!">_xhlrmswha</a>
                        <p>58분 전</p>
                    </div>
                </li>
                <li className="section_list">
                    <img src="/images/c.jpeg" alt="list_3_photo"/>
                    <div>
                        <a href="#!">tonk_good</a>
                        <p>1시간 전</p>
                    </div>
                </li>
                <li className="section_list">
                    <img src="/images/d.jpeg" alt="list_4_photo"/>
                    <div>
                        <a href="#!">eogh773</a>
                        <p>1시간 전</p>
                    </div>
                </li>
                <li className="section_list">
                    <img src="/images/f.jpeg" alt="list_5_photo"/>
                    <div>
                        <a href="#!">doglist</a>
                        <p>3시간 전</p>
                    </div>
                </li>
            </ul>
            <ul className="main_right_list2">
                <div className="main_right_list_section">
                    <p>회원님을 위한 추천</p>
                    <a href="#!">모두보기</a>
                </div>
                <li className="section_list">
                    <img src="/images/g.jpeg" alt="list_1_photo"/>
                    <div>
                        <a href="#!">dogddunddun</a>
                        <p>회원님을 팔로우합니다.</p>
                    </div>
                </li>
                <li className="section_list">
                    <img src="/images/h.jpeg" alt="list_2_photo"/>
                    <div>
                        <a href="#!">_xhlrmswha</a>
                        <p>회원님을 팔로우합니다.</p>
                    </div>
                </li>
                <li className="section_list">
                    <img src="/images/a.jpeg" alt="list_3_photo"/>
                    <div>
                        <a href="#!">tonk_good</a>
                        <p>회원님을 팔로우합니다.</p>
                    </div>
                </li>
            </ul>
        </>
    )
}


export default Main2
