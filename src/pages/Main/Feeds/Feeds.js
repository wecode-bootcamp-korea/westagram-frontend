import './Feeds.scss';

const Feeds = () => {
return( 
  <div className="feeds">
    <article>
      <div className="profile">
        <img className="circle" src="images/lukas.jpg" width="50px" />
        <div className="profile-text">
          <p>wecode_bootcamp</p>
          <span>WeCode - 위코드</span>
        </div>
      </div>
        <img className="airplane-img" src="images/lukas.jpg" rel="sorry" width="500px"/>
        <div className="icon-lower">
          <div className="icon-lower__icon">
            <i className="fas fa-heart heartColor"></i>
            <i className="far fa-comment"></i>
          </div>
        <div>
          <i className="far fa-bookmark"></i>
        </div>
        </div>
        <div className="like">
          <img className="circle" src="images/duncan.jpg" rel="sorry" width="50px" /> 
          <span>Icebear님 외 4명이 좋아합니다</span>
        </div>
        <div className="bootcamp-described">
          <span>wecode_bootcamp</span><span>"위코드는 단순 교육업체가 아닌 개발자 커뮤니티입니다... 더보기</span>
          <ul className="comment-ul">
               
          </ul>
        </div>
           <input type="text" placeholder="댓글달기" className="addComment" />
           <button className="comment-button">게시</button>
         </article>
       </div>
   )
}

export default Feeds;