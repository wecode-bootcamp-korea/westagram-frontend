const commentForm = document.querySelector('.comment-form');
const commentInput = document.querySelector('.comment-input');
const likeBtn = document.querySelector('.article-data__icons-heart');

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
  const emptyHeart = 'http://127.0.0.1:5500/img/heart.png';
  const filledHeart = 'http://127.0.0.1:5500/img/liked-heart.png';
  if (e.target.src === emptyHeart) {
    e.target.src = filledHeart;
  } else e.target.src = emptyHeart;
};

const commentPrint = (commentObj) => {
  const ul = document.querySelector('.reaction__comments ul');
  const li = document.createElement('li');
  li.innerHTML = commentMaker(commentObj.comment);
  li.id = commentObj.id;
  ul.appendChild(li);

  const commentLikeBtn = document.createElement('img');
  commentLikeBtn.src = './img/heart.png';
  li.appendChild(commentLikeBtn);
  commentLikeBtn.addEventListener('click', likeColorHandler);

  const removeBtn = document.createElement('img');
  removeBtn.src = './img/more.png';
  li.appendChild(removeBtn);
  removeBtn.addEventListener('click', commentRemove);
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

const commentMaker = (comment) => {
  return `<div class="comments__commented">
            <p><span>test</span> ${comment}</p>
          </div>`;
};

const savedComment = localStorage.getItem(COMMENT);
if (savedComment !== null) {
  const parsedComment = JSON.parse(savedComment);
  comments = parsedComment;
  parsedComment.forEach(commentPrint);
}

likeBtn.addEventListener('click', likeColorHandler);
commentForm.addEventListener('submit', commentHandler);
