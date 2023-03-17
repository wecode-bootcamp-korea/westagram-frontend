const profileIcon = document.querySelector('.profile-img');
const menuBox = document.querySelector('.menu-box');
const modal = document.querySelector('.bg');

function openCloseMenuBox() {
  menuBox.classList.toggle('none');
  modal.classList.add('show');
}

function closeMenuBox(e) {
  menuBox.classList.add('none');
  modal.classList.remove('show');
}

profileIcon.addEventListener('click', openCloseMenuBox);
modal.addEventListener('click', closeMenuBox);
