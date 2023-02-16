const commentInput = document.querySelector(".feeds-comment");
const commentBox = document.querySelector(".feeds-new-comment-box");
const newCommentBox = document.querySelector(".feeds-new-comment");
const commentBtn = document.querySelector(".feeds-comment-upload");
const mainRight = document.querySelector(".main-right");

// 댓글 추가 기능 테스트중

function addComment(e) {
  if (commentInput.value) {
    e.preventDefault();
    const newCommentInnerBox = document.createElement("div");
    newCommentBox.appendChild(newCommentInnerBox);

    let addedCommentName = document.createElement("span");
    addedCommentName.className = "added-comment-name";
    addedCommentName.innerHTML = "dazezd_z ";
    addedCommentName.style.fontWeight = "700";

    let addedCommentContent = document.createElement("span");
    addedCommentContent.className = "added-comment-content";
    addedCommentContent.innerHTML = commentInput.value;

    newCommentInnerBox.appendChild(addedCommentName);
    newCommentInnerBox.appendChild(addedCommentContent);
    commentInput.value = null;
  } else {
    commentInput.value = null;
  }
}

commentInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addComment(e);
  } else {
    commentBtn.addEventListener("click", addComment); // ()붙이지 말 것
  }
});
