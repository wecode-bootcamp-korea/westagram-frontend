import React from "react";

const images = [
  {
    id: 1,
    src: "https://cdn-icons-png.flaticon.com/128/1077/1077035.png",
    alt: "heart",
  },
  {
    id: 2,
    src: "https://cdn-icons-png.flaticon.com/128/589/589671.png",
    alt: "chat",
  },
  {
    id: 3,
    src: "https://cdn-icons-png.flaticon.com/128/3580/3580382.png",
    alt: "share",
  },
];

const Feed = () => {
  return (
    <article>
      <div className="writer">
        <p>cannon_mj</p>
        <img
          src="https://cdn-icons-png.flaticon.com/128/3018/3018442.png"
          alt=""
        />
      </div>
      <div className="feedImageBox">
        <img
          src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>

      <div className="feedContent">
        <div className="feedTextBox">
          <div className="feedContentImageBox">
            <div className="img-left">
              {images.map((el) => (
                <img id={el.id} src={el.src} alt={el.alt} />
              ))}
            </div>
            <div className="img-right">
              <img
                src="https://cdn-icons-png.flaticon.com/128/25/25667.png"
                alt=""
              />
            </div>
          </div>

          <div>aineworld님 외 10명이 좋아합니다</div>
          <div>
            cannon_mj 위워크에서 진행한 베이킹 클래스..<i>더 보기</i>
            <br />
            neceosecius 거봐 좋았잖아~~~~
            <br />
            42분 전
          </div>
        </div>
      </div>

      <div className="comment">
        <input type="text" placeholder="댓글 달기..."></input>
        <button>게시</button>
      </div>
    </article>
git  );
};

export default Feed;
