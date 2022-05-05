const input = document.querySelector('.comment-box');
const postBtn = document.querySelector('.comment-btn');
const commentHere = document.querySelector('.comment-place');

const onAdd = () => {
  const text = input.value;

  if (input.value === '') {
      input.focus();
      return;
  }
  
  const cmt = document.createElement('p');
  cmt.innerHTML = text;

  const like = document.createElement('button');
  like.setAttribute('class', 'cmt-btn');
  like.innerHTML = '<img src="img/like.png">';
//   like.addEventListener('click', () => {
//     like.innerHTML = '<img src="img/liked.png">'
//   });
  like.addEventListener('click', firstClick);
  
  function firstClick() {
      like.innerHTML = '<img src="img/liked.png">'
      this.removeEventListener('click', firstClick);
      like.onclick = secondClick;
  }
  function secondClick() {
      like.innerHTML = '<img src="img/like.png">';
      like.addEventListener('click', firstClick);
  }

  const del = document.createElement('button');
  del.setAttribute('class', 'cmt-btn');
  del.innerHTML = '<img src="img/delete.png">';
  del.addEventListener('click', () => {
    commentHere.removeChild(cmt);
    commentHere.removeChild(like);
    commentHere.removeChild(del);
  })

  commentHere.appendChild(cmt);
  commentHere.appendChild(like);
  commentHere.appendChild(del);
  input.value = '';
  input.focus();
};

postBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') onAdd();
  return;
});