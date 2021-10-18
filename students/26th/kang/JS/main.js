'use strict';

const commentInput = document.getElementById('comment');
const commentBtn = document.getElementById('posting-btn');
const commentRipple = document.getElementById('area');

// 1. 엔터키 || 게시 버튼 클릭으로 댓글 달기 기능 구현

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

// 2. 좋아요 클릭으로 색 넣고 빼기 구현중

const heart = document.getElementById('heart-bck');

function redHeart() {
  if ((heart.style.background = 'none')) {
    heart.style.background = 'tomato';
  }
}

heart.addEventListener('click', redHeart);
