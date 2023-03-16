ulTag.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-regular')) {
    e.target.firstElementChild.classList.toggle('redHeart');
  } else if (e.target.classList.contains('fa-heart')) {
    e.target.classList.toggle('redHeart');
  }
});
