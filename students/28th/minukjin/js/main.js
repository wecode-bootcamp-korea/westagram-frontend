const replyInput = document.querySelector('#reply-input');
const replyBtn = document.querySelector('#reply-button');
const replyList = document.querySelector('.feed-replyList');
const replyForm = document.querySelector('.feed-reply-form');
const feedHeart = document.querySelector('.feed-heart');
const replys = document.querySelectorAll('.fa-times');
const searchList = document.querySelector('.search-list');
const searchInput = document.querySelector('.search-input');

const dummyUsers = [
  {
    name: 'abc',
    text: 'qwertyuiop'
  },
  {
    name: 'bdaz',
    text: 'tasdaqyuiop'
  },
  {
    name: 'ooqo',
    text: 'oqkpckopkzqklla'
  },
  {
    name: 'bnvkdo',
    text: 'ooallolq'
  },
  {
    name: '민욱',
    text: 'ooallolq'
  },
  {
    name: 'akopoie',
    text: 'ooallolq'
  },
  {
    name: 'luco',
    text: 'ooallolq'
  },
  {
    name: 'ppzpo',
    text: 'ooallolq'
  },
];

const replyBtnActive = () => {
  replyInput.value ? replyBtn.style.color = 'blue' : replyBtn.style.color = 'rgb(197, 225, 251)';
};

const replySubmit = () => {
  const replyAddTag = document.createElement('li');
  replyAddTag.className = 'feed-reply';
  replyAddTag.innerHTML = `
    <div>
      <span>user</span>
      <p>${replyInput.value}</p>
      <i id="heart" class="far fa-heart reply-heart"></i>
    </div>
    <span class="feed-reply-time">1분전</span>
    <i id="remove" class="fas fa-times"></i>
  `;
  replyList.appendChild(replyAddTag);
  replyInput.value = null;
};

const feedHeartToggle = () => {
  feedHeart.classList.toggle('icon-heart');
};

const replyHeartToggle = (e) => {
  if (e.target.id === 'heart') e.target.classList.toggle('icon-heart');
};

const replyRemove = (e) => {
  if (e.target.id === 'remove') e.target.parentNode.remove();
};

const searchActive = () => {
  searchList.style.display = 'block';
}
const searchInActive = () => {
  searchList.style.display = 'none';
  searchList.innerHTML = '';
}

const searchResult = (searchUser) => {
  searchList.innerHTML = '';
  for (let i = 0; i < searchUser.length; i++) {
    const createSearch = document.createElement('li');
    const createSpan = document.createElement('span');
    const createUser = document.createTextNode(searchUser[i].name);
    // const createText = document.createTextNode(searchUser[i].text);
    
    createSearch.appendChild(createUser);
    createSearch.appendChild(createSpan);
    // createSpan.appendChild(createText);
    searchList.appendChild(createSearch);
  }
};

const search = (e) => {
  let searchUser = dummyUsers.filter((user) => user.name.includes(e.target.value));
  searchResult(searchUser);
};

const init = () => {
  replyInput.addEventListener('keyup', replyBtnActive);
  feedHeart.addEventListener('click', feedHeartToggle);
  replyList.addEventListener('click', replyHeartToggle);
  searchInput.addEventListener('focus', searchActive);
  searchInput.addEventListener('blur', searchInActive);
  searchInput.addEventListener('input', search);
  replyList.addEventListener('dblclick', replyRemove);
  replyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    replySubmit();
  });
};

init();
