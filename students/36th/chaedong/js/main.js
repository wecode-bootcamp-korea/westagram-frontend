// Comment
const comments = document.querySelector('.articleComments');
const inputComment = document.querySelector('.articleInputComment input');
const submitComment = document.querySelector('.articleInputComment button');
const userId = 'chaedong';

function addComment(e) {
  if (e.isComposing || !(e.code === 'Enter' || e.code === 'NumpadEnter') || e.target.value === '') {
    return;
  }
  const comment = document.querySelector('.articleComment');
  const commentTime = document.querySelector('.articleCommentTime');
  const newComment = comment.cloneNode(true);
  newComment.children[0].children[0].innerHTML = userId;
  newComment.children[0].children[1].innerHTML = inputComment.value;
  comments.insertBefore(newComment, commentTime);
  inputComment.value = '';
}

// Comment EventListener
inputComment.addEventListener('keydown', addComment);
submitComment.addEventListener('click', addComment);

// Like
const commentHeart = document.querySelectorAll('.articleComment i');

function handleClickLike(e) {
  e.target.classList.toggle('colorRed');
  e.target.classList.toggle('fa-regular');
  e.target.classList.toggle('fas');
}

// Like EventListener
commentHeart.forEach((heart) => {
  heart.addEventListener('click', handleClickLike);
});
