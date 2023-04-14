const commentForm = document.querySelector("form");
const commentInput = document.querySelector(".comment");
const commentSubmitButton = document.querySelector(".commentSubmit");
const commentList = document.querySelector(".newComent");
const usernameInput = document.querySelector(".myDetail");

function addComment(event) {
  event.preventDefault();
  const commentContent = commentInput.value; // 입력한 댓글 내용
  if (!commentContent) return;
  const newComment = document.createElement("div"); // 새로운 댓글 생성

  newComment.innerText = `${usernameInput.innerText}: ${commentContent}`;

  commentList.appendChild(newComment); // 댓글 목록에 추가
  commentInput.value = ""; // 입력창 초기화
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
