ulTag.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentNode.remove();
  }
});
