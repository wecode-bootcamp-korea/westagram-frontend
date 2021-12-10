const replyInput = document.querySelector('#reply-input');
const replyBtn = document.querySelector('#reply-button');
const replyList = document.querySelector('.feed-replyList');
const replyForm = document.querySelector('.feed-reply-form');
const feedHeart = document.querySelector('.feed-heart');

const replyBtnActive = () => {
  return replyInput.value ? replyBtn.style.color = 'blue' : replyBtn.style.color = 'rgb(197, 225, 251)';
};

const replySubmit = () => {
  const replyAddTag = document.createElement('li');
  replyAddTag.className = 'feed-reply';
  replyAddTag.innerHTML = `
    <div>
      <span>user</span>
      <p>${replyInput.value}</p>
      <i class="far fa-heart reply-heart"></i>
    </div>
    <span class="feed-reply-time">1분전</span>
  `;
  replyList.appendChild(replyAddTag);
  replyInput.value = null;
};

const feedHeartToggle = () => {
  feedHeart.classList.toggle('icon-heart');
};

const replyHeartToggle = (e) => {
  e.target.classList.toggle('icon-heart');
};

replyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  replySubmit();
});

replyInput.addEventListener('keyup', replyBtnActive);
feedHeart.addEventListener('click', feedHeartToggle);
replyList.addEventListener('click', replyHeartToggle);