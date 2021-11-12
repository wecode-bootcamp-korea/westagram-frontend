const userNickName = 'ria';
const comments = document.querySelector('.feedComments');
const commentInput = document.querySelector('#commentInput');
const addCommentBtn = document.querySelector('#addCommentBtn');
const searchWrapper = document.querySelector('#search');
const searchInput = document.querySelector('#searchInput');
const searchTitle = document.querySelector('#searchText');
const searchUsersWrapper = document.querySelector('.searchUsersWrapper');
const feedComments = document.querySelector('.feedComments');
const usersInfo = [
  {
    id: 1,
    username: '짹짹',
    userInfo: '나의 잭',
    img: 'p4.jpeg',
  },
  {
    id: 2,
    username: 'hellolove',
    userInfo: '',
    img: 'search2.jpg',
  },
  {
    id: 3,
    username: 'nypl',
    userInfo: '',
    img: 'p1.jpeg',
  },
  {
    id: 4,
    username: 'hwnhwan12',
    userInfo: '겸손',
    img: 'p7.jpeg',
  },
  {
    id: 5,
    username: 'helloworld',
    userInfo: 'love love love',
    img: 'search1.jpg',
  },
  {
    id: 6,
    username: 'hellowecode',
    userInfo: '에러로부터 코드를 지키자!',
    img: 'post3.png',
  },
];

let commentId = 2;

const makeCommentInner = (nickName, comment) => {
  return `
  <p class="feedCommentText">
    <b class="commentProfile">${nickName}</b>
    <span>${comment}</span>
  </p>
  <div class="commentBtn">
    <i class="far fa-trash-alt" id="t_${commentId}"></i>
    <div class="hearts">
    <i class="far fa-heart"></i>
    <i class="fas fa-heart"></i>
    </div>
  </div>`;
};

const makeComment = () => {
  const newComment = document.createElement('div');
  newComment.className = 'feedComment';
  newComment.innerHTML = makeCommentInner(userNickName, commentInput.value);
  newComment.id = `comment_${commentId++}`;
  comments.append(newComment);
  commentInput.value = '';
};

// SEARCH
const showSearchedUsers = () => {
  const searchResults = document.querySelector('.searchResults');
  if (!searchInput.value) {
    searchResults.innerHTML =
      '<li class="searchResultEmpty">검색결과 없음</li>';
    return;
  }
  const filteredUsers = getUsers(searchInput.value, usersInfo);
  if (!filteredUsers.length) {
    searchResults.innerHTML =
      '<li class="searchResultEmpty">검색결과 없음</li>';
    return;
  }
  const dropdownInner = makeUsersDropdownInner(filteredUsers);
  searchResults.innerHTML = dropdownInner;
};

const makeUsersDropdownInner = (users) => {
  let dropdown = '';
  users.forEach((user, i) => {
    const { username, userInfo, img } = user;

    dropdown += `<li class="searchResult" id="search_${i + 1}">
    <img src="./src/${img}" alt="userprofile">
    <div class="searchResultInfo">
      <b>${username}</b>
      <span>${userInfo}</span>
    </div>
  </li>`;
  });
  return dropdown;
};

const getUsers = (username, usersInfo) => {
  return usersInfo.filter((user) => user.username.includes(username));
};

searchWrapper.addEventListener('click', () => {
  searchInput.focus();
});

searchInput.addEventListener('focus', () => {
  searchUsersWrapper.classList.add('searchUsersWrapper--visible');
  searchTitle.classList.add('searchText--none');
  showSearchedUsers();
});

searchInput.addEventListener('blur', () => {
  searchUsersWrapper.classList.remove('searchUsersWrapper--visible');
  if (!!searchInput.value) return;
  searchTitle.classList.remove('searchText--none');
});

searchInput.addEventListener('keyup', showSearchedUsers);

// COMMENT INPUT
commentInput.addEventListener('keyup', (e) => {
  if (!commentInput.value) {
    addCommentBtn.classList.add('mainBtn--disable');
    addCommentBtn.disabled = true;
    return;
  }
  addCommentBtn.classList.remove('mainBtn--disable');
  addCommentBtn.disabled = false;
  if (e.key === 'Enter') {
    makeComment();
    return;
  }
});
addCommentBtn.addEventListener('click', makeComment);

// COMMENTS REACT
feedComments.addEventListener('click', (e) => {
  const target = e.target;
  const targetClass = target.className;
  const targetId = target.id;
  if (targetClass.includes('fa-trash-alt')) {
    const removeTarget = document.querySelector(
      `#comment_${targetId.split('_')[1]}`
    );
    removeTarget.remove();
    return;
  }
  targetClass.includes('fa-heart') && target.classList.toggle('showHeart');
});
