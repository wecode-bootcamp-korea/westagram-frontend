'use strict';

const commentInput = document.querySelector('.add--input');
const addBtn = document.querySelector('.add--btn');
const ul = document.querySelector('.comments');

function onAdd() {
  const value = commentInput.value;

  if (value) {
    const li = document.createElement('li');
    li.setAttribute('class', 'comment');
    li.innerHTML = `
      <li class="comment">
        <div>
          <p class="comment--user">xeexulee</p>
          <p class="comment--text">${value}</p>
        </div>
        <img src="./img/heart.png" alt="like" />
      </li>
    `;

    ul.appendChild(li);

    commentInput.value = '';
    commentInput.blur();
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
