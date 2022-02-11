const commentInput = document.getElementsByClassName('comment-text')[0];
const commentBtn = document.getElementsByClassName('comment-add')[0];

console.log(commentBtn);

function submit() {
  const commentList = document.getElementsByClassName('feed-commentlist')[0];
  const newCommentBox = document.createElement('div');
  const commentName = document.createElement('span');
  const newComment = document.createElement('li');
  
  newCommentBox.classList.add('new-commentbox');

  commentList.appendChild(newCommentBox);
  newCommentBox.appendChild(commentName);
  newCommentBox.appendChild(newComment);

  commentName.innerText = "Bueong "
  newComment.innerText = document.getElementsByClassName('comment-text')[0].value;
}

function fadeIn() {
  const newComments = document.querySelectorAll('.new-commentbox');
  const lastNewComment = newComments[newComments.length - 1];

  console.log(newComments[newComments.length - 1].classList.add('comment-fadein'));
}

function scrollingDown() {
  const commentList = document.getElementsByClassName('feed-commentlist')[0];
  const newComments = document.getElementsByClassName('new-commentbox')[0];

  commentList.scrollTop = commentList.scrollHeight;
}

commentBtn.addEventListener('click', () => {
  submit();
  setTimeout(fadeIn, 1);
  scrollingDown()
  commentInput.value = '';
});

commentInput.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    submit();
    setTimeout(fadeIn, 1);
    scrollingDown()
    commentInput.value = '';
  }
});