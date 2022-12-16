/* 댓글 쓰기 시작하면 게시버튼 활성화! 함수 */
const commentInput = document.getElementsByClassName("comment_write")[0];
const commentPublishBtn = document.getElementsByClassName("publish")[0];

const publishBtnActive = (e) => {
  commentInput.value.length
    ? ((commentPublishBtn.style.opacity = "1"),
      (commentPublishBtn.style.cursor = "pointer"))
    : ((commentPublishBtn.style.opacity = "0.3"),
      (commentPublishBtn.style.cursor = "none"));
};

const clickAddComment = (e) => {
  const commentUl = document.getElementsByClassName("comment")[0];
  let li = document.createElement("li");
  let liClass = (li.className = "commentor_nickname comment3");

  li.innerHTML = `
    <span>
      <span class="strong">ddorong</span>
      <span>&nbsp;${commentInput.value}</span>
    </span>
    <img src="./img/like_heart.png" alt="댓글 좋아요" />
  `;

  commentUl.appendChild(li);
  commentInput.value = null;

  // let span1 = document.createElement("span");
  // let span2InSpan1 = document.createElement("span");
  // let span3INSpan1 = document.createElement("span");
  // let span2InSpan1Class = (span2InSpan1.className = "strong"); //span.strong

  // span2InSpan1.innerText = "ddorong";
  // span3INSpan1.innerText = " " + commentInput.value;

  // commentDiv.appendChild(p).appendChild(span1).appendChild(span2InSpan1);

  // span1.appendChild(span3INSpan1);

  // let likeHeartImg = document.createElement("img");
  // likeHeartImg.setAttribute("src", "./img/like_heart.png");
  // likeHeartImg.setAttribute("alt", "댓글 좋아요");

  // p.appendChild(likeHeartImg);
};

const enterAddComment = () => {
  if (window.event.keyCode === 13) {
    clickAddComment();
  }
};

commentInput.addEventListener("keyup", publishBtnActive);
commentPublishBtn.addEventListener("click", clickAddComment);
// 클릭하면 댓글창에 댓글추가 되는 이벤트
