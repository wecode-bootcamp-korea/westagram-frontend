"use strict"

const commentInput = document.getElementsByClassName('post')[0];
const submit = document.getElementsByClassName('submit')[0];

commentInput.addEventListener('keyup',submitBtn);

function submitBtn(){
    commentInput.value.length !== 0 ? submit.disabled = false : submit.disabled = true;
}
/* ---------------------------------------- */
/* 댓글 생성 */
/* ---------------------------------------- */

function enterComment() {
    const comment = document.getElementsByClassName('comment')[0];
    const newComment = document.createElement('li');
    newComment.innerHTML = `<b>dltjsgho</b>`+ commentInput.value;

    comment.appendChild(newComment);
    commentInput.value= null;
}

commentInput.addEventListener('keyup',function(e){
    if(e.code === 'Enter') {
        enterComment();
    }
})

