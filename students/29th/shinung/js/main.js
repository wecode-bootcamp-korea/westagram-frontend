'use strict';

const commentInput = document.querySelector('.add--input');
const addBtn = document.querySelector('.add--btn');
const ul = document.querySelector('.comments');

function onAdd() {
  const value = commentInput.value;

  if (value) {
    const li = document.createElement('li');
    li.setAttribute('class', 'comment');

    const div = document.createElement('div');

    const userId = document.createElement('p');
    userId.setAttribute('class', 'comment--user');
    userId.innerHTML = `JavaScript`;

    const text = document.createElement('p');
    text.setAttribute('class', 'comment--text');
    text.innerHTML = `${value}`;

    const img = document.createElement('img');
    img.setAttribute('src', './img/heart.png');

    div.appendChild(userId);
    div.appendChild(text);

    li.appendChild(div);
    li.appendChild(img);

    ul.appendChild(li);

    commentInput.value = '';
    // commentInput.focus();
  }
}

commentInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    onAdd();
  }
});

addBtn.addEventListener('click', () => {
  onAdd();
});

commentInput.addEventListener('keyup', () => {
  const id = commentInput.value;
  if (id) {
    addBtn.style.opacity = '1';
  } else {
    addBtn.style.opacity = '0.5';
  }
});
