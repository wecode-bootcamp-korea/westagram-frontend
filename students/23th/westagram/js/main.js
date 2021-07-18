`use strict`;
// viewport 해상도 -> style 바꿈
function screenInit(feedContainer, recommendedBlock, viewportWidth) {
  let mainContainerWidth = 0;

  viewportWidth > 999
    ? ((mainContainerWidth =
        feedContainer.clientWidth + recommendedBlock.clientWidth),
      (recommendedBlock.style.right = `${
        (viewportWidth - mainContainerWidth) / 2
      }px`),
      (feedContainer.style.marginRight = `361px`))
    : (recommendedBlock.style.visibility = `hidden`);
}

// 댓글 생성
function buttonColorChange(likeButton) {
  return () => {
    if (likeButton.classList.contains(`black`)) {
      likeButton.classList.add(`red`);
      likeButton.classList.remove(`black`);
    } else {
      likeButton.classList.add(`black`);
      likeButton.classList.remove(`red`);
    }
  };
}

function commentslikeButtonEvent() {
  const commentsLikeButton = document.getElementsByClassName(
    `comments__like-button`
  );
  console.log(commentsLikeButton);

  for (let item of commentsLikeButton) {
    console.log(item);
    const blackToRed = buttonColorChange(item);
    item.addEventListener(`click`, blackToRed);
  }

  // const blackToRed = buttonColorChange(commentsLikeButton);
  // console.log(commentsLikeButton);

  // commentsLikeButton.addEventListener(`click`, blackToRed);
}

function handleDeleteButtonClick() {
  const commentsDeleteButton = document.querySelector(
    `.comments__delete-button`
  );

  let comments = JSON.parse(localStorage.getItem(`comment`));
  comments.splice(commentsDeleteButton.id - 1, 1);

  comments = JSON.stringify(comments);
  localStorage.setItem(`comment`, comments);

  location.reload();
}

function commentsDeleteButtonEvent() {
  const commentsDeleteButton = document.querySelector(
    `.comments__delete-button`
  );

  commentsDeleteButton.addEventListener(`click`, handleDeleteButtonClick);
}

function createComments(idString, textString) {
  const photoComments = document.querySelector(`.photo__comments`),
    commentsDesc = document.createElement(`div`);

  let commentsCount = photoComments.childElementCount;

  if (commentsDesc !== null) {
    commentsDesc.innerHTML = `<div class = "comments__desc">
          <div><a href="">${idString}</a></div>
          <div><a href="">${textString}</a></div>
          <div class = "comments__desc-button-block">
            <button id = "likeButton${commentsCount}" class = "comments__like-button"><i class = "far fa-heart"></i></button>
            <button id = "deleteButton${commentsCount}" class = "comments__delete-button">삭제</button>
        </div>`;
    photoComments.appendChild(commentsDesc);
  }
  commentsDeleteButtonEvent();
}

// form submit 할 때, 댓글 localStorage에 저장
function saveComments(commentsArr, idString, textString) {
  const commentCount = document.querySelector(`#commentsCount`);

  let comment = { id: idString, text: textString };
  commentsArr.push(comment);

  commentCount.innerHTML = `${commentsArr.length}`;
  commentsArr = JSON.stringify(commentsArr);
  localStorage.setItem(`comment`, commentsArr);
  location.reload();
}

// localStorage 내부에 존재하는 댓글 id, 내용 가져오기
function loadComments() {
  let commentsArr = localStorage.getItem(`comment`);

  const commentMoreDiv = document.querySelector(`.comments__more`);
  commentCount = document.querySelector(`#commentsCount`);

  commentsArr = JSON.parse(commentsArr);

  if (commentsArr !== null) {
    commentMoreDiv.style.visibility = `visible`;
    commentCount.innerHTML = `${commentsArr.length}`;
    commentsArr.forEach((x) => {
      createComments(x[`id`], x[`text`]);
    });
  }

  return commentsArr;
}

function handleCommentsInputEvent() {
  const commentsInput = document.querySelector(`#commentsInput`),
    commentsPlaceholder = document.querySelector(`#commentsPlaceholder`);
  let comments = ``;
  comments = commentsInput.value;
  comments === ``
    ? (commentsPlaceholder.style.visibility = `visible`)
    : (commentsPlaceholder.style.visibility = `hidden`);
}

function commentsInputEvent() {
  const commentsInput = document.querySelector(`#commentsInput`);

  commentsInput.addEventListener(`keyup`, handleCommentsInputEvent);
}

function handleCommentsFormEvent() {
  const commentsInput = document.querySelector(`#commentsInput`);
  let comments = commentsInput.value;

  const newCommentsId = localStorage.getItem(`id`),
    newCommentsText = comments;

  comments !== ``
    ? (createComments(newCommentsId, newCommentsText),
      (commentsInput.value = ``))
    : alert(`댓글 내용을 입력해주세요.`);

  let commentsArr = [];

  localStorage.getItem(`comment`) !== null
    ? (commentsArr = JSON.parse(localStorage.getItem(`comment`)))
    : (commentsArr = []);

  saveComments(commentsArr, newCommentsId, newCommentsText);
}

function addCommentsFormEvent() {
  const commentsForm = document.querySelector(`.comments-form`);
  commentsForm.addEventListener(`submit`, handleCommentsFormEvent);
}

function addComments() {
  commentslikeButtonEvent();
  commentsInputEvent();
  addCommentsFormEvent();
}

function searchFocusIn() {
  const searchBarLable = document.querySelector(`.header__search-bar`);
  const searchBarText = searchBarLable.children[0];
  const searchModal = document.querySelector(`.search-modal`);

  searchBarText.style.left = `30px`;
  searchBarText.style.transform = `translate(0, -50%);`;
  searchModal.classList.add(`visible`);
  searchModal.classList.remove(`hidden`);
}

function searchFocusOut() {
  const searchBarLable = document.querySelector(`.header__search-bar`);
  const searchBarText = searchBarLable.children[0];
  const searchModal = document.querySelector(`.search-modal`);
  {
    searchBarText.style.left = `50%`;
    searchBarText.style.transform = `translate(-50%, -50%);`;
    searchModal.classList.remove(`visible`);
    searchModal.classList.add(`hidden`);
  }
}

function searchTextHide() {
  const searchBarLable = document.querySelector(`.header__search-bar`);
  const searchBarText = searchBarLable.children[0];
  const searchBarInput = searchBarLable.children[1];

  searchBarInput.value !== ``
    ? searchBarText.classList.add(`hidden`)
    : searchBarText.classList.remove(`hidden`);
}

// modal
function navSearch(searchBarInput) {
  searchBarInput.addEventListener(`focusin`, searchFocusIn);

  searchBarInput.addEventListener(`keyup`, searchTextHide);

  searchBarInput.addEventListener(`focusout`, searchFocusOut);
}

// initialize
(() => {
  const feedContainer = document.querySelector(`.feed-container`),
    recommendedBlock = document.querySelector(`.recommended-block`);
  let viewportWidth = window.innerWidth;

  screenInit(feedContainer, recommendedBlock, viewportWidth);

  loadComments();

  window.addEventListener(`resize`, () => {
    screenInit(feedContainer, recommendedBlock, viewportWidth);
    location.reload();
  });

  const searchBarLable = document.querySelector(`.header__search-bar`);
  const searchBarText = searchBarLable.children[0],
    searchBarInput = searchBarLable.children[1];

  navSearch(searchBarText, searchBarInput);

  addComments();
})();
