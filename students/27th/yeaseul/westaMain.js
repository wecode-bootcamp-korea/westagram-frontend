"use strict";

const commentButton = document.querySelector("#submit");
const commentInput = document.querySelector("#commentInput");
const commentLists = document.querySelector("#commentLists");

function validateComment() {
  const commentValue = commentInput.value;

  return commentValue.length > 0;
}

function addComment() {
  const isCommentValid = validateComment();

  if (isCommentValid === false) {
    alert("댓글을 입력 해주세요");
  } else {
    const newComment = document.createElement("li");

    const newCommentNickName = document.createElement("span");
    newCommentNickName.classList.add("name");
    newCommentNickName.innerText = "yes_eulk3";

    const newCommentContents = document.createElement("span");
    newCommentContents.innerText = commentInput.value;

    newComment.appendChild(newCommentNickName);
    newComment.appendChild(newCommentContents);

    commentLists.appendChild(newComment);

    commentInput.value = "";
  }
}

function init() {
  commentButton.addEventListener("click", addComment);
}

init();

// commentButton 버튼을 눌렀을 때 addEventListerner가 실행되고 ('이벤트종류'.'일어날 일(즉 함수명)');

//댓글창에 문자를 입력하게 되면 닉네임 정보/댓글 내용이 칸 안에 어떤 문자를 입력하고 게시 버튼을 누르면 게시됨.
//즉 1.input창에 댓글 문자열이 입력됨 2.


