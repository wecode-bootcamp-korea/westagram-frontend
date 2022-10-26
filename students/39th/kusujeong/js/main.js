// 문법이나 이상한 짓을 못하도록 선언하기
"use strict";

//'개시'버튼누르면 댓글추가
const commentBtn = document.querySelector(".comment-btn");
const commentVal = document.querySelector(".comment-input");
const curDiv = document.querySelector(".feed-description");
commentBtn.addEventListener("click", () => {
  addComment();
});
// 엔터버튼누르면 댓글추가
commentVal.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addComment();
});

function addComment() {
  const boxDiv = document.createElement("div");
  const idDiv = document.createElement("div");
  const descDiv = document.createElement("div");
  boxDiv.classList.add("description-article"); // <div class="description-article">
  idDiv.classList.add("ariticle-id"); // <div class="ariticle-id"></div>;
  descDiv.classList.add("article-description"); // <div class="article-description"></div>
  const idContent = document.createTextNode("rntnwjd");
  const newContent = document.createTextNode(commentVal.value);
  idDiv.appendChild(idContent); // <div class="ariticle-id">rntnwjd</div>
  descDiv.appendChild(newContent); // <div class="article-description">어머 너무 귀엽당~~!</div>

  boxDiv.appendChild(idDiv);
  boxDiv.appendChild(descDiv);

  curDiv.appendChild(boxDiv);
  // Input창 reset
  commentVal.value = "";
}
