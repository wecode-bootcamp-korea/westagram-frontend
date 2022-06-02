const feedCommentInput = document.querySelector('.comment-input');
const feedCommentList = document.querySelector('.feed-comments');

const handleCommentInputAdd = (ev) => {
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

  newCommentUser.innerText = 'kor-sams-dev';
  newCommentInfo.innerText = comment;
  newComment.appendChild(newCommentUser);
  newComment.appendChild(newCommentInfo);
  newComment.appendChild(heartIcon);
  newComment.appendChild(deleteIcon);

  feedCommentList.appendChild(newComment);
};

feedCommentInput.addEventListener('keypress', handleCommentInputAdd);
