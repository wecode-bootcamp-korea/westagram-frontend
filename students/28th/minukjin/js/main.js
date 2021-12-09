const replyInput = document.querySelector('#reply-input');
const replyBtn = document.querySelector('#reply-button');
const replyList = document.querySelector('.feed-replyList');
const replyForm = document.querySelector('.feed-reply-form');

const replyBtnActive = () => {
  return replyInput.value ? replyBtn.style.color = 'blue' : replyBtn.style.color = 'rgb(197, 225, 251)';
}

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

replyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  replySubmit();
});

replyInput.addEventListener('keyup', replyBtnActive);