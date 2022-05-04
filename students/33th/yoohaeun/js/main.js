const commentList = document.querySelector('#commentList');
const commentForm = document.querySelector('.commentInput');
const commentInput = commentForm.querySelector('input');
const commentBtn = document.querySelector('commentBtn');

function paintComment(comment) {
  if (comment === '') {
    return;
  }
  const li = document.createElement('li');
  const strong = document.createElement('strong');
  strong.innerText = 'nueahooy';
  strong.classList.add('commentUserId');

  const span = document.createElement('span');
  span.innerText = comment;
  const button = document.createElement('button');
  button.innerHTML = '<i class="fa-solid fa-trash"></i>';

  li.appendChild(strong);
  li.appendChild(span);
  // li.appendChild(button);
  commentList.appendChild(li);
}

function handleCommentSubmit(e) {
  e.preventDefault();
  const comment = commentInput.value;
  commentInput.value = '';
  paintComment(comment);
}

function onBtnActive(e) {
  console.log(e.target.value);
}

commentForm.addEventListener('submit', handleCommentSubmit);
commentInput.addEventListener('keyup', onBtnActive);
