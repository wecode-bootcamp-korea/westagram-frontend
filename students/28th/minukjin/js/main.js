const replyInput = document.querySelector('#reply-input');
const replyBtn = document.querySelector('#reply-button');
const replyList = document.querySelector('.feed-reply');

function replyBtnActive() {
  console.log(replyInput.value);
  return replyInput.value ? replyBtn.style.color = 'blue' : replyBtn.style.color = 'rgb(197, 225, 251)';
}
function replySubmit() {
  replyList.innerHTML =`<p><span></span>${replyInput.value}</p>`;
}

replyInput.addEventListener('keyup', replyBtnActive);
replyBtn.addEventListener('submit', replySubmit);