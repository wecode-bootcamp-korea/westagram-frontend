"use strict";
// 댓글 작성
const commentsWrapper = document.querySelector("#comments");
const commentForm = document.querySelector("#commentForm");
const commentBtn = document.querySelector("#commentBtn");
const userId = document.getElementById("userId").innerText;
const comment = document.getElementById("comment");
const logoImg = document.getElementById("logoImg");
const logoSpan = document.getElementById("logoSpan");

commentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const commentInput = commentForm.elements.comment;

  addComment(userId, commentInput.value);
  commentInput.value = "";
});

commentBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const commentInput = commentForm.elements.comment;

  addComment(userId, commentInput.value);
  commentInput.value = "";
});

const addComment = (userId, comment) => {
  const newComment = document.createElement("li");
  const userIdTag = document.createElement("b");

  newComment.style.width = "440px";
  userIdTag.style.marginRight = "8px";

  userIdTag.append(userId);
  newComment.append(userIdTag);
  newComment.append(`${comment}`);
  commentsWrapper.append(newComment);
};

// 메인으로 이동
function moveToLogin() {
  location.replace("./login.html");
}

logoImg.addEventListener("click", moveToLogin);
logoSpan.addEventListener("click", moveToLogin);
