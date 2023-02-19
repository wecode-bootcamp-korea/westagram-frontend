"use strict";

const commentInput = document.querySelector(".feeds-comment-input");
const newCommentBox = document.querySelector(".feeds-new-comment");
const commentBtn = document.querySelector(".feeds-comment-upload");
const accountNickname = document.querySelector(".account-nickname");
const heartIcon = document.querySelector(".fa-heart");
const likeNumber = document.querySelector(".feeds-like-number");

function addComment() {
  if (commentInput.value) {
    // 댓글 추가 기능 (엔터, 클릭)
    const newCommentInnerBox = document.createElement("div");
    const addedCommentName = document.createElement("strong");
    const addedCommentContent = document.createElement("span");
    const addedDeleteBtn = document.createElement("button");

    addedCommentName.innerText = accountNickname.innerText;
    addedCommentContent.innerText = commentInput.innerText;
    addedDeleteBtn.innerText = "❌";
    addedDeleteBtn.classList.add("delete-btn");

    newCommentBox
      .appendChild(newCommentInnerBox)
      .append(addedCommentName, addedCommentContent, addedDeleteBtn);

    // 댓글 삭제 기능 (클릭)
    addedDeleteBtn.addEventListener("click", () => {
      newCommentInnerBox.remove();
    });

    commentInput.value = "";
  } else commentInput.value = "";
}

commentInput.addEventListener("keyup", (e) => {
  e.key === "Enter" || e.keyCode === 13
    ? addComment(e)
    : commentBtn.addEventListener("click", addComment); // ()붙이지 말 것
});

// 좋아요 기능
heartIcon.addEventListener("click", () => {
  heartIcon.classList.toggle("fa-regular");
  heartIcon.classList.toggle("fa-solid");
  heartIcon.className.includes("fa-regular")
    ? (likeNumber.innerText = Number(likeNumber.innerText) - 1)
    : (likeNumber.innerText = Number(likeNumber.innerText) + 1);
});
