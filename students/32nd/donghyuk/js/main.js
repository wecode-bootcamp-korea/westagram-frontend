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
  let commentRow = document.createElement("li");
  let commentRowLeft = document.createElement("div");
  let commentRowRight = document.createElement("div");
  let commentId = document.createElement("span");
  let commentText = document.createElement("span");
  let commentDelete = document.createElement("button");
  let commentHeart = document.createElement("button");

  commentRow.classList.add("article-comment__row");
  commentRowLeft.classList.add("comment__row-left");
  commentRowRight.classList.add("comment__row-right");
  commentId.classList.add("comment__id");
  commentText.classList.add("comment__text");
  commentDelete.classList.add("comment-delete");
  commentHeart.classList.add("comment-heart");

  commentId.innerText = id;
  commentText.innerText = commentInput.value;
  commentDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
  commentHeart.innerHTML = '<i class="fas fa-heart"></i>';

  // commentRow.setAttribute("id", Date.now());
  commentHeart.setAttribute("data-clicked", "false");

  commentRowLeft.appendChild(commentId);
  commentRowLeft.appendChild(commentText);
  commentRowRight.appendChild(commentDelete);
  commentRowRight.appendChild(commentHeart);
  commentRow.appendChild(commentRowLeft);
  commentRow.appendChild(commentRowRight);
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

const toggleHeartColor = (target, targetParentNode) => {
  if (targetParentNode.dataset.clicked === "false") {
    target.style.color = "red";
    targetParentNode.setAttribute("data-clicked", "true");
  } else if (targetParentNode.dataset.clicked === "true") {
    target.style.color = "black";
    targetParentNode.setAttribute("data-clicked", "false");
  }
};

const removeComment = (target) => {
  target.closest(".article-comment__row").remove();
};

comments.addEventListener("click", (event) => {
  const target = event.target;
  const targetParentNode = target.parentNode;
  target.className === "fas fa-trash-alt"
    ? removeComment(target)
    : toggleHeartColor(target, targetParentNode);
});
