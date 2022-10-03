"use strict";

const input = document.getElementById("commentInput");
const summit = document.getElementById("summit");

function checkInput(){
  if (input.value.trim().length === 0){
    alert("댓글을 입력하세요!");
  } else {
    registerComment(input.value);
  }
}

function registerComment(value) {
  const commentLists = document.getElementById("commentLists");
  const newCommentList = document.createElement("li");
   
const newComment = `
<span class="name">doyonnie</span>
<span>${value}</span>
<span class="delete">x</span>
`;


newCommentList.innerHTML = newComment;
commentLists.appendChild(newCommentList);

input.value="";
}


function makeDeleteEvent(newCommentList) {
  const deleteBtn = newCommentList.querySelector(".delete");
  deleteBtn.addEventListener("click",  () =>
  deleteComment(deleteBtn, newCommentList)
  );
}

function deleteComment(deleteBtn, newCommentList) {
 // deleteBtn.removeEventListener("click", deleteComment);
  newCommentList.remove();
}


//entry point
const init = () => {
  summit.addEventListener("click", checkInput);
};

init();
