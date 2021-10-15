const input = document.querySelector('.commentInput');
const ul = document.querySelector('.comments');
const posting = document.querySelector('.uploadButton');

const init = () => {
  posting.addEventListener('click', checkValue);
  input.addEventListener('keyup', checkInput);
}

init();

function checkInput(e) {
  const commentLength = input.value.length;
  const comment = input.value;
  if(commentLength > 0) {
    postOn();
    if(e.code === 'Enter') {
      createSpan(comment);
    }
  } else {
    postOff();
  }
}

function checkValue() {
  const textLength = input.value.length;
  const text = input.value
  if(textLength > 0) {
    createSpan(text);
  }
}

function postOn() {
  posting.style.opacity = 1;
  posting.style.cursor = 'pointer';
}

function postOff() {
  posting.style.opacity = 0.3;
  posting.style.cursor = 'default';
}

function createSpan(text) {
  const span = document.createElement('span');
  span.innerHTML = text;
  const heartIcon = document.createElement('i');
  heartIcon.className = 'far fa-heart commentHeart';
  createDiv(span, heartIcon);
}

function createDiv(span, heartIcon) {
  const div = document.createElement('div');
  div.className = 'commentFirst';
  div.appendChild(span);
  div.appendChild(heartIcon);
  const button = document.createElement('button');
  button.className = 'deleteButton'
  button.innerHTML = '삭제';
  createLi(div, button);
}


function createLi(div, button) {
  const li = document.createElement('li');
  li.className = 'comment';
  li.appendChild(div);
  li.appendChild(button);
  deleteComment(li);
  heartRed(li);
  ul.appendChild(li);
  postOff();
  input.value = '';
}

function deleteComment(li) {
  const button = li.querySelector('button');
  button.addEventListener('click', () => {
    const comment = button.closest('.comment');
    comment.remove();
  });
}

function heartRed(li) {
  const i = li.querySelector('i');
  i.addEventListener('click', () => {
    console.log('hello')
    i.style.color = 'red';
  })
}























