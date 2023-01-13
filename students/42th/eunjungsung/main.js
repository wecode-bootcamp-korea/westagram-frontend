"use strict";
const commentsWrapper = document.querySelector("#comments");
const commentForm = document.querySelector("#commentForm");
const commentBtn = document.querySelector("#commentBtn");
const userId = document.getElementById("userId").innerText;
const comment = document.getElementById("comment");
const logoImg = document.getElementById("logoImg");
const logoSpan = document.getElementById("logoSpan");

// 댓글 작성
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
  // const heartImg = document.createElement("img");
  // const commentHeart = heartImg.setAttribute("id", "commentHeart");

  // newComment.style.width = "440px";
  // userIdTag.style.marginRight = "8px";
  // // commentHeart.setAttribute("alt", "Heart Img");
  // commentHeart.src = "images/redempty.png";
  // // commentHeart.setAttribute("width", "20px");
  // // commentHeart.setAttribute("height", "20px");

  userIdTag.append(userId);
  newComment.append(userIdTag);
  newComment.append(`${comment}`);
  // newComment.append(heartImg);
  commentsWrapper.append(newComment);
};

// 메인으로 이동
function moveToLogin() {
  location.replace("./login.html");
}

logoImg.addEventListener("click", moveToLogin);
logoSpan.addEventListener("click", moveToLogin);
