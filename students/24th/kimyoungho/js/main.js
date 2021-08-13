const postingButton = document.querySelector('.postingButton');
const comment = document.querySelector('.comment');
const writeComment = document.querySelector('.writeComment');
const commentHeart = document.getElementsByClassName('commentHeart');

postingButton.addEventListener('click', (event) => {
  event.preventDefault();
  addComment();
});

writeComment.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    addComment();
  }
});

writeComment.addEventListener('keyup', () => {
  if (writeComment.value.length >= 1) {
    postingButton.style.color = '#3797F0';
    postingButton.style.cursor = 'pointer';
  }
});

function addComment() {
  if (writeComment.value.length >= 1) {
    const makeTag = document.createElement('div');
    comment.appendChild(makeTag);
    makeTag.innerHTML = `<span class="boldFont">bbangho</span> ${writeComment.value} <img class="commentHeart" src="./img/garbage.png"> <img class="commentHeart" src="./img/heart.png">`;
  }
  writeComment.value = '';
  postingButton.style.color = '#D4E9FD';
}

comment.addEventListener('click', (event) => {
  const src = event.target.getAttribute('src');
  const heart = './img/heart.png';
  const redHeart = './img/redHeart.png';
  const deleteIcon = './img/garbage.png';

  if (src === heart) {
    event.target.src = redHeart;
  } else if (src === redHeart) {
    event.target.src = heart;
  }

  if (src === deleteIcon) {
    event.target.parentNode.remove();
  }
});
