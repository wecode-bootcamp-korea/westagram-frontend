"use strict";
let commentInput = document.getElementsByClassName("main_comment_box")[0];
let submitBtn = document.getElementsByClassName("main_comment_btn")[0];

const submit = () => {
  const commentBox = document.getElementsByClassName("exp_contents")[0];
  const comments = document.createElement("div");
  const username = document.createElement("span");
  const mainText = document.createElement("p");
  const mainIcon = document.createElement("img");
  mainIcon.src =
    "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";

  comments.classList.add("comment_box");
  username.classList.add("username");
  mainText.classList.add("comment");
  mainIcon.classList.add("like_heart");

  username.innerHTML = " hjpark625 ";
  mainText.innerText = commentInput.value;

  comments.appendChild(username);
  comments.appendChild(mainText);
  comments.appendChild(mainIcon);

  commentBox.appendChild(comments);
};

submitBtn.addEventListener("click", (e) => {
  submit();
  commentInput.value = "";
});

commentInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    submit();
    commentInput.value = "";
  }
});

function buttonColor() {
  let commentBx = document.querySelector(".main_comment_box");
  let commentBtn = document.querySelector(".main_comment_btn");
  if (commentBx.value === "") {
    commentBtn.style.color = "#bddbf9";
    commentBtn.disabled = true;
  } else {
    commentBtn.style.color = "#0989f1";
    commentBtn.disabled = false;
  }
}
