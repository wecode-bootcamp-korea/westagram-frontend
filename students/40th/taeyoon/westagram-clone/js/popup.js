const popupBtn = document.querySelector('#profile');
const popupMenu = document.querySelector('.nav__popup');

function btnClick(e) {
  e.preventDefault();
  popupMenu.classList.toggle('active');
}

function checkActive(e) {
  const isActive = popupMenu.classList.contains('active');
  if (isActive) {
    checkClick(e);
  } else {
    return;
  }
}

function checkClick(e) {

  const tf = e.target.classList.contains('speech-box'||'fa-user')
  console.log(tf)

  if (!(e.target != (popupMenu && popupBtn))) {
    console.log(true);
  } else {
    popupMenu.classList.remove('active');
    console.log(false)
  }
}

popupBtn.addEventListener('click', btnClick);
window.addEventListener('click', checkActive);

// test
window.addEventListener('click', (e)=>{
  console.log(e.target)
  console.log('');
  // console.log(popupMenu)
})