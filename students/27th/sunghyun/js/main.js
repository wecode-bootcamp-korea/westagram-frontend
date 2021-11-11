const userNickName = 'ria';
const comments = document.querySelector('.feedComments');
const commentInput = document.querySelector('#commentInput');
const addCommentBtn = document.querySelector('#addCommentBtn');
const searchWrapper = document.querySelector('#search');
const searchInput = searchWrapper.firstElementChild;
const searchTitle = searchWrapper.lastElementChild;
const feedComments = document.querySelector('.feedComments');
let commentId = 2;

const makeCommentInner = (nickName, comment) => {
  return `
  <p class="feedCommentText">
    <b class="commentProfile">${nickName}</b>
    <span>${comment}</span>
  </p>
  <div class="commentBtn">
    <i class="far fa-trash-alt" id="t_${commentId}"></i>
    <div class="hearts">
    <i class="far fa-heart"></i>
    <i class="fas fa-heart"></i>
    </div>
  </div>`;
};

const makeComment = () => {
  const newComment = document.createElement('div');
  newComment.className = 'feedComment';
  newComment.innerHTML = makeCommentInner(userNickName, commentInput.value);
  newComment.id = `comment_${commentId++}`;
  comments.append(newComment);
  commentInput.value = '';
};

// SEARCH
searchWrapper.addEventListener('click', () => {
  searchInput.focus();
});
searchInput.addEventListener('blur', () => {
  if (!!searchInput.value) return;
  searchTitle.classList.remove('searchText--none');
});
searchInput.addEventListener('focus', () => {
  searchTitle.classList.add('searchText--none');
});

// COMMENT INPUT
commentInput.addEventListener('keyup', (e) => {
  if (!commentInput.value) {
    addCommentBtn.classList.add('mainBtn--disable');
    addCommentBtn.disabled = true;
    return;
  }
  addCommentBtn.classList.remove('mainBtn--disable');
  addCommentBtn.disabled = false;
  if (e.key === 'Enter') {
    makeComment();
    return;
  }
});
addCommentBtn.addEventListener('click', makeComment);

// COMMENTS REACT
feedComments.addEventListener('click', (e) => {
  const target = e.target;
  const targetClass = target.className;
  const targetId = target.id;
  if (targetClass.includes('fa-trash-alt')) {
    const removeTarget = document.querySelector(
      `#comment_${targetId.split('_')[1]}`
    );
    removeTarget.remove();
    return;
  }
  targetClass.includes('fa-heart') && target.classList.toggle('showHeart');
});
