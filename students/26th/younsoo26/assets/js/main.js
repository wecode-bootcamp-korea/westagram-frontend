"use strict";
const commentTextID = document.getElementById("write-comment-text");
const commentSubmit = document.getElementById("write-comment-submit");
const commentBox = document.getElementById("post-comments-box#1");

let inputComment;

const commentAddHTML = () => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="post-comments"><span class="username">mincraft_bangbang&nbsp;</span><span class="comment-text">${inputComment}</span><span class="comment-icons"><span class="delete-comment">X</span> <i class="fas fa-heart"></i></span></div>`
    commentBox.appendChild(newDiv);

    likeButton();
    deleteComment();
}

const commentAddTheWritesAndReset = e => {
    commentAddHTML();
    commentResetInputVl();
}

const commentResetInputVl = e => {
    commentTextID.value = "";
    inputComment = commentTextID.value;
}

const commentPressEnter = e => {
    if (e.key === 13 || e.which === 13){
        e.preventDefault();
        commentAddTheWritesAndReset();
        commentSubmit.classList.remove("activate-comment-submit")
        return false;
    }
}

const commentChecker = e => {
    inputComment = e.target.value;
    inputComment ? commentSubmit.classList.add("activate-comment-submit") : commentSubmit.classList.remove("activate-comment-submit");
}

const likeButton = () => {
    const heartIcon = document.getElementsByClassName("fas", "fa-heart");
    const doHeart = (e) => {
        e.target.classList.toggle("heartActivate")
    }
    for(let i = 0; i<heartIcon.length; i++){
        heartIcon[i].onclick = doHeart
    }
}

const deleteComment = () => {
    const deleteComment = document.getElementsByClassName("delete-comment");

    for(let i = 0; i<deleteComment.length; i++){
        deleteComment[i].onclick = e => e.target.parentNode.parentNode.remove();
    }
}

const init = () =>{
    likeButton();
    commentTextID.oninput = commentChecker;
    commentSubmit.onmouseup = commentAddTheWritesAndReset;
    commentTextID.addEventListener("keypress", commentPressEnter);
}

init();