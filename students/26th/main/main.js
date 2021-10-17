"use strict";

const commentInput = document.getElementById('commentInput');
const uploadBtn = document.getElementById('uploadBtn');

function checkInput () {
    const commentValue = commentInput.value;
    
    if(commentValue.length){
        addComment(commentValue);
    } else {
        alert("댓글을 입력해주세요");
    }
}

function addComment (value) {
    const commentList = document.getElementsByClassName('feedComment')[0];
    const newComment = document.createElement('li');

    newComment.innerHTML = `<span><b>didoo</b>&nbsp&nbsp<span>${value}</span><span class="deleteBtn">x</span>`;
    deleteComment(newComment);
    commentList.appendChild(newComment);

    commentInput.value = '';
}

function deleteComment (newComment) {
    const deleteBtn = newComment.querySelector('.deleteBtn');
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.addEventListener('click', () => newComment.remove());
}

const init = () => {
    uploadBtn.addEventListener('click', checkInput);
    commentInput.addEventListener('keydown', () => {
        if (window.event.code === 'Enter'){
            checkInput();
        }
    });
}

init();