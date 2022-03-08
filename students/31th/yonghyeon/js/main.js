'use strict';

const input = document.querySelector('.commentInput');
const form = document.querySelector('.commentForm');
const ul = document.querySelector('.footer__comment');
const likeBtn = document.querySelector('.likeBtn');
let count = 0;

// 댓글 추가 기능
const addComment = (e) => {
  count += 1;
  const blank = /^\s+|\s+$/g;
  if (!input.value) {
    return;
  }

  if (input.value.replace(blank, '') === '') {
    return;
  }

  const dataId = Date.now();
  const li = document.createElement('li');
  li.setAttribute('data-id', dataId);
  li.setAttribute('class', 'commentLi');
  li.innerHTML = `<span>${input.value}</span>
                  <div class="btnContainer">
                  <div class="likeBtn notLike" data-target-key=${count}></div>
                  <button class="delCommentBtn" data-target-id=${dataId}></button>
                  </div>`;
  input.value = '';
  ul.appendChild(li);
  li.scrollIntoView({ block: 'center' });

  if (ul.offsetHeight >= 140) {
    ul.classList.add('overflow');
  }

  // appendChild 로 만듦

  // const span = document.createElement('span');
  // span.textContent = input.value;

  // const div = document.createElement('div');
  // div.setAttribute('class', 'btnContainer');
  // const likeDiv = document.createElement('div');
  // likeDiv.setAttribute('class', 'likeBtn');
  // const btn = document.createElement('button');
  // btn.setAttribute('class', 'delCommentBtn');
  // btn.setAttribute('data-target-id', dataId);
  // div.appendChild(likeDiv);
  // div.appendChild(btn);

  // li.appendChild(span);
  // li.appendChild(div);
};

// 댓글 삭제 기능
const delComment = (e) => {
  const targetId = e.target.dataset.targetId;
  const liId = document.querySelector(`.commentLi[data-id="${targetId}"]`);
  if (targetId) {
    liId.remove();
  }
  if (ul.offsetHeight <= 140) {
    ul.classList.remove('overflow');
  }
  if (count > 0) {
    count -= 1;
  }
};

// 댓글 좋아요 기능
const addLike = (e) => {
  const targetKey = e.target.dataset.targetKey;
  const conBtn = document.querySelector(`.likeBtn[data-target-key="${targetKey}"]`);
  if (targetKey) {
    if (conBtn.classList.contains('like')) {
      conBtn.classList.remove('like');
      conBtn.classList.add('notLike');
    } else if (conBtn.classList.contains('notLike')) {
      conBtn.classList.remove('notLike');
      conBtn.classList.add('like');
    }
  }
};

// 댓글 추가기능 이벤트
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addComment();
});

// 댓글 삭제기능 이벤트
ul.addEventListener('click', (e) => {
  delComment(e);
  addLike(e);
});
