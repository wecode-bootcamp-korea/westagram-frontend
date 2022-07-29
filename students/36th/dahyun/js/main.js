const $commentForm = document.querySelector('.comment-form');
const $commentInput = document.querySelector('.comment-input');
const $commentList = document.querySelector('.feed-comments');

const createElem = () => {
  const inputValue = $commentInput.value;
  const template = inputValue => {
    return `
      <li class="comment">
        <span class="userId">Pulan</span>
        <span class="content">${inputValue}</span>
      </li>
    `;
  };
  $commentList.insertAdjacentHTML('beforeend', template(inputValue));
  $commentInput.value = '';
};

$commentForm.addEventListener('submit', e => {
  e.preventDefault();

  if (!$commentInput.value) return;
  createElem();
});
