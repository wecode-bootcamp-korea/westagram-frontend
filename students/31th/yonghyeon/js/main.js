'use strict';

const input = document.querySelector('.commentInput');
const form = document.querySelector('.commentForm');
const ul = document.querySelector('.footer__comment');

function addComment(e) {
  e.preventDefault();
  const li = document.createElement('li');
  li.innerHTML = `<span>${input.value}</span>
  <div class="btnContainer">
    <div class="likeBtn"></div>
    <button class="delCommentBtn"></button>
  </div>`;
  ul.appendChild(li);
  input.value = '';
}

form.addEventListener('submit', addComment);

// function addItemHandler() {
//   const div = document.createElement('div');
//   const span = document.createElement('span');
//   const delBtn = document.createElement('button');
//   const li = document.querySelector('.item__row');
//   const divider = document.createElement('div');

//   div.setAttribute('class', 'item');
//   span.textContent = input.value;
//   span.setAttribute('class', 'item__name');

//   delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
//   delBtn.setAttribute('class', 'item__delete');

//   div.append(span);
//   div.append(delBtn);

//   divider.setAttribute('class', 'item__divider');
//   li.append(divider);

//   items.append(div);
//   input.value = '';
// }

// btn.addEventListener('click', addItemHandler);

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   onAdd();
// });

// items.addEventListener('click', (e) => {
//   const id = e.target.dataset.targetId;
//   //* 클릭하는 곳의 id 값을 저장

//   if (id) {
//     //* id가 존재 하는 곳만 클릭 이벤트를 적용
//     const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
//     console.log(toBeDeleted);
//     toBeDeleted.remove();
//     //* 클릭하는 곳의 id값과 같은 item__row를 삭제
//   }
// });

// function createItem(text) {
//   let id = Date.now();
//   //* id 값을 생성
//   const itemRow = document.createElement('li');
//   itemRow.classList.add('item__row');
//   itemRow.setAttribute('data-id', id);
//   //* id 값을 data-id 속성에 넣어줌

//   itemRow.innerHTML = `<div class="item">
//   <span class="item__name">${text}</span>
//   <button class="item__delete" data-target-id=${id}>삭제</button>
//   </div>
//   <div class="item__divider"></div>`;

// const item = document.createElement('div');
// item.classList.add('item');

// const span = document.createElement('span');
// span.classList.add('item__name');
// span.textContent = text;

// const deleteBtn = document.createElement('button');
// deleteBtn.classList.add('item__delete');
// deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

// deleteBtn.addEventListener('click', (e) => {
//   items.removeChild(itemRow);
// });

// const itemDivider = document.createElement('div');
// itemDivider.classList.add('item__divider');

// item.appendChild(span);
// item.appendChild(deleteBtn);

// itemRow.appendChild(item);
// itemRow.appendChild(itemDivider);

//   return itemRow;
// }

// function createItem(text) {
//   let id = Date.now();
//   //* id 값을 생성
//   const itemRow = document.createElement('li');
//   itemRow.classList.add('item__row');
//   itemRow.setAttribute('data-id', id);
//   //* id 값을 data-id 속성에 넣어줌

//   itemRow.innerHTML = `<div class="item">
//   <span class="item__name">${text}</span>
//   <button class="item__delete" data-target-id=${id}>삭제</button>
//   </div>
//   <div class="item__divider"></div>`;

// const item = document.createElement('div');
// item.classList.add('item');

// const span = document.createElement('span');
// span.classList.add('item__name');
// span.textContent = text;

// const deleteBtn = document.createElement('button');
// deleteBtn.classList.add('item__delete');
// deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

// deleteBtn.addEventListener('click', (e) => {
//   items.removeChild(itemRow);
// });

// const itemDivider = document.createElement('div');
// itemDivider.classList.add('item__divider');

// item.appendChild(span);
// item.appendChild(deleteBtn);

// itemRow.appendChild(item);
// itemRow.appendChild(itemDivider);

//   return itemRow;
// }
