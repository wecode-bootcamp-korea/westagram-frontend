const commendInput = document.querySelector('.leaveComment').firstElementChild;
const ulTag = document.querySelector('ul');

function addComments(e) {
  const commendValue = commendInput.value;
  if (e.keyCode === 13) {
    const liTag = document.createElement('li');
    liTag.textContent = commendValue;
    ulTag.append(liTag);
    e.preventDefault();
  }
}

commendInput.addEventListener('keydown', addComments);
