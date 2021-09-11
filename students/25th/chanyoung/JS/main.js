const commentBtn = document.querySelector('.feeds-form');
const commentHTML = document.querySelector('.feeds-main__comments ul');
const searchInput = document.querySelector('.header__search input');
const searchUserContainer = document.querySelector('.header__search__user-container');
const feedHeartBtn = document.querySelector('.feeds-main__icons--left .fa-heart');
const commentTime = document.querySelector('.feeds-main__comment-time');
const menuProfile = document.querySelector('.menu-profile');
const menuProfileBox = document.querySelector('.menu-profile-box');
let commentHearts = document.querySelectorAll('.feeds-main__comments__heart');
let commentDeleteBtn = document.querySelectorAll('.feeds-main__comments__delete');

const MY_NAME = 'JeungChanYoung';
const users = [
  {
    name: 'DUNA',
    img: 'images/duna2.jpg',
  },
  {
    name: 'duNNyaa',
    img: 'images/duna2.jpg',
  },
  {
    name: 'dunyong',
    img: 'images/duna2.jpg',
  },
  {
    name: 'dunaisgood',
    img: 'images/duna2.jpg',
  },
  {
    name: 'Dunaisdog',
    img: 'images/duna2.jpg',
  },
];
// 찾아온 유저 관리용 배열
let searchUsers = [];

const addComment = (e) => {
  event.preventDefault();
  const input = e.target[0];

  if (input.value) {
    let newComment = document.createElement('li');
    newComment.className = 'feeds-main__comments__content';
    newComment.innerHTML = `<div class="comment-wrapper"> 
    <span class="username">${MY_NAME}</span> ${e.target[0].value}
      <i class="fas fa-backspace feeds-main__comments__delete"></i>
    </div>
    <i class="fas fa-heart feeds-main__comments__heart" aria-hidden="true"></i>`;
    commentHTML.appendChild(newComment);

    // 댓글 작성 시간 추가
    addCommentTime();

    newComment.querySelector('.feeds-main__comments__heart').onclick = changeHeartColor;
    newComment.querySelector('.feeds-main__comments__delete').onclick = deleteComment;

    // 댓글 입력 창 초기화
    input.value = null;
  }
};

const addCommentTime = () => (commentTime.innerText = '1분 전');

const changeHeartColor = (e) => (e.target.style.color = e.target.style.color ? '' : 'red');

const deleteComment = (e) => {
  const target = e.path[2];
  target.remove();
};

// nav 검색창
const searchText = (e) => {
  const text = e.path[0].value;
  const searchIcon = e.path[1].childNodes[1];

  if (text)
    if (searchIcon.style.visibility !== 'hidden') searchIcon.style.visibility = 'hidden';
    else searchIcon.style.visibility = 'visible';

  matchUsername(text);
};

// 검색 값에 따라 유저 판별
const matchUsername = (text) => {
  if (text.match(new RegExp(`.{3,}`))) {
    if (!searchUsers.length) {
      for (user of users) {
        // 유저들의 이름 일치 여부 체크
        if (user.name.slice(0, text.length).toUpperCase() === text.slice(0, text.length).toUpperCase()) {
          // 찾은 유저의 컨테이너 생성
          let userContainer = document.createElement('div');
          userContainer.className = 'header__search__user-container__user';
          userContainer.innerHTML = `<img class="user-img" src="${user.img}" alt=""></img>
          <span class="username">${user.name}</span>`;
          searchUsers.push({ user: user, userContainer: userContainer });
          searchUserContainer.appendChild(userContainer);
        }
      }
    } else {
      let searchUserIdx = 0;
      for (searchUser of searchUsers) {
        // 유저들의 이름 일치 여부 체크
        if (searchUser.user.name.slice(0, text.length).toUpperCase() !== text.slice(0, text.length).toUpperCase()) searchUser.userContainer.style.display = 'none';
        else searchUser.userContainer.style.display = 'flex';
        searchUserIdx++;
      }
    }
  } else {
    // 찾은 유저들 삭제 및 배열 비우기
    searchUsers.forEach((e) => searchUserContainer.removeChild(e.userContainer));
    searchUsers.length = 0;
  }
};

// 프로필 메뉴 박스 생성
const createMenuProfileBox = (e) => (e.target.nextElementSibling.style.display = 'flex');

// 프포필 메뉴 박스 제거
const deleteMenuProfileBox = (e) => (e.target.style.display = 'none');

searchInput.addEventListener('input', searchText);
feedHeartBtn.addEventListener('click', changeHeartColor);
commentBtn.addEventListener('submit', addComment);
menuProfile.addEventListener('click', createMenuProfileBox);
menuProfileBox.addEventListener('mouseleave', deleteMenuProfileBox);
const addHeartBtnListener = () => commentHearts.forEach((e) => e.addEventListener('click', changeHeartColor));
const addDeleteBtnListener = () => commentDeleteBtn.forEach((e) => e.addEventListener('click', deleteComment));
addHeartBtnListener();
addDeleteBtnListener();
