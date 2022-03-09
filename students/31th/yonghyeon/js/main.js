'use strict';

const input = document.querySelector('.commentInput');
const form = document.querySelector('.commentForm');
const ul = document.querySelector('.footer__comment');
const likeBtn = document.querySelector('.likeBtn');
const profileBtn = document.querySelector('.profileBtn');
const profileModal = document.querySelector('.profileModal');
const searchBar = document.querySelector('.searchBar');
const searchModal = document.querySelector('.searchModal');
const searchUl = document.querySelector('.searchModal__ul');
let count = 0;

// 댓글 추가 기능 함수
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
  li.innerHTML = `<span class="id">Sunnyfterrain_ </span><span class="comment__value">${input.value}</span>
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

// 댓글 삭제 기능 함수
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

// 댓글 좋아요 기능 함수
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

// 검색창 value 값이 data의 리스트에 포함되어 있는지 검사하는 함수
const matchId = (value) => {
  const inputValue = document.querySelector('.searchBar').value.toUpperCase();
  return value.toUpperCase().includes(inputValue) === true;
};

// 검색창 리스트에 작성하는 기능 함수
const resultSearched = (data) => {
  const userList = document.createElement('li');
  userList.setAttribute('class', 'searchModal__li');
  userList.innerHTML = `<div class="searchLi__container">
                          <div class="search__result__img">
                            <img src=${data.pic} />
                         </div>
                          <div class="search__result__user">
                            <span>${data.id}</span>
                            <span>${data.name}</span>
                          </div>
                        </div>`;
  searchUl.appendChild(userList);
};

// user data 불러오기
const searchId = () => {
  fetch('../data/idData.json')
    .then((res) => res.json())
    .then((data) => {
      addSearchList(data);
    });
};

// ID 필터링 함수
const addSearchList = (data) => {
  if (searchBar.value) {
    searchUl.innerHTML = ``;
    const filterId = data.filter((item) => matchId(item.id));
    const filterName = data.filter((item) => matchId(item.name));
    if (filterId) {
      filterId.forEach((data) => resultSearched(data));
    }
    if (filterName) {
      filterName.forEach((data) => resultSearched(data));
    }
  }
};

// 검색창 클리어 함수
const clearSearchInput = () => {
  searchBar.value = '';
  searchUl.innerHTML = ``;
};

// 프로필 메뉴박스 생성 / 숨김 함수
const showProfile = (e) => {
  const key = e.target.dataset.btn;
  const list = e.target.dataset.list;
  if (!key && !list) {
    profileModal.classList.remove('hidden');
  }
  if (key) {
    profileModal.classList.toggle('hidden');
  } else if (list) {
    profileModal.classList.add('hidden');
  }
};
// profileBtn.addEventListener('click', (e) => {
//   profileModal.classList.toggle('hidden');
// });

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

// 검색창 클리어 이벤트
searchBar.addEventListener('focus', () => {
  searchModal.classList.add('hidden');
  clearSearchInput();
});
searchBar.addEventListener('focusout', () => {
  searchModal.classList.remove('hidden');
  clearSearchInput();
});

// 검색창 아이디 검색 이벤트
searchBar.addEventListener('keyup', (e) => {
  searchId();
  if (e.key === 'Backspace') {
    searchUl.innerHTML = ``;
  }
});

// 프로필 메뉴박스 생성 / 숨김 이벤트
window.addEventListener('click', (e) => {
  showProfile(e);
});
