const feedCommentInput = document.querySelectorAll('.comment-input');
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
  if (ev.keyCode !== 13 || ev.target.value === '') return;
  const comment = ev.target.value;
  ev.target.value = '';

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

for (let i = 0; i < feedCommentInput.length; i++) {
  feedCommentInput[i].addEventListener('keypress', (ev) => {
    handleCommentInputAdd(ev, feedCommentList[i]);
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
