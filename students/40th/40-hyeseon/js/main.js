const commentsInput = document.querySelector('#comments');
const commentsBtn = document.querySelector('#commentsBtn');
const newComments = document.querySelector('#commentsList');

// click
commentsBtn.addEventListener('click', createCommentsToClick);

function createCommentsToClick() {
  const createComments = document.createElement('li');
  createComments.innerText = commentsInput.value;
  newComments.appendChild(createComments);

  createComments.style.fontSize = '12px';
  createComments.style.padding = '15px';
}

// keypress = enter
commentsBtn.addEventListener('keypress', createCommentsToKeypress);

function createCommentsToKeypress(e) {
  if (e.keyCode == 'Enter') {
    e.preventDefault();
    const createComments = document.createElement('li');
    createComments.innerText = commentsInput.value;
    newComments.appendChild(createComments);

    createComments.style.fontSize = '12px';
    createComments.style.padding = '15px';
  }
  return;
}
