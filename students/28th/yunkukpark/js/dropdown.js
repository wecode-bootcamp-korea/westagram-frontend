const userActionGroup = document.querySelector('.user-action-group');
const myMenuTrigger = userActionGroup.querySelector('.dropdown-button');
const myMenuContent = userActionGroup.querySelector('.my-menu-content');

const handleMyMenu = (event) => {
  myMenuContent.classList.toggle('is-active');
  myMenuTrigger.classList.toggle('is-active');
};

const exitMyMenu = (event) => {
  const isDropDown = event.target.matches('.dropdown-button');

  if (!isDropDown) {
    const isActive = myMenuContent.classList.contains('is-active');
    if (!isActive) return;
    if (isActive) {
      myMenuContent.classList.remove('is-active');
      myMenuTrigger.classList.remove('is-active');
    }
  }
};

const init = () => {
  window.addEventListener('click', exitMyMenu);
  myMenuTrigger.addEventListener('click', handleMyMenu);
};

init();
