


'use strict';

const postCommentInFeed = () => {
  const commentInput = document.getElementById('inpt-cmt');
  const commentPostBtn = document.getElementsByClassName('btn-cmt-post')[0];

  commentInput.addEventListener('keyup', cmtListner);

function cmtListner() {
  switch (!(commentInput.value)) {
      case true: commentPostBtn.disabled = true; break;
      case false: commentPostBtn.disabled = false; break;
  }
}

  // 댓글 입력시 요소 생성
  const addNewComment = () => {
    const newCommentLocation = document.getElementsByClassName('cmt-list')[0];
    const newComment = document.createElement('li');

    newComment.innerHTML = `
      
      <span class="user-id">sadfasdf</span>
              <span class="content-txt">${commentInput.value}</span>
      <button><i class="far fa-heart fa-xs"></i></button>
    `;

    newCommentLocation.appendChild(newComment);
    commentInput.value = '';
  }




  // 댓글 게시
  commentPostBtn.addEventListener('click', () => {
    if (commentInput.value) {
      addNewComment();
    } else {
      alert('댓글이 입력되지 않았습니다 😳');
    }
  })
}


postCommentInFeed();