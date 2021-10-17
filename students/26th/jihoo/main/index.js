'use strict';

const commentInput = document.getElementById("name");
const submit = document.getElementById("submit");

function checkInput() {
    if(!commentInput.value.length) {
        alert("댓글을 입력하세요");
    }else{
        registerComment(commentInput.value);
    }
}
function registerComment(value){
    const commentLists = document.getElementById("commentLists");
    const newCommentList = document.createElement("li");
    const newComment = `<span class="name">we-dohdkjfd</span><span>${value}</span><span class="delete">X</span>`
    
    newCommentList.innerHTML = newComment;
    deleteComment(newCommentList);
    commentLists.appendChild(newCommentList);

    commentInput.value = "";
}

function deleteComment(newCommentList) {
    const deleteBtn = newCommentList.querySelector(".delete");
    deleteBtn.addEventListener("click", () => newCommentList.remove());
}

const init = () => {
    submit.addEventListener("click", checkInput);
};

init();

const inputId = document.querySelector("#name");
const button = document.querySelector('.upload');

function commentBtn() {
    let idValu = inputId.value;

    if(idValu.length > 0) {
        button.disabled = false;
        button.style.cursor = 'pointer';
        button.style.color = '#1c7ed6';
    } else {
        button.disabled = true;
        button.style.cursor = 'default';
    }
}

inputId.addEventListener('keyup', commentBtn);
// const postBtn = document.querySelector(".upload")[0];
// const postInput = document.querySelector("#name")[0];
// postInput.addEventListener("input", function() {
//   const commentPost = postInput.value;
//   commentPost.length > 0 ?
//   postBtn.disabled = false :
//   postBtn.disabled = true;
// });

