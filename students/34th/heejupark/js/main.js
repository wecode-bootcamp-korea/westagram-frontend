"use strict";

// 피드 좋아요버튼 기능 구현
const like = () => {
  let heart = document.getElementsByClassName("fa-heart")[0];

  heart.addEventListener("click", () => {
    if (heart.className === "fa-regular fa-heart") {
      heart.className = "fa-solid fa-heart";
      heart.style.color = "red";
    } else {
      heart.className = "fa-regular fa-heart";
      heart.style.color = "black";
    }
  });
};
like();

// 댓글 기능 구현
let commentInput = document.getElementsByClassName("main_comment_box")[0];
let submitBtn = document.getElementsByClassName("main_comment_btn")[0];

const submit = () => {
  const commentBox = document.getElementsByClassName("exp_contents")[0];
  const comments = document.createElement("div");
  const username = document.createElement("span");
  const mainText = document.createElement("p");
  const mainIcon = document.createElement("i");

  comments.classList.add("comment_box");
  username.classList.add("username");
  mainText.classList.add("comment");
  // mainIcon.classList.add("fa-regular");
  // mainIcon.classList.add("fa-heart");
  mainIcon.className = "fa-regular fa-heart like";

  username.innerHTML = " hjpark625 ";
  mainText.innerText = commentInput.value;

  comments.appendChild(username);
  comments.appendChild(mainText);
  comments.appendChild(mainIcon);

  commentBox.appendChild(comments);

  // 좋아요 기능 구현
  mainIcon.addEventListener("click", () => {
    if (mainIcon.className === "fa-regular fa-heart like") {
      mainIcon.className = "fa-solid fa-heart like";
      mainIcon.style.color = "red";
    } else {
      mainIcon.className = "fa-regular fa-heart like";
      mainIcon.style.color = "black";
    }
  });
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

// 게시글 버튼 글자 색상 / 활성화 및 비활성화 조건 구현
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
