const commentList = document.querySelector('.commentList');
const commentForm = document.querySelector('.commentInput');
const commentInput = commentForm.querySelector('input');
const commentBtn = document.querySelector('.commentBtn');

const COMMENT_KEY = 'comment';

let comments = [];

function saveCommetns() {
  localStorage.setItem(COMMENT_KEY, JSON.stringify(comments));
}

function deleteComment(e) {
  const li = e.target.parentElement.parentElement;
  li.remove();
  comments = comments.filter((comment) => comment.id !== parseInt(li.id));
  saveCommetns();
}

function paintComment(comment) {
  if (comment === '') {
    return;
  }

  const li = document.createElement('li');
  li.id = comment.id;

  const strong = document.createElement('strong');
  strong.innerText = 'nueahooy';
  strong.classList.add('commentUserId');

  const div = document.createElement('div');
  div.classList.add('commentText');

  const span = document.createElement('span');
  span.innerText = comment.text;

  const delBtn = document.createElement('button');
  delBtn.innerText = 'ⅹ';
  delBtn.addEventListener('click', deleteComment);

  div.appendChild(span);
  div.appendChild(delBtn);
  li.appendChild(strong);
  li.appendChild(div);
  commentList.appendChild(li);
}

function handleCommentSubmit(e) {
  e.preventDefault();
  const newComment = commentInput.value;
  const newCommentObj = {
    text: newComment,
    id: Date.now(),
  };
  commentInput.value = '';
  comments.push(newCommentObj);
  saveCommetns();
  paintComment(newCommentObj);
}

function onBtnActive(e) {
  if (e.target.value.length > 0) {
    commentBtn.disabled = false;
  } else {
    commentBtn.disabled = true;
  }
}

commentForm.addEventListener('submit', handleCommentSubmit);
commentInput.addEventListener('keyup', onBtnActive);

const savedComments = localStorage.getItem(COMMENT_KEY);

if (savedComments) {
  const parseComments = JSON.parse(savedComments);
  comments = parseComments;
  parseComments.forEach(paintComment);
}
