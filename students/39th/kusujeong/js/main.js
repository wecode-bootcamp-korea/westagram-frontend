// 문법이나 이상한 짓을 못하도록 선언하기
"use strict";

//'개시'버튼누르면 댓글추가
const commentBtn = document.querySelector(".comment-btn");
const commentVal = document.querySelector(".comment-input");
const curDiv = document.querySelector("#commentList");
commentBtn.addEventListener("click", () => {
  addComment();
});
// 엔터버튼누르면 댓글추가
commentVal.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addComment();
});

function addComment() {
  const list = document.createElement("li");
  const mainDiv = document.createElement("div");
  const subDiv = document.createElement("div");
  const idDiv = document.createElement("div");
  const descDiv = document.createElement("div");
  const delBtn = document.createElement("button");
  const likeBtn = document.createElement("i");

  list.classList.add("description-comment");
  mainDiv.classList.add("article-info");
  subDiv.classList.add("comment-function");
  idDiv.classList.add("ariticle-id");
  descDiv.classList.add("article-description");
  delBtn.classList.add("comment-delete");
  likeBtn.classList.add("fa-regular");
  likeBtn.classList.add("fa-heart");

  const idContent = document.createTextNode("rntnwjd");
  const newContent = document.createTextNode(commentVal.value);
  const delContent = document.createTextNode("삭제");

  idDiv.appendChild(idContent);
  descDiv.appendChild(newContent);
  delBtn.appendChild(delContent);

  mainDiv.appendChild(idDiv);
  mainDiv.appendChild(descDiv);

  subDiv.appendChild(delBtn);
  subDiv.appendChild(likeBtn);

  list.appendChild(mainDiv);
  list.appendChild(subDiv);

  curDiv.appendChild(list);

  // Input창 reset
  commentVal.value = "";
}

// 삭제버튼 누르면 댓글 삭제
// 좋아요 버튼 누르면 하트가 빨갛게 스타일링
const deleteBtn = document.querySelector("#commentList");
deleteBtn.addEventListener("click", (e) => {
  e.target.nodeName == "BUTTON" && e.target.parentNode.parentNode.remove();
  if (e.target.nodeName == "I") {
    e.target.classList.toggle("comment-like");
    e.target.classList.toggle("fa-solid");
  }
});
