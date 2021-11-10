const userNickName = 'ria';
const comments = document.querySelector('.feedComments');
const commentInput = document.querySelector('#commentInput');
const addCommentBtn = document.querySelector('#addCommentBtn');
const search = document.querySelector('#search');
const searchInput = search.firstElementChild;
const searchText = search.lastElementChild;

function makeCommentInner(nickName, comment) {
  return `<p class="feedCommentText">
  <b class="commentProfile">${nickName}</b>
  <span>${comment}</span>
  </p>
  <i class="far fa-heart"></i>`;
}

function makeComment() {
  const newComment = document.createElement('div');
  newComment.className = 'feedComment';
  newComment.innerHTML = makeCommentInner(userNickName, commentInput.value);
  comments.append(newComment);
  commentInput.value = '';
}
commentInput.addEventListener('keyup', (e) => {
  // 클라스가 있는지 확인해줘야하나?
  if (!commentInput.value) {
    addCommentBtn.classList.add('mainBtn--disable');
    addCommentBtn.disabled = true;
    return;
  }
  addCommentBtn.classList.remove('mainBtn--disable');
  addCommentBtn.disabled = false;
  if (e.key === 'Enter') {
    makeComment();
  }
});
addCommentBtn.addEventListener('click', makeComment);

search.addEventListener('click', () => {
  searchInput.focus();
});
searchInput.addEventListener('blur', () => {
  if (!!searchInput.value) return;
  searchText.classList.remove('searchText--none');
});
searchInput.addEventListener('focus', () => {
  searchText.classList.add('searchText--none');
});
