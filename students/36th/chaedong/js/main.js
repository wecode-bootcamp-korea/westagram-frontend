const comments = document.querySelector('.articleComments');
const inputComment = document.querySelector('.articleInputComment input');
const userId = 'chaedong';

inputComment.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    e.preventDefault();
    const comment = document.querySelector('.articleComment');
    const commentTime = document.querySelector('.articleCommentTime');
    const newComment = comment.cloneNode(true);
    newComment.children[0].innerHTML = userId;
    newComment.children[1].innerHTML = e.target.value;
    comments.insertBefore(newComment, commentTime);
  }
});
