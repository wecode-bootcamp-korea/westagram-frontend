const commentForm = document.querySelector('.comment-form');
const commentInput = document.querySelector('.comment-input');
const likeBtn = document.querySelector(
  '.article-data__icons-heart.material-icons'
);
let COMMENT = 'comment';
let comments = [];

const commentSave = () => {
  localStorage.setItem(COMMENT, JSON.stringify(comments));
};

const commentRemove = (e) => {
  const li = e.target.parentElement;
  comments = comments.filter((comment) => comment.id !== parseInt(li.id));
  li.remove();
  commentSave();
};

const likeColorHandler = (e) => {
  const emptyHeart = 'favorite_border';
  const filledHeart = 'favorite';

  if (e.target.innerText === emptyHeart) {
    e.target.innerText = filledHeart;
    e.target.classList.add('fill');
  } else {
    e.target.innerText = emptyHeart;
    e.target.classList.remove('fill');
  }
};

const commentPrint = (commentObj) => {
  const ul = document.querySelector('.reaction__comments ul');
  const li = document.createElement('li');
  li.innerHTML = commentMaker(commentObj.comment);
  li.id = commentObj.id;
  ul.appendChild(li);

  const commentLikeBtn = document.createElement('span');
  commentLikeBtn.innerHTML = 'favorite_border';
  commentLikeBtn.setAttribute(
    'class',
    'article-data__icons-heart material-icons'
  );
  li.appendChild(commentLikeBtn);
  commentLikeBtn.addEventListener('click', likeColorHandler);

  const removeBtn = document.createElement('img');
  removeBtn.src = './img/more.png';
  li.appendChild(removeBtn);
  removeBtn.addEventListener('click', commentRemove);
};

const commentMaker = (comment) => {
  return `<div class="comments__commented">
            <p><span>test</span> ${comment}</p>
          </div>`;
};

const commentHandler = (e) => {
  e.preventDefault();
  if (commentInput.value === '') return;
  const comment = commentInput.value;

  commentInput.value = '';
  commentInput.focus();
  const commentObj = {
    comment,
    id: Date.now(),
  };
  comments.push(commentObj);
  commentPrint(commentObj);
  commentSave();
};

const commentBtnHandler = () => {
  const commentBtn = document.querySelector('.comment-btn');
  if (commentInput.value !== '') {
    commentBtn.classList.add('active');
  } else {
    commentBtn.classList.remove('active');
  }
};

const savedComment = localStorage.getItem(COMMENT);
if (savedComment !== null) {
  const parsedComment = JSON.parse(savedComment);
  comments = parsedComment;
  parsedComment.forEach(commentPrint);
}

likeBtn.addEventListener('click', likeColorHandler);
commentForm.addEventListener('submit', commentHandler);
commentForm.addEventListener('keyup', commentBtnHandler);
