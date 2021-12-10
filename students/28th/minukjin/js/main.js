const replyInput = document.querySelector('#reply-input');
const replyBtn = document.querySelector('#reply-button');
const replyList = document.querySelector('.feed-replyList');
const replyForm = document.querySelector('.feed-reply-form');
const feedHeart = document.querySelector('.feed-heart');
const replys = document.querySelectorAll('.fa-times');

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

const init = () => {
  replyInput.addEventListener('keyup', replyBtnActive);
  feedHeart.addEventListener('click', feedHeartToggle);
  replyList.addEventListener('click', replyHeartToggle);
  replyList.addEventListener('dblclick', replyRemove);
  replyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    replySubmit();
  });
};

init();
