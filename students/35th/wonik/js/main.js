// 검색창 포커스 됬을 경우

const $input = document.querySelector('#input');
const $search = document.querySelector('#search');
const $exit = document.querySelector('#exit');

$input.onfocus = () => {
  $search.style.display = 'none';
  $exit.style.display = 'block';
  $input.classList.add('focus');
};

$input.onblur = () => {
  $search.style.display = 'block';
  $exit.style.display = 'none';
  $input.classList.remove('focus');
};

// 댓글 창 달기

const commentInput = document.querySelector('.comment-input');
const commentBtn = document.querySelector('.comment-btn');

const commentSubmit = document.querySelector('.comment-submit');
const decription = document.querySelector('.main-article__description');

const createComment = (e) => {
  e.preventDefault();
  const container = document.createElement('div');
  const userName = document.createElement('div');
  const userComment = document.createElement('span');
  let value = commentInput.value;
  container.className = 'description-comment';
  userName.className = 'user-name';
  userComment.className = 'user-comment';
  userName.textContent = 'Yelihi';
  userComment.textContent = value;
  container.appendChild(userName);
  container.appendChild(userComment);
  decription.appendChild(container);
  commentInput.value = '';
}

commentSubmit.addEventListener('submit' , createComment);
commentSubmit.addEventListener('keyup', (e) => {
  if(e.target.value){
    commentBtn.disabled = false;
  }
})
