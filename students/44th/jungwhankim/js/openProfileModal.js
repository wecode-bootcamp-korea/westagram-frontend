const profileBtn = document.querySelector('.my');

const modal = document.querySelector('.modal');
const modalBox = document.querySelector('.modal_box');


profileBtn.addEventListener('click', () => {
  modal.classList.add('visible');
  profileBtn.classList.add('active');
})

window.addEventListener('click', (event) => {
  console.log(event.target);
  console.log(modal.classList.value);

  if ((event.target !== profileBtn) && (event.target !== modalBox)) {
    modal.classList.remove('visible');
    profileBtn.classList.remove('active');
  }
})

