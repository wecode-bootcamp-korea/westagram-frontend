let input = document.getElementById('commnetInput');
let inputBtn = document.getElementById('commnetButton');
let comments = document.getElementById('articleConnents');
let articleLikeButton = document.getElementById('articleHeart');

let toggleLikeButton = false;

//addEventListener
document.addEventListener('keyup', inputCheck);
document.addEventListener('submit', addComment);
articleLikeButton.addEventListener('click', likeButtonHandler);

//유효성 검사
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

//댓글 요소 추가
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

//버튼 활성화
function submitBtnActivate() {
  inputBtn.classList.add('active-btn');
  inputBtn.classList.remove('deactive-btn');
}

//버튼 비활성화
function submitBtnDeactivate() {
  inputBtn.classList.add('deactive-btn');
  inputBtn.classList.remove('active-btn');
}

//게시글 좋아요
function likeButtonHandler() {
  if (toggleLikeButton == false) {
    articleLikeButton.style.color = 'red';
    articleLikeButton.classList.remove('fa-regular');
    articleLikeButton.classList.add('fa-solid');
    toggleLikeButton = true;
  } else {
    articleLikeButton.style.color = 'black';
    articleLikeButton.classList.remove('fa-solid');
    articleLikeButton.classList.add('fa-regular');
    toggleLikeButton = false;
  }
}
