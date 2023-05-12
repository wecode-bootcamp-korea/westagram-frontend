// Enter키 press 혹은 버튼 클릭시 댓글 추가 기능
// DOM
const commentInput = document.querySelector("#comment");
const commentButton = document.querySelector(".comment-button");

commentInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    // event.preventDefault();
    addComment();
  }
});

commentButton.addEventListener("click", function(event) {
  // event.preventDefault();
  addComment();
});

// 댓글 추가 함수
function addComment() {
  const commentText = commentInput.value.trim();
  // Input에 1글자 이상 작성시 함수 작동
  if (commentText !== "") {
    // 요소 추가: 달린 댓글들 전체를 감싸는 컨테이너
    const commentContainer = document.querySelector(".feed-comment-posted-container");
    // 요소 추가: 모든 하위요소를 포함하는 댓글 1개당
    const newComment = document.createElement("div");
    newComment.classList.add("comment-posted");
    // 요소 추가: 댓글 작성자
    const newCommentAuthor = document.createElement("div");
    newCommentAuthor.classList.add("comment-posted-author")
    newCommentAuthor.textContent = "front.end";
    // 요소 추가: 댓글 텍스트
    const newCommentText = document.createElement("div");
    newCommentText.classList.add("comment-posted-text");
    newCommentText.textContent = commentText;
    // 요소 추가: 좋아요 아이콘
    const newCommentLike = document.createElement("i");
    newCommentLike.classList.add("fa-regular", "fa-heart");
    // 요소 추가: 삭제 아이콘
    const newCommentDelete = document.createElement("i");
    newCommentDelete.classList.add("fa-solid", "fa-trash");
    // 댓글 1개를 구성하는 하위요소 내용을 추가
    newComment.append(newCommentAuthor);
    newComment.append(newCommentText);
    newComment.append(newCommentLike);
    newComment.append(newCommentDelete);
    // 댓글 1개를 댓글 전체 컨테이너에 내용 추가
    commentContainer.append(newComment);
    // Input창에 적혀있는 텍스트 비우기
    commentInput.value = "";
    // 좋아요 아이콘 클릭시 해당 댓글 아이콘 디자인 변경 기능
    newCommentLike.addEventListener("click", function() {
      if (newCommentLike.classList.contains("fa-regular")) {
        newCommentLike.classList.remove("fa-regular");
        newCommentLike.classList.add("fa-solid");
        newCommentLike.style.color = "#ff3040";
      } else {
        newCommentLike.classList.remove("fa-solid");
        newCommentLike.classList.add("fa-regular");
        newCommentLike.style.color = "";
      }
    });
    // 삭제 아이콘 클릭시 해당 댓글 삭제 기능
    newCommentDelete.addEventListener("click", function() {
      newComment.remove();
    });
  }
}