"use strict";

const commentInput = document.getElementById("input2");
const submit = document.getElementById("button");

function checkInput() {
    if (!commentInput.value.length) {
        alert("댓글을 입력하세요 제발로~ ㅎㅎ");
    } else {
        registerComment(commentInput.value);
    }
}

function registerComment(value) {
    const commentLists = document.getElementById("commentLists"); //ul
    const newCommentList = document.createElement("li"); //li
    const newComment = `<span class="name">wecode-kibum</span><span>${value}</span><span class="delete">X</span>`;

    newCommentList.innerHTML = newComment;
    deleteComment(newCommentList);
    commentLists.appendChild(newCommentList);

    commentInput.value = "";
}

function deleteComment(newCommnetList) {
    const deleteBtn = newCommnetList.querySelector(".delete");
    deleteBtn.addEventListener("click", () => newCommentList.remove());
}

const init = function() {
    submit.addEventListener("click", checkInput);
};

init();