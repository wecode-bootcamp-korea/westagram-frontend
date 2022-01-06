'use strict';

const commentInput = document.querySelector('.add--input');
const addBtn = document.querySelector('.add--btn');
const ul = document.querySelector('.comments');

const li = document.querySelector('.comment');
const deleteBtn = document.querySelector('.comment--delete');
const likeBtn = document.querySelector('.like');
const likedBtn = document.querySelector('.liked');

let id = 0;
function onAdd() {
  const value = commentInput.value;

  if (value) {
    const li = document.createElement('li');
    li.setAttribute('class', 'comment');
    li.innerHTML = `
        <div data-id=${id}>
          <p class="comment--user">xeexulee</p>
          <p class="comment--text">${value}</p>
        </div>
        <p class="comment--delete">삭제</p>
        <i class="far fa-heart like"></i>
        <i class="fas fa-heart liked none"></i>
    `;
    id++;
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

// li.addEventListener('mouseenter', () => {
//   deleteBtn.style.display = 'block';
// });

// li.addEventListener('mouseleave', () => {
//   const display = deleteBtn.style.display;
//   if (display === 'block') {
//     deleteBtn.style.display = 'none';
//   }
// });

// likeBtn.addEventListener('click', () => {
//   likeBtn.style.display = 'none';
//   likedBtn.style.display = 'block';
// });

// likedBtn.addEventListener('click', () => {
//   likedBtn.style.display = 'none';
//   likeBtn.style.display = 'block';
// });

// deleteBtn.addEventListener('click', () => {
//   ul.removeChild(li);
// });
