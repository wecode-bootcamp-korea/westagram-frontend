"use strict";

const navbarContainer = document.querySelector(".nav-bar__container");
const mainFeeds = document.querySelector(".main-feeds");
const mainRight = document.querySelector(".main-right");
const comments = document.querySelector(".article-comments");
const commentForm = document.querySelector(".article-comment__form");
const commentInput = document.querySelector(".comment__input");
const commentBtn = document.querySelector(".comment__button");

let mainFeedsRec = mainFeeds.getBoundingClientRect();

mainRight.style.left = `${mainFeedsRec.right + 32}px`;
navbarContainer.style.left = `${mainFeedsRec.left}px`;

window.addEventListener("resize", () => {
  mainFeedsRec = mainFeeds.getBoundingClientRect();

  mainRight.style.left = `${mainFeedsRec.right + 32}px`;
  navbarContainer.style.left = `${mainFeedsRec.left}px`;
});

const addComment = (id) => {
  let commentRow = document.createElement("div");
  let commentRowLeft = document.createElement("div");
  let commentId = document.createElement("span");
  let commentText = document.createElement("span");
  let commentHeart = document.createElement("span");

  commentRow.classList.add("article-comment__row");
  commentRowLeft.classList.add("comment__row-left");
  commentId.classList.add("comment__id");
  commentText.classList.add("comment__text");
  commentHeart.classList.add("comment-heart");

  commentId.innerText = id;
  commentText.innerText = commentInput.value;
  commentHeart.innerHTML = "<i class='fas fa-heart'></i>";
  commentHeart.setAttribute("data-clicked", "false");

  commentRowLeft.appendChild(commentId);
  commentRowLeft.appendChild(commentText);
  commentRow.appendChild(commentRowLeft);
  commentRow.appendChild(commentHeart);
  comments.appendChild(commentRow);

  commentInput.value = "";
};

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  commentInput.value !== "" ? addComment("gel_fos") : null;
});

commentInput.addEventListener("keyup", (event) => {
  event.target.value
    ? (commentBtn.style.color = "#0095F6")
    : (commentBtn.style.color = "#c4e1fb");
});

comments.addEventListener("click", (event) => {
  const target = event.target;
  const targetParentNode = target.parentNode;
  if (targetParentNode.dataset.clicked === "false") {
    target.style.color = "red";
    targetParentNode.setAttribute("data-clicked", "true");
  } else if (targetParentNode.dataset.clicked === "true") {
    target.style.color = "black";
    targetParentNode.setAttribute("data-clicked", "false");
  }
});
