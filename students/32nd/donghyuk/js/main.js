"use strict";

const navbarContainer = document.querySelector(".nav-bar__container");
const mainFeeds = document.querySelector(".main-feeds");
const mainRight = document.querySelector(".main-right");
const comments = document.querySelector(".article-comments");
const commentForm = document.querySelector(".article-comment__form");
const commentInput = document.querySelector(".comment__input");
const commentBtn = document.querySelector(".comment__button");

let mainFeedsRec = mainFeeds.getBoundingClientRect();

// initialize mainRight position
mainRight.style.left = `${mainFeedsRec.right + 32}px`;
navbarContainer.style.left = `${mainFeedsRec.left}px`;

// reposition mainRight when resized
window.addEventListener("resize", () => {
  mainFeedsRec = mainFeeds.getBoundingClientRect();

  mainRight.style.left = `${mainFeedsRec.right + 32}px`;
  navbarContainer.style.left = `${mainFeedsRec.left}px`;
});

// make addComment function
const addComment = (id) => {
  let commentRow = document.createElement("div");
  let commentId = document.createElement("span");
  let commentText = document.createElement("span");

  commentRow.classList.add("article-comment__row");
  commentId.classList.add("comment__id");
  commentText.classList.add("comment__text");

  commentId.innerText = id;
  commentText.innerText = commentInput.value;

  commentRow.appendChild(commentId);
  commentRow.appendChild(commentText);
  comments.appendChild(commentRow);

  commentInput.value = "";
};

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  commentInput.value !== "" ? addComment("gel_fos") : null;
});

// color change commentInput button
commentInput.addEventListener("keyup", (event) => {
  console.log(event.target.value);
  event.target.value
    ? (commentBtn.style.color = "#0095F6")
    : (commentBtn.style.color = "#c4e1fb");
});
