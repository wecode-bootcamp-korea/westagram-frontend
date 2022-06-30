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
  const leftContainer = document.createElement('div');
  const rightContainer = document.createElement('div');
  const userName = document.createElement('div');
  const userComment = document.createElement('span');
  const heartIcon = document.createElement('i');
  const deleteIcon = document.createElement('i');
  let value = commentInput.value;
  container.className = 'description-comment';
  leftContainer.className = 'comment-left';
  rightContainer.className = 'comment-right';
  userName.className = 'user-name';
  userComment.className = 'user-comment';
  userName.textContent = 'Yelihi';
  userComment.textContent = value;
  heartIcon.className = 'bx bx-heart';
  deleteIcon.className = 'bx bx-x-circle';
  leftContainer.appendChild(userName);
  leftContainer.appendChild(userComment);
  rightContainer.appendChild(heartIcon);
  rightContainer.appendChild(deleteIcon);
  container.appendChild(leftContainer);
  container.appendChild(rightContainer);
  decription.appendChild(container);
  commentInput.value = '';
  heartIcon.addEventListener('click', changeLike);
  deleteIcon.addEventListener('click', addDelete);
  commentBtn.disabled = true;
}

commentSubmit.addEventListener('keyup', (e) => {
  if(e.target.value){
    commentBtn.disabled = false;
  }
})

commentSubmit.addEventListener('submit' , createComment);

// 댓글 창 좋아요 및 삭제

//예시부분 댓글 좋아요 변화
function like(){
  const exem = document.querySelector('#exemple');
  if(exem.className === 'bx bx-heart'){
    exem.className = "bx bxs-heart";
    exem.style.color = 'red';
  }else if(exem.className === 'bx bxs-heart'){
    exem.className = "bx bx-heart";
    exem.style.color = 'rgba(0,0,0,0.5)';
  }
}

// 생성되는 댓글 좋아요 및 삭제
const changeLike = (e) => {
  if(e.target.className === 'bx bx-heart'){
    e.target.className='bx bxs-heart'
    e.target.style.color = "red";
  }else if(e.target.className === 'bx bxs-heart'){
    e.target.className='bx bx-heart'
    e.target.style.color = "rgba(0,0,0,0.5)";
  }
}

const addDelete = (e) => {
  const rightContainer = e.target.parentElement;
  const desContainer = rightContainer.parentElement;
  desContainer.remove();
}
