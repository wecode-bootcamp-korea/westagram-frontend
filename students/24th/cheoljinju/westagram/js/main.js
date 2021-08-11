"use strict";
const commentBox = document.querySelector(".feed__text");
const commentBtn = document.querySelector(".comment-button");
const input = document.querySelector(".comment-input");
const aside = document.querySelector(".aside");
const clientSize = window.innerWidth;

const createComment = (inputValue) => {
  const commentRow = document.createElement("div");
  commentRow.setAttribute("class", "feed__comment");
  commentRow.innerHTML = `
    <span>wecode_24th</span>
    <span>${inputValue}</span>
  `;
  return commentRow;
};

const addComment = () => {
  const inputValue = input.value;
  if (input.value == false) {
    input.focus();
    return;
  }

  const newComment = createComment(inputValue);
  commentBox.appendChild(newComment);
  commentBtn.classList.remove("active");
  input.focus();
  input.value = "";
};

commentBtn.addEventListener("click", addComment);
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addComment();
    console.log(input.value);
    return;
  }
});

input.addEventListener("keyup", (event) => {
  input.value
    ? commentBtn.classList.add("active")
    : commentBtn.classList.remove("active");
});

window.addEventListener("resize", () => {
  let resizing = clientSize - window.innerWidth;
  aside.style.right = `${500 - resizing / 2.2}px`;
  console.log(resizing);
});
