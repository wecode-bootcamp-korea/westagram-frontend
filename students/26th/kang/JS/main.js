'use strict';

const commentInput = document.getElementById('comment');
const commentBtn = document.getElementById('posting-btn');
const commentRipple = document.getElementById('area');

commentBtn.addEventListener('click', function () {
  if (commentInput.value !== '') {
    let newComment = document.createElement('li');
    newComment.innerHTML = commentInput.value;
    commentRipple.appendChild(newComment);
    commentInput.value = '';
  }
});

function enterPress() {
  if (window.event.keyCode == 13) {
    let newComment = document.createElement('li');
    newComment.innerHTML = commentInput.value;
    commentRipple.appendChild(newComment);
    commentInput.value = '';
  }
}
commentInput.addEventListener('keyup', enterPress);
