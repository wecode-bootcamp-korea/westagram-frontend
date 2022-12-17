const listCmt = document.getElementById('listCmt');
const inpCmt = document.getElementById('inpCmt');
const btnSubmitCmt = document.getElementById('btnSubmitCmt');
const btnRemoveCmts = document.querySelectorAll('.btn-remove');

function createComment() {
  const liEl = document.createElement('li');
  liEl.innerHTML = `
    <span class="wrap-cmt">
      <span class="cmt-user">canon_mj</span>
      <span class="cmt-cont">${inpCmt.value}</span>
    </span>
    <span class="wrap-btn">
      <button id="btnRemoveCmt" class="btn-remove">
        <i class="fa fa-thin fa-xmark"></i>
      </button>
      <button class="btn-like">
        <i class="fa fa-regular fa-heart"></i>
      </button>
    </span>
  `;
  listCmt.appendChild(liEl);
  inpCmt.value = '';
  btnSubmitCmt.disabled = true;
}

btnSubmitCmt.addEventListener('click', createComment);
inpCmt.addEventListener('keyup', (e) => {
  e.target.value.length > 0
    ? (btnSubmitCmt.disabled = false)
    : (btnSubmitCmt.disabled = true);

  if (e.target.value.length > 0 && e.keyCode === 13) {
    createComment();
  }
});
