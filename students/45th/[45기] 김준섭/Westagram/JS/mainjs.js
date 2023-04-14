const commentForm = document.querySelector("form");
const commentInput = document.querySelector(".comment");
const commentSubmitButton = document.querySelector(".commentSubmit");
const commentList = document.querySelector(".newComment");
const usernameInput = document.querySelector(".myDetail");

const comments = []; // 댓글 목록을 저장할 배열

function addComment(event) {
  event.preventDefault();
  const commentContent = commentInput.value; // 입력한 댓글 내용
  if (!commentContent) return;

  const now = new Date(); //현재시간 가져옴
  const newComment = {
    content: commentContent,
    username: usernameInput.innerText,
    time: now, // 댓글 작성 시간
  };
  comments.push(newComment); // 새로운 댓글을 댓글 목록에 추가
  renderComments(); // 댓글 목록을 다시 렌더링
  commentInput.value = ""; // 입력창 초기화
}

function renderComments() {
  commentList.innerHTML = ""; // 댓글 목록을 초기화
  comments.forEach((comment) => {
    const newComment = document.createElement("div"); // 새로운 댓글 생성
    const newCommentTime = document.createElement("div");
    const timeDiff = Math.round((new Date() - comment.time) / 1000 / 60);

    //시간 차이에 따른 댓글작성법 줌
    let commentTime;
    if (timeDiff < 1) {
      commentTime = "방금 전";
    } else if (timeDiff < 60) {
      commentTime = `${timeDiff}분 전`;
    } else if (timeDiff < 1440) {
      commentTime = `${Math.round(timeDiff / 60)}시간 전`;
    } else {
      commentTime = `${Math.round(timeDiff / 1440)}일 전`;
    }

    newComment.innerText = `${comment.username}: ${comment.content}`;
    newCommentTime.innerText = commentTime;
    commentList.appendChild(newComment); // 댓글 목록에 추가
    commentList.appendChild(newCommentTime); // 댓글 시간 추가
  });
}

// 댓글 작성 이벤트 처리
commentForm.addEventListener("submit", addComment);
commentSubmitButton.addEventListener("click", addComment);
commentInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addComment(event);
  }
});

renderComments(); // 페이지 로드 시, 댓글 목록을 렌더링
