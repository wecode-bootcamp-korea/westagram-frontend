const commentInput = document.querySelector(".feeds-comment-input");
const commentBox = document.querySelector(".feeds-comment-box");
const newCommentBox = document.querySelector(".feeds-new-comment");
const commentBtn = document.querySelector(".feeds-comment-upload");
const heartIcon = document.querySelector(".icon-heart");
const likeNumber = document.querySelector(".feeds-like-number");

// 좋아요 기능

heartIcon.addEventListener("click", function () {
  likeNumber.innerHTML = Number(Number(likeNumber.innerHTML) + 1);
});

// 댓글 추가 기능 (엔터, 클릭)

commentInput.addEventListener("keyup", function (e) {
  e.key === "Enter" || e.keyCode === 13
    ? addComment(e)
    : commentBtn.addEventListener("click", addComment); // ()붙이지 말 것
});

function addComment() {
  if (commentInput.value) {
    const newCommentInnerBox = document.createElement("div");
    const addedCommentName = document.createElement("span");
    const addedCommentContent = document.createElement("span");
    const addedDeleteBtn = document.createElement("button");

    addedCommentName.innerHTML = "dazezd_z ";
    addedCommentName.style.fontWeight = "700";
    addedDeleteBtn.style.marginLeft = "10px";
    addedCommentContent.innerHTML = commentInput.value;
    addedDeleteBtn.innerHTML = "❌";
    addedDeleteBtn.style.background = "transparent";
    addedDeleteBtn.style.border = "none";

    newCommentBox.appendChild(newCommentInnerBox);
    newCommentInnerBox.append(addedCommentName, addedCommentContent);
    newCommentInnerBox.appendChild(addedDeleteBtn);

    // 댓글 삭제 기능 (클릭)
    addedDeleteBtn.addEventListener("click", function () {
      newCommentBox.removeChild(newCommentInnerBox);
    });

    commentInput.value = null;
  } else commentInput.value = null;
}
