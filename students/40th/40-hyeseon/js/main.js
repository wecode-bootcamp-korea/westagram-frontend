const commentsInput = document.querySelector('#commentsInput');
const commentsBtn = document.querySelector('#commentsBtn');
const newComments = document.querySelector('#commentsList');

commentsBtn.addEventListener('click', createCommentsToClick);
document.addEventListener('keypress', createCommentsToKeypress);

function createCommentsToClick() {
  const createComments = document.createElement('li');
  createComments.innerText = commentsInput.value;
  newComments.appendChild(createComments);

  createComments.style.fontSize = '12px';
  createComments.style.padding = '15px';
}

// 아래로 댓글 달리는 게 아니라 계속 갱신됨
function createCommentsToKeypress(e) {
  if (e.keyCode == 13) {
    const createComments = document.createElement('li');
    e.preventDefault();
    createComments.innerText = commentsInput.value;
    newComments.appendChild(createComments);

    createComments.style.fontSize = '12px';
    createComments.style.padding = '15px';
  }
  return;
}
// function createCommentsToClick() {
//   const createComments = document.createElement('li');
//   createComments.innerText = commentsInput.value;
//   newComments.appendChild(createComments);

//   createComments.style.fontSize = '12px';
//   createComments.style.padding = '15px';
// }

// // 아래로 댓글 달리는 게 아니라 계속 갱신됨
// function createCommentsToKeypress(e) {
//   if (e.keyCode == 13) {
//     const createComments = document.createElement('li');
//     e.preventDefault();
//     createComments.innerText = commentsInput.value;
//     newComments.appendChild(createComments);

//     createComments.style.fontSize = '12px';
//     createComments.style.padding = '15px';
//   }
//   return;
// }
