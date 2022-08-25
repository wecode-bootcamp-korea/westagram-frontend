const inputReply = document.querySelector('.feeds__reply__input');
const inputPost = document.querySelector('.feeds__reply__text');

let index = 0;

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
  // changeHeart();
  deleteReply();
});

inputReply.addEventListener('keypress', (e) => {
  if (e.code === 'Enter') {
    newReply();
    inputReply.value = '';
    // changeHeart();
    deleteReply();
  }
});

const replyArea = document.querySelector('.newReply');
replyArea.addEventListener('click', (e) => {
  if (e.target.className === 'feeds__texts__heart fa-regular fa-heart') {
    e.target.classList.add('fa-solid');
  } else {
    e.target.classList.remove('fa-solid');
  }
});

// function changeHeart() {
//   const heart = document.querySelectorAll('.feeds__texts__heart');

//   let heartArr = [];
//   makeArr(heart, heartArr);

//   heartArr.forEach((element) => {
//     element.addEventListener('click', () => {
//       element.classList.toggle('fa-solid');
//     });
//   });
// }

function deleteReply() {
  const remove = document.querySelectorAll('.feeds__texts__remove');

  let removetArr = [];
  makeArr(remove, removetArr);

  removetArr.forEach((element) => {
    element.addEventListener('click', () => {
      element.parentNode.parentNode.remove();
    });
  });
}

function makeArr(array, newArray) {
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
}
