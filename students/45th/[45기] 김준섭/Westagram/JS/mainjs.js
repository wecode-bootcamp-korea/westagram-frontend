const commentForm = document.querySelector("form");
const commentInput = document.querySelector(".comment");
const commentSubmitButton = document.querySelector(".commentSubmit");
const commentList = document.querySelector(".details");

// 댓글을 추가하는 함수
function addComment() {
  // 댓글을 작성한 내용 가져오기
  const commentContent = commentInput.value;
  // 댓글을 표시할 요소 생성
  const commentElement = document.createElement("div");
  commentElement.innerText = commentContent;
  // 댓글을 추가할 위치 가져오기
  const lastCommentElement = commentList.lastElementChild;
  // 댓글을 추가하기
  commentList.insertBefore(commentElement, lastCommentElement.nextSibling);
  // 댓글 입력창 비우기
  commentInput.value = "";
}

// 이벤트 리스너 등록하기
commentForm.addEventListener("submit", (event) => {
  // 폼의 기본 동작(새로고침) 막기
  event.preventDefault();
  addComment();
});
commentSubmitButton.addEventListener("click", addComment);
commentInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addComment();
  }
});
