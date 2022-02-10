'use strict';

const postCommentInFeed = () => {
  const commentInput = document.getElementById('post_comment_input');
  const commentPostBtn = document.getElementsByClassName('post_comment_btn')[0];

  // 댓글 입력시 요소 생성
  const addNewComment = () => {
    const newCommentLocation = document.getElementsByClassName('comment_list')[0];
    const newComment = document.createElement('li');

    newComment.innerHTML = `
      <div class="user_desc">
        <em>iAmUser</em>
        <span>${commentInput.value}</span>
      </div>
      <button><i class="far fa-heart fa-xs"></i></button>
    `;

    newCommentLocation.appendChild(newComment);
    commentInput.value = '';
  }


  // 사용자 입력 들어올 시, 게시 버튼 활성화
  commentInput.addEventListener('keyup', () => {
    commentInput.value ? commentPostBtn.style.opacity = '1' : commentPostBtn.style.opacity = '.3';
    if (window.event.keyCode === 13 && commentInput.value) {
      addNewComment();
    }
  });

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