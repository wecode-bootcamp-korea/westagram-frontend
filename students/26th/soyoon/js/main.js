"use strict"

const commentInput = document.getElementById("commentInput");
const commentSubmit = document.getElementById("submit");

function checkInput() {
    const newComment = commentInput.value;

    if (newComment.length > 0) {
        addComment(newComment);
    } else if(window.event.code === 'Enter'){
        if(newComment.length > 0){
            addComment(newComment);
        }else{
            alert("댓글을 입력하세요!");
        }
    }else {
        alert("댓글을 입력하세요!");
    }

    event.preventDefault();
}

function addComment(value) {
    const commentLists = document.getElementById('comment-wrapper');
    const newCommentList = document.createElement('li');
    const defaltComment = `<span class="name">eenooyos</span><span> ${value}</span><span class="delete"> x </span>`;

    newCommentList.innerHTML = defaltComment;
    commentLists.appendChild(newCommentList);
    commentInput.value = "";

    deleteComment(newCommentList);

}

function deleteComment(newCommentList) {
    const deleteBtn = newCommentList.querySelector('.delete');
    deleteBtn.addEventListener('click', () => newCommentList.remove());
}

const init = () => {
    commentSubmit.addEventListener('click', checkInput);
    heart.addEventListener('click', changeHeart)
}

init();