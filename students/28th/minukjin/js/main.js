const replyInput = document.querySelector('#reply-input');
const replyBtn = document.querySelector('#reply-button');
const replyList = document.querySelector('.feed-replys');
const replyLike = document.querySelector('.fa-heart');
const replyForm = document.querySelector('.feed-reply-form');

function replyBtnActive() {
  // console.log(replyInput.value);
  return replyInput.value ? replyBtn.style.color = 'blue' : replyBtn.style.color = 'rgb(197, 225, 251)';
}
// function replySubmit() {
//   const inputValue = replyInput.value;
//   const replyAddTag = document.createElement('p')
//   const replyAddValue = document.createTextNode(inputValue);
//   replyAddTag.appendChild(replyAddValue);
//   replyList.appendChild(replyAddTag);
// }

const replySubmit = () => {
  const replyAddTag = document.createElement('li');
  replyAddTag.className = 'feed-reply';
  replyAddTag.innerHTML = `
    <div>
      <span>user</span>
      <p>${replyInput.value}</p>
      <i class="far fa-heart"></i>
      </div>
    <span class="feed-reply-time">1분전</span>
  `;
  replyList.appendChild(replyAddTag);
  replyInput.value = null;
}

//  const likeColorToggle = () => {
  
//  }

// replyInput.addEventListener('keyup', (e) => {
//   e.preventDefault();
//   if (e.keyCode === 13) replySubmit();
//   else replyBtnActive();
// });
replyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (e.keyCode === 13) replySubmit();
  else replyBtnActive();
})
replyBtn.addEventListener('click', replySubmit);

// replyLike.addEventListener('click', likeColorToggle);