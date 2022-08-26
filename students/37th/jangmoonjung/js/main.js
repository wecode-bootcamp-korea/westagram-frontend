'use strict';

const inputReply = document.querySelector('.feeds__reply__input');
const inputPost = document.querySelector('.feeds__reply__text');

function btnActive() {
  if (inputReply.value.length > 0) {
    inputPost.classList.add('feeds__reply__active');
    inputPost.style.cursur = 'pointer';
    return true;
  } else {
    inputPost.classList.remove('feeds__reply__active');
    return false;
  }
}

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
  const postActive = btnActive();
  if (postActive && e.code === 'Enter') {
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

const myImg = document.querySelector('.nav__profile__img');
const menuBox = document.querySelector('.nav__menubox');

const findBox = document.querySelector('.nav__findbox');
const findInput = document.querySelector('.nav__input');
const findIcon = document.querySelector('.nav__find__icon');

myImg.addEventListener('click', (e) => {
  menuBox.style.display = 'block';
});

window.addEventListener('click', (e) => {
  if (e.target !== myImg) {
    menuBox.style.display = 'none';
  }
  if (e.target !== findInput) {
    findBox.style.display = 'none';
    findInput.style.textAlign = 'center';
    findIcon.style.display = 'block';
  }
});

findInput.addEventListener('click', () => {
  findInput.style.textAlign = 'left';
  findIcon.style.display = 'none';
  findBox.style.display = 'block';
});

function filterId(array, inputValue) {
  let filtered = [];
  filtered = array.filter((value) => {
    return value.includes(inputValue);
  });
  return filtered;
}

const findProfile = {
  wecode_bootcamp: '>wedoce | 위코드',
  wecode_founder: '송은우(Eun Woo Song)',
  wecode_korea: '위코드 코리아',
  Wecode: '강남구 테헤란로 427, 서울',
  _yum_s: '사는게 즐거워',
  drink_eat_drink: '비오는날엔 막걸리',
  hyukyc: '치맥먹고싶다',
  jminkeek: '퇴근마렵다..',
  joaaaaaaahye: '월화수목금금금',
  rampart81: '헤이즐럿라떼 존맛탱',
  shawnjjoo: '프로 다이어터',
  aineworld: '웹툰그리는 개발자',
  canon_mj: '코딩하는 헬스트레이너',
};

function appendId(id, staus) {
  const findBoxContents = document.querySelector('.findbox__contents');
  const findBoxContent = document.createElement('div');
  findBoxContent.setAttribute('class', 'findbox__content');
  findBoxContent.innerHTML = `
    <div class="findbox__image">
      <img
        class="findbox__img"
        src="images/story__profile_01.jpg"
        alt="findbox__img"
      />
    </div>
    <div class="findbox__id">
      <div class="id">${id}</div>
      <div class="more__gray">${staus}</div>
    </div>
  `;
  findBoxContents.appendChild(findBoxContent);
}

findInput.addEventListener('input', () => {
  const findInputValue = findInput.value;
  const findId = Object.keys(findProfile);
  let filterIds = filterId(findId, findInputValue);
  filterIds.map((item) => {
    appendId(item, findProfile.item);
  });
});
