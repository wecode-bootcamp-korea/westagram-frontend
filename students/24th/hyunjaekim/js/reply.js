"use strict";
let replies = document.querySelector(".replies"); // ul
let postBtn = document.querySelector(".commentPost"); // submit btn

const commentInput = document.querySelector(".commentInput"); //  input

function onAdd() {
  const currentValue = commentInput.value;
  createItem(currentValue);
  commentInput.value = "";
}

function createItem(text) {
  const reply = document.createElement("li");
  reply.setAttribute("class", "reply");
  reply.innerHTML = `<div class="replyDetail">
         <a href="#" class="userID">hyun___jjae</a>
        <a href="#" class="comment">${text}</a>
    </div>
    <span class="icon heartBtn small_icon"></span>`;

  // 화면에 보이게
  replies.appendChild(reply);
}

function init() {
  postBtn.addEventListener("click", () => {
    let commentValue = commentInput.value;
    if (commentValue.length > 0) {
      onAdd();
    }
  });

  commentInput.addEventListener("keydown", (e) => {
    let commentValue = commentInput.value;
    if (e.key === "Enter") {
      if (commentValue.length > 0) {
        onAdd();
      }
    }
  });
}

init();
