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
    const newComment = `<span class="name">jiwon</span><span>${value}</span><span class="delete">X</span>`
    
    newCommentList.innerHTML = newComment;
    deleteComment(newCommentList);
    commentLists.appendChild(newCommentList);
    commentInput.value = "";
}

function deleteComment(newCommentList) {
    const deleteBtn = newCommentList.querySelector(".delete");
    deleteBtn.addEventListener("click", () => newCommentList.remove());
}


commentInput.addEventListener('keyup', () => {
    if (window.event.code === 'Enter') {
        checkInput();
    }else {
        submit.addEventListener("click", checkInput);
    }
});

// const init = () => {
//     submit.addEventListener("click", checkInput);
// };
// init();

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
        button.style.color = 'skyblue  ';
    }
}
inputId.addEventListener('keyup', commentBtn);