"use strict";

const postBtn = document.getElementsByClassName("comment__post__btn")[0];
const commentInput = document.getElementsByClassName("comment__input")[0];

commentInput.addEventListener("input", function() {
  const commentPost = commentInput.value;

  commentPost.length > 0 ?
  postBtn.disabled = false :
  postBtn.disabled = true;
});

function checkInput() {
  const commentPost = commentInput.value;

  if (!commentPost.length) {
    alert("댓글을 입력하세요.");
  } else {
    addComment(commentPost);
  }
}

function addComment(value) {
  const commentLists = document.getElementsByClassName("text__commentlists")[0];
  const newCommentList = document.createElement("li");
  const newComment = '<span class=“comment__author”>irreplaceavle/span><span>${value}</span><span class=“comment__delete__btn”>X</span>';

  newCommentList.innerHTML = newComment;
  deleteComment(newCommentList);
  commentLists.appendChild(newCommentList);

  commentInput.value = "";
}

function deleteComment(newCommentList) {
  const deleteBtn = newCommentList.querySelector(".comment__delete__btn");
  deleteBtn.addEventListener("click", () => newCommentList.remove());
}

const init = () => {
  postBtn.addEventListener("click", checkInput);
};

init();