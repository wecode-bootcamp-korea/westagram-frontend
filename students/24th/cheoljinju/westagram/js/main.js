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

// 댓글 기능 구현
commentBtn.addEventListener("click", addComment);
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addComment();
    console.log(input.value);
    return;
  }
});

// 게시 버튼 활성화 기능
input.addEventListener("keyup", (event) => {
  input.value
    ? commentBtn.classList.add("active")
    : commentBtn.classList.remove("active");
});

// 페이지 축소 시에 aside 레이아웃 위치 조정
window.addEventListener("resize", () => {
  let resizing = clientSize - window.innerWidth;
  if(clientSize > 1500){
    aside.style.right = `${500 - resizing/ 2}px`;
  }
  if(clientSize < 1500){
    aside.style.right = `${280 - resizing/ 1.1}px`
  }
  console.log(resizing);
});

// aside 큰 화면 로드 시에 위치 조정
window.addEventListener("load", () => {
  if(window.innerWidth > 1500){
    aside.style.right = `${500}px`;
  }
})