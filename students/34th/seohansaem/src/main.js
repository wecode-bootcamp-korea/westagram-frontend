const feedNewComment = document.querySelectorAll('.new-comment');
const feedCommentInput = document.querySelectorAll('.comment-input');
const feedCommentButton = document.querySelectorAll('.comment-button');
const feedCommentList = document.querySelectorAll('.feed-comments');
const feedLikeButton = document.querySelectorAll('.feed-like');
const feedCommentLikeButton = document.querySelectorAll('.feed-comment-like');
const feedCommentDeleteButton = document.querySelectorAll(
  '.feed-comment-delete'
);
const handleLikeButtonClick = (ev) => {
  ev.target.classList.toggle('check');
  ev.target.classList.toggle('fa-solid');
  ev.target.classList.toggle('fa-regular');
};

const handleDeleteButtonClick = (ev) => {
  ev.path[1].remove();
};

const handleCommentInputAdd = (ev, feedCommentList) => {
  const comment = ev.target[0].value;
  if (comment.length < 2) {
    alert('댓글을 2자 이상 입력해주세요.');
    return;
  }

  ev.target[0].value = '';

  const newComment = document.createElement('li');
  const newCommentUser = document.createElement('span');
  const newCommentInfo = document.createElement('span');
  const heartIcon = document.createElement('i');
  const deleteIcon = document.createElement('i');

  newComment.className = 'comment-another';
  newCommentUser.className = 'feed-user-name';
  newCommentInfo.className = 'feed-user-comment';
  heartIcon.className = 'feed-comment-like fa-regular fa-heart';
  deleteIcon.className = 'feed-comment-delete fa-regular fa-x';

  heartIcon.addEventListener('click', handleLikeButtonClick);
  deleteIcon.addEventListener('click', handleDeleteButtonClick);

  newCommentUser.innerText = 'kor-sams-dev';
  newCommentInfo.innerText = comment;
  newComment.appendChild(newCommentUser);
  newComment.appendChild(newCommentInfo);
  newComment.appendChild(heartIcon);
  newComment.appendChild(deleteIcon);

  feedCommentList.appendChild(newComment);
};

for (let i = 0; i < feedNewComment.length; i++) {
  feedNewComment[i].addEventListener('submit', (ev) => {
    ev.preventDefault();
    handleCommentInputAdd(ev, feedCommentList[i]);
  });

  feedCommentInput[i].addEventListener('keyup', (ev) => {
    if (ev.target.value) {
      feedCommentButton[i].disabled = false;
    } else {
      feedCommentButton[i].disabled = true;
    }
  });
}

for (let i = 0; i < feedLikeButton.length; i++) {
  feedLikeButton[i].addEventListener('click', handleLikeButtonClick);
}

for (let i = 0; i < feedCommentLikeButton.length; i++) {
  feedCommentLikeButton[i].addEventListener('click', handleLikeButtonClick);
}

for (let i = 0; i < feedCommentDeleteButton.length; i++) {
  feedCommentDeleteButton[i].addEventListener('click', handleDeleteButtonClick);
}
