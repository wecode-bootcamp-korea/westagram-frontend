"use strict";

const commentContainer = document.querySelector(".writeaComment");
const commentInput = document.querySelector(".commentInput");
const commentButton = document.querySelector(".commentBtn");

commentInput.addEventListener("keydown", handleInput);
commentButton.addEventListener("click", handleClick);

function handleInput(event) {
  const comment = commentInput.value;
  if (comment && event.key === "Enter") {
    commentAdd(comment);
  }
}

function handleClick() {
  const comment = commentInput.value;
  if (comment) {
    commentAdd(comment);
  }
}

function commentAdd(text) {
  const commentWrapper = document.createElement("ul");
  commentWrapper.className = "commentWrapper";
  
  const comment = `
    <ul class="newComment">rlaydtjs</ul>
    <span>${text}<span>
  `;

  commentWrapper.innerHTML = comment;
  commentContainer.appendChild(commentWrapper);
  commentInput.value = "";
}