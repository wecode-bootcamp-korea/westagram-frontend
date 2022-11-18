const commentsInput = document.querySelector('.commentsInput');
const commentsBtn = document.querySelector('.commentsBtn');
const newComments = document.querySelector('.commentsList');
const newNickname = document.querySelector('.commentsNickname');

commentsBtn.addEventListener('click', createCommentsToClick);
document.addEventListener('keypress', createCommentsToKeypress);

function createCommentsToClick() {
  const createComments = document.createElement('li');
  createComments.innerHTML = `
  <div class='nickName'>
    <ul>
      <strong>wecode_hyeseon</strong>
      <span>${commentsInput.value}</span>
    </ul>
    <ul class='commentsBtns'>
      <img class='likeBtn' alt="like"
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
      <span class='deleteBtn'>x</span>
    </ul>
  </div>
  `;
  newComments.appendChild(createComments);

  createComments.style.fontSize = '12px';
  createComments.style.padding = '15px 20px 0 0';

  commentsInput.value = '';
}

function createCommentsToKeypress(e) {
  const createComments = document.createElement('li');
  if (e.keyCode == 13) {
    e.preventDefault();
    createComments.innerHTML = `
  <div class='nickName'>
    <ul>
      <strong>wecode_hyeseon</strong>
      <span>${commentsInput.value}</span>
    </ul>
    <ul class='commentsBtns'>
      <img class='likeBtn' alt="like"
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
      <span class='deleteBtn'>x</span>
    </ul>
  </div>
  `;
    newComments.appendChild(createComments);

    createComments.style.fontSize = '12px';
    createComments.style.padding = '5px 0';

    commentsInput.value = '';
  }
  return;
}
