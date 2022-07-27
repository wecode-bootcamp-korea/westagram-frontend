const comments = document.querySelector('.articleComments');
const inputComment = document.querySelector('.articleInputComment input');
const userId = 'chaedong';
const submitComment = document.querySelector('.articleInputComment button');

inputComment.addEventListener('keydown', addComment);
submitComment.addEventListener('click', addComment);

function addComment(e) {
  console.log(e.isComposing);
  if (e.isComposing || !(e.code === 'Enter' || e.code === 'NumpadEnter') || e.target.value === '') {
    return;
  }

  const comment = document.querySelector('.articleComment');
  const commentTime = document.querySelector('.articleCommentTime');
  const newComment = comment.cloneNode(true);
  console.log(newComment);
  newComment.children[0].children[0].innerHTML = userId;
  newComment.children[0].children[1].innerHTML = inputComment.value;
  comments.insertBefore(newComment, commentTime);
  inputComment.value = '';
}
