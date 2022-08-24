const instaForm = document.querySelector('.lets-comment');
const commentUp = document.querySelector('#comments-up');

instaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const commentInput = document.querySelector('#comment-input');
  addComment(commentInput.value);
  commentInput.value = "";
})

const addComment = (comment) => {
  const newComment = document.createElement('li');
  newComment.append(`${comment}`);
  commentUp.append(newComment);
};

