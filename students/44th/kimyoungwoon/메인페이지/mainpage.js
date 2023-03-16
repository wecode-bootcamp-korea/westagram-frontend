const commentInput = document.querySelector('.leaveComment').firstElementChild;
const commentBtn = document.querySelector('.leaveComment').lastElementChild;
const ulTag = document.querySelector('ul');

function enterAddComments(e) {
  if (e.keyCode === 13) {
    const liTag = document.createElement('li');
    liTag.innerHTML = `<div><b>youngWoon</b> ${commentInput.value} </div>`;
    liTag.innerHTML += `<i id="like" class="fa-regular fa-heart">
    <i class="fa-solid fa-heart"></i>
  </i>`;
    liTag.innerHTML += '<p class="delete">x</p>';
    ulTag.append(liTag);
    ulTag.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete')) {
        e.target.parentNode.remove();
      }
    });
    commentInput.value = '';
  }
}

function clickAddComments(e) {
  const liTag = document.createElement('li');
  liTag.innerHTML = `<div><b>youngWoon</b> ${commentInput.value} </div>`;
  liTag.innerHTML += `<i id="like" class="fa-regular fa-heart">
  <i class="fa-solid fa-heart"></i>
</i>`;
  liTag.innerHTML += '<p class="delete">x</p>';
  ulTag.append(liTag);
  commentInput.value = '';
  commentInput.focus();
}

commentInput.addEventListener('keydown', enterAddComments);
commentBtn.addEventListener('click', clickAddComments);
