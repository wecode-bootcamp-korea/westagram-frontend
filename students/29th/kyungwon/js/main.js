'use strict';

const commentBox = document.getElementsByTagName('input')[1];
const writeButton = document.getElementsByClassName('write-button')[0];
const commentSet = document.getElementsByClassName('text-comments')[0];

commentBox.addEventListener('keyup', function changeButtonColor(e) {
    let comment = document.getElementsByTagName('input')[1].value;
    if (comment.length !== 0) {
        writeButton.style.opacity = 1;

        if (e.code === "Enter") {
            let newCommentSet = commentSet.cloneNode(true);
            newCommentSet.querySelector('.comment-preview').innerHTML = comment;
            commentSet.after(newCommentSet);
        }        
    } else {
        writeButton.style.opacity = 0.4;}
});

commentBox.addEventListener('keyup', function changeButtonColor() {
    let comment = document.getElementsByTagName('input')[1].value;
    if (comment.length !== 0) {
        writeButton.style.opacity = 1;
        writeButton.addEventListener('click', function addComment() {
            let newCommentSet = commentSet.cloneNode(true);
            newCommentSet.querySelector('.comment-preview').innerHTML = comment;
            commentSet.after(newCommentSet);
        })} else {
        writeButton.style.opacity = 0.4;}
});
