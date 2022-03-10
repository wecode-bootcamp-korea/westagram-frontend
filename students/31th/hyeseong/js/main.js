let input = document.getElementById('commnetInput');
let inputBtn = document.getElementById('commnetButton');
let comments = document.getElementById('articleConnents');
inputBtn.classList.add('deactivate-btn');

document.addEventListener('keyup', inputCheck);
document.addEventListener('submit', addComment);

function inputCheck() {
  let emptyCheck = input.value.replace(/(\s*)/g, '');
  let isEmpty = true;
  emptyCheck == '' ? (isEmpty = true) : (isEmpty = false);
  if (isEmpty === true) {
    inputBtn.disabled = true;
    submitBtnDeactivate();
  } else {
    inputBtn.disabled = false;
    submitBtnActivate();
  }
}

function addComment(e) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('comments');

  let newSpanUserName = document.createElement('span');
  let newSpanDesc = document.createElement('span');

  newSpanUserName.classList.add('user-name');
  newSpanDesc.classList.add('user-desc');

  let newUserName = document.createTextNode('moooo_nhs');
  let newDesc = document.createTextNode(input.value);

  newSpanUserName.appendChild(newUserName);
  newSpanDesc.appendChild(newDesc);

  newDiv.appendChild(newSpanUserName);
  newDiv.appendChild(newSpanDesc);
  comments.appendChild(newDiv);

  input.value = '';

  submitBtnDeactivate();
  e.preventDefault();
}

function submitBtnActivate() {
  inputBtn.classList.add('active-btn');
  inputBtn.classList.remove('deactive-btn');
}

function submitBtnDeactivate() {
  inputBtn.classList.add('deactive-btn');
  inputBtn.classList.remove('active-btn');
}
