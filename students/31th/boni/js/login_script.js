const emailForm = document.querySelector('#inpt-id');
const passwordForm = document.querySelector('#inpt-pw');
const loginButton = document.querySelector('#btn-login');

emailForm.addEventListener('keyup', loginListner);
passwordForm.addEventListener('keyup', loginListner);

function loginListner() {
    switch (!(emailForm.value && passwordForm.value)) {
        case true: loginButton.disabled = true; break;
        case false: loginButton.disabled = false; break;
    }
}


const cmtForm = document.querySelector('#inpt-cmt');
const cmtButton = document.querySelector('#btn-cmt');

cmtForm.addEventListener('keyup', cmtListner);

function cmtListner() {
  switch (!(emailForm.value)) {
      case true: cmtButton.disabled = true; break;
      case false: cmtButton.disabled = false; break;
  }
}