const comments = document.querySelector('.articleComments');
const inputComment = document.querySelector('.articleInputComment input');
const userId = 'chaedong';
const submitComment = document.querySelector('.articleInputComment button');

inputComment.addEventListener('keydown', (e) => {
  if (e.code === 'Enter' || e.code === 'NumpadEnter') {
    addComment(e);
  }
});
submitComment.addEventListener('click', (e) => addComment(e));

function addComment(e) {
  const comment = document.querySelector('.articleComment');
  const commentTime = document.querySelector('.articleCommentTime');
  const newComment = comment.cloneNode(true);
  newComment.children[0].innerHTML = userId;
  newComment.children[1].innerHTML = inputComment.value;
  comments.insertBefore(newComment, commentTime);
  inputComment.value = '';
}
