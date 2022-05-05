"use strict";

const commnentWriteArea = document.getElementsByClassName("write-area")[0]; 
const commentSubmitBtn = document.getElementById("submit"); 
const commentFeed = document.getElementsByClassName("comments-wrapper")[0]; 
const commentListItem = document.createElement("li");

function actvieSubmitBtn() {
    if (commnentWriteArea.value) {
        commentSubmitBtn.disabled = false;
    }
}

function generateCommentList() {

    commentListItem.innerHTML = `
        <div>
            <span class="comment-user">userName</span>
            <span>${commnentWriteArea.value}</span>
        </div>`;

    commentFeed.appendChild(commentListItem);
    commnentWriteArea.value = '';
    event.preventDefault();
}

commnentWriteArea.addEventListener("keyup", actvieSubmitBtn);
commentSubmitBtn.addEventListener("click", generateCommentList);