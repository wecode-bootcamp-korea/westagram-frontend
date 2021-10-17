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
    const newComment = `<span class="name">we-dohdkjfd</span><span>${value}</span><span class="delete">x</span>`
    
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