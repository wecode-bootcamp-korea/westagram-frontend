const profileIcon = document.querySelector('#icon-mypage');
const modal = document.querySelector('.modal');
const modalBg = document.querySelector('.modal-bg');

profileIcon.addEventListener('click', () => {
  modal.classList.toggle('hidden');
  modalBg.style.display = 'block'
});

modalBg.addEventListener('click', () => {
  modal.classList.toggle('hidden');
  modalBg.style.display = 'none';
})