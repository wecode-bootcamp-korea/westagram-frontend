const commentBtn = document.querySelector('.article-bottom-bottom-comment-btn');
const commentBox = document.querySelector('.article-bottom-bottom-comment');
const form = document.querySelector('form');
// const commentLo = document.querySelector('.article-bottom-middle-comment-text')[0];
// commnetLo = commentLocation 댓글 들어갈 경로//

// 버튼 on/off
// commentBox.addEventListener('keyUp', (evernt) => {
//   if (commentBox.length > 0) {
//     commentBtn.disabled = false;
//     commentBtn.style.backgroundColor = 'blue';
//   }
// });

const add = (e) => {
  e.preventDefault();
  const commentLo = document.querySelector('.article-bottom-middle-comment-text');
  const comments = document.createElement('div');
  const mainText = document.createElement('span');
  const commentImg = document.createElement('img');

  // comments.classList.add('.article-bottom-middle-comment-text-commentLo');
  // mainText.classList.add('.article-bottom-middle-comment-text-commentLoBox')
  // mainIcon.classList.add('clickHeart');
  comments.classList.add('main-icon-like-text-write_commentbox');
  mainText.classList.add('main-icon-like-text-write-subtext');
  mainIcon.classList.add('smHeart_img');

  commentImg.setAttribute('src', 'img/heart.png');

  mainText.innerText = commentBox.value;

  comments.appendChild(mainText);
  comments.appendChild(commentImg);

  commentLo.appendChild(comments);

  e.preventDefault();
};

commentBtn.addEventListener('click', (e) => {
  e.preventDefault();
  add(e);
  commentBox.value = '';
});

// commentBtn.addEventListener('click', (e) => {
//   if (event.code === 'Enter') {
//     e.preventDefault();
//     add(e);
//     commentBox.value = '';
//   }
// });

// ---댓글달기

// 댓글 옆의 하트는  Element.classList.toggle 사용하기
