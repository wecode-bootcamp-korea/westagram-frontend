"use strick";

const inputComment = document.getElementsByClassName("writeComment")[0];
const comments = document.getElementsByClassName("comments")[0];
const postBtn = document.getElementsByClassName("post")[0];
const heartBtn = document.querySelector(".heartImg");
heartBtn.addEventListener("click", (e) => onClickHeart(e));
let commentList = "";
let heartImg = "";

onInputComment = (e) => {
  if (inputComment.value.length == 0) {
    return;
  }
  postBtn.style.opacity = "1";
  if (e.code == "Enter") {
    postComment();
  }
};

onClickPost = () => {
  if (inputComment.value.length == 0) {
    return;
  }
  postComment();
};

const postComment = () => {
  commentList = document.createElement("li");
  commentList.classList.add("comment");
  commentList.innerHTML = `<span>winter</span> <span>${inputComment.value}</span>`;

  heartImg = document.createElement("button");
  heartImg.classList.add("spriteImg", "heartImg");
  heartImg.addEventListener("click", (e) => {
    onClickHeart(e);
  });

  removeComment = document.createElement("button");
  removeComment.classList.add("spriteImg", "removeComment");
  removeComment.addEventListener("click", (e) => e.target.parentNode.remove());

  comments.appendChild(commentList);
  commentList.appendChild(heartImg);
  commentList.appendChild(removeComment);

  inputComment.value = "";
  postBtn.style.opacity = "0.4";
};

const onClickHeart = (e) => {
  e.target.style.backgroundPosition = "-1040px -52px";
};

inputComment.addEventListener("keyup", onInputComment);
postBtn.addEventListener("click", onClickPost);
