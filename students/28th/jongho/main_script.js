"use strict";

const postBtn = document.getElementsByClassName('postComment')[0];
const currentComments = document.getElementsByClassName('commentList')[0];
const addCommentBtn = document.getElementsByClassName('inputComment')[0];
//댓글목록 요소 가져온 변수
 //입력한 댓글 텍스트 가져옴
// console.log(postBtn);

postBtn.addEventListener('click', (ev) => {
  const myComment = document.getElementsByClassName('inputComment')[0].value;
  const newComment = document.createElement('li');
  if (myComment.length > 0) {
    newComment.innerHTML = myComment;
    newComment.setAttribute('class', 'comments');
    console.log(newComment.value);
    currentComments.appendChild(newComment);
  }
})

addCommentBtn.addEventListener('keypress', (ev) => {
  const myComment = document.getElementsByClassName('inputComment')[0].value;
  const newComment = document.createElement('li');
  if (myComment.length > 0 && ev.key === 'Enter') {
    newComment.innerHTML = myComment;
    newComment.setAttribute('class', 'comments');
    console.log(newComment.value);
    currentComments.appendChild(newComment);
  }
})