"use strict"

const commentInput = document.getElementById("commentInput");
const commentSubmit = document.getElementById("submit");

function checkInput() {
    const newComment = commentInput.value;

    if (!commentInput.value.length) {
        alert("댓글을 입력하세요!");
    } else {
        addComment(newComment);
    }

    event.preventDefault();
}


function addComment(value) {
    const commentLists = document.getElementById('comment-wrapper');
    const newCommentList = document.createElement('li');

    newCommentList.innerHTML = `<span class="name">eenooyos</span><span> ${value}</span><span class="delete"> x </span>`;
    deleteComment(newCommentList);
    commentLists.appendChild(newCommentList);

    commentInput.value = "";
}

function deleteComment(newCommentList) {
    const deleteBtn = newCommentList.querySelector('.delete');
    deleteBtn.addEventListener('click', () => newCommentList.remove());
}


    commentInput.addEventListener('keydown', () => {
        if (window.event.code === 'Enter') {
            checkInput();
        }else{
            commentSubmit.addEventListener('click', checkInput);
        }
    });
