"use strict";
const commentBox = document.querySelector(".feed__text");
const commentBtn = document.querySelector(".comment-button");
const input = document.querySelector(".comment-input");
const aside = document.querySelector(".aside");
const clientSize = window.innerWidth;
const feeds = document.querySelector(".main__feeds");
const feed = document.querySelector(".main__feed");

// 코멘트 생성하는 함수
const createComment = (inputValue) => {
  const commentRow = document.createElement("div");
  commentRow.setAttribute("class", "feed__comment");
  commentRow.innerHTML = `
    <span>wecode_24th</span>
    <span>${inputValue}</span>
    <button type="button" class="comment__delete"><i class="far fa-trash-alt"></i></button>
    <button type="button" class="comment__heart"><i class="far fa-heart"></i></button>
  `;
  return commentRow;
};

// 코멘트 추가하는 함수
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
    return;
  }
});

// 게시 버튼 활성화 기능
input.addEventListener("keyup", (event) => {
  input.value
    ? commentBtn.classList.add("active")
    : commentBtn.classList.remove("active");
});


// 좋아요 버튼 on/off 함수
function onHeartClick(event){
  if(event.target.className === "far fa-heart"){
    event.target.className = "fas fa-heart";
  } else if(event.target.className === "fas fa-heart"){
    event.target.className = "far fa-heart";
  }
}

// 삭제 버튼 함수
function onDelete(event){
  let target = event.target;
  if(event.target.className === "far fa-trash-alt"){
    target.parentNode.parentNode.remove(); // 재사용성 고민필요
  }
}

// 댓글 아이콘 버튼 기능 구현
feeds.addEventListener("click", (event) => {
  if(event.target.tagName !== "I"){
    return;
  }
  onHeartClick(event);
  onDelete(event);
})




