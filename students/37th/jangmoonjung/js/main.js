const inputReply = document.querySelector('.feeds__reply__input');
const inputPost = document.querySelector('.feeds__reply__text');

inputReply.addEventListener('keyup', (e) => {
  if (inputReply.value.length > 0) {
    inputPost.classList.add('feeds__reply__active');
    inputPost.style.cursur = 'pointer';
  } else {
    inputPost.classList.remove('feeds__reply__active');
  }
});

function newReply() {
  const feedContent = document.querySelector('.newReply');

  const newReply = document.createElement('div');
  newReply.setAttribute('class', 'feeds__texts__reply');

  const newReplyLeft = document.createElement('div');
  newReplyLeft.setAttribute('class', 'feeds__texts__reply__left');

  let myAccount = document.querySelector('#userID');

  const myId = document.createElement('div');
  myId.innerHTML = myAccount.getAttribute('data-id');
  myId.setAttribute('class', 'id');

  const myReply = document.createElement('div');
  myReply.innerHTML = inputReply.value;
  myReply.setAttribute('class', 'feeds__text');

  const newReplyRight = document.createElement('div');
  newReplyRight.setAttribute('class', 'feeds__texts__reply__right');
  newReplyRight.innerHTML = `
    <i class="feeds__texts__heart fa-regular fa-heart"></i>
    <i class="feeds__texts__remove fa-regular fa-trash-can"></i>
    `;
  feedContent.appendChild(newReply);
  newReply.appendChild(newReplyLeft);
  newReplyLeft.appendChild(myId);
  newReplyLeft.appendChild(myReply);
  newReply.appendChild(newReplyRight);
}

inputPost.addEventListener('click', () => {
  newReply();
  inputReply.value = '';
});

inputReply.addEventListener('keypress', (e) => {
  if (e.code === 'Enter') {
    newReply();
    inputReply.value = '';
  }
});

const replyArea = document.querySelector('.newReply');
replyArea.addEventListener('click', (e) => {
  if (e.target.className === 'feeds__texts__heart fa-regular fa-heart') {
    e.target.classList.add('fa-solid');
  } else if (
    e.target.className === 'feeds__texts__remove fa-regular fa-trash-can'
  ) {
    e.target.parentNode.parentNode.remove();
  } else {
    e.target.classList.remove('fa-solid');
  }
});

const headerHeart = document.querySelector('.nav__icon__heart');
const feedsHeart = document.querySelector('.feeds__icon__heart');

colorHeart(headerHeart);
colorHeart(feedsHeart);

function colorHeart(element) {
  element.addEventListener('click', () => {
    element.classList.toggle('fa-solid');
  });
}

console.log(window.screen);
