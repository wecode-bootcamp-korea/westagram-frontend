"use strict"; //엄격모드

const input = document.getElementById("commentInput");
const submit = document.getElementById("submit");

const checkInput = (e) => {
  e.preventDefault();
  if(!input.value.length) {
    return;
  }
  registerComment(input.value);
};

const registerComment = (value) => { //댓글등록
  const commentLists = document.getElementById("commentLists");
  const newCommentList = document.createElement("li");
  // const newComment = `
  //   <span class="name">yaeman</span>
  //   <span>${value}</span>
  //   <span class="delete">x</span>
  // `;
  const newComment = `
    <div class="user-board">
        <a href="">yaeman</a>
        <span>${value}</span>
    </div>
    <button><i class="fa-regular fa-heart"></i></button>
    <span class="delete">x</span>
  `;
  newCommentList.innerHTML = newComment;

  // const newUserId = document.createElement("span");
  // newUserId.className = "name";
  // newUserId.innerText = "yaeman";

  // // console.log(newUserId);
  // const commentValue = document.createElement("span");
  // commentValue.innerText = value;
  // // console.log(commentValue);

  // const deleteBtn = document.createElement("span");
  // deleteBtn.classList.add("delte");
  // deleteBtn.innerText = "x";
  // // console.log(deleteBtn);

  // newCommentList.appendChild(newUserId);
  // newCommentList.appendChild(commentValue);
  // newCommentList.appendChild(deleteBtn);

  // console.log(newCommentList);
  makeDeleteEvent(newCommentList);
  commentLists.appendChild(newCommentList);

  input.value = ""; //clear시켜주는 부분
};

const makeDeleteEvent = (newCommentList) => {
  const deleteBtn = newCommentList.querySelector(".delete");
  deleteBtn.addEventListener("click", () => deleteComment(newCommentList));
};

const deleteComment = (newCommentList) => {
  newCommentList.remove();
};

const init = () => {
  submit.addEventListener("click", checkInput);
};

init();