const id = document.querySelector('.id');
const pw = document.querySelector('.password');
const button = document.querySelector('button');

function success() {
  window.location.href = "./main.html"
}

function onEnter(e) {
  if (e.code === 'Enter') {
    success()
  }
}

const changeButtonColor = function () {
  ((id.value.length > 1) && (pw.value.length > 4) && (id.value.includes('@'))) ? 
  (
    button.style.backgroundColor = 'blue',
    button.style.cursor = 'pointer',
    button.addEventListener('click', success),
    id.addEventListener('keyup', onEnter),
    pw.addEventListener('keyup', onEnter)
  ) : 
  (
    button.style.backgroundColor = '#BEE2FD'
  )
}

function init() {
  id.addEventListener('input', changeButtonColor);
  id.addEventListener('keyup', changeButtonColor);
  pw.addEventListener('keyup', changeButtonColor);
}

init()
