const listCmt = document.getElementById('listCmt');
const inpCmt = document.getElementById('inpCmt');
const btnSubmitCmt = document.getElementById('btnSubmitCmt');

function createComment() {
  const liEl = document.createElement('li');
  liEl.innerHTML = `
    <span class="cmt-user">canon_mj</span>
    <span class="cmt-cont">${inpCmt.value}</span>
  `;
  listCmt.appendChild(liEl);
  inpCmt.value = '';
}

btnSubmitCmt.addEventListener('click', createComment);
inpCmt.addEventListener('keydown', (event) => {
  console.log(event);
  if (event.keyCode === 13) {
    createComment();
  }
});
