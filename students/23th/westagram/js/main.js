function screenInit() {
  const feedContainer = document.querySelector(`.feed-container`),
    recommendedBlock = document.querySelector(`.recommended-block`);
  let viewportWidth = window.innerWidth;
  viewportWidth > 999
    ? ((mainContainerWidth =
        feedContainer.clientWidth + recommendedBlock.clientWidth),
      (recommendedBlock.style.right = `${
        (viewportWidth - mainContainerWidth) / 2
      }px`),
      (feedContainer.style.marginRight = `361px`))
    : (recommendedBlock.style.visibility = `hidden`);

  console.log(viewportWidth);
}

function createComments(idString, textString) {
  const photoComments = document.querySelector(`.photo__comments`);
  const commentsIdText = [idString, textString];

  const commentsDesc = document.createElement(`div`);

  commentsIdText.forEach((x) => {
    let commentsWrap = document.createElement(`div`),
      commentsAnchor = document.createElement(`a`);

    commentsAnchor.innerHTML = `${x}`;
    commentsWrap.appendChild(commentsAnchor);
    commentsDesc.appendChild(commentsWrap);
    commentsDesc.className = `comments__desc`;
  });
  photoComments.appendChild(commentsDesc);
}

function addComments() {
  const commentsInput = document.querySelector(`#commentsInput`),
    commentsBtn = document.querySelector(`#addCommentsBtn`),
    commentsPlaceholder = document.querySelector(`#commentsPlaceholder`);

  let comments = ``;
  commentsInput.addEventListener(`keyup`, (event) => {
    comments = commentsInput.value;
    comments === ``
      ? (commentsPlaceholder.style.visibility = `visible`)
      : (commentsPlaceholder.style.visibility = `hidden`);
    const newCommentsId = localStorage.getItem(`id`),
      newCommentsText = comments;
    if (event.code === `Enter`) {
      comments !== ``
        ? (createComments(newCommentsId, newCommentsText),
          (commentsInput.value = ``))
        : alert(`댓글 내용을 입력해주세요`);
    }
  });

  // commentsInput.addEventListener(`click`, () => {
  //   comments === ``
  //     ? (commentsPlaceholder.style.visibility = `visible`)
  //     : (commentsPlaceholder.style.visibility = `hidden`);
  // });

  commentsBtn.addEventListener(`click`, () => {
    const newCommentsId = localStorage.getItem(`id`),
      newCommentsText = comments;

    comments !== ``
      ? (createComments(newCommentsId, newCommentsText),
        (commentsInput.value = ``))
      : alert(`댓글 내용을 입력해주세요`);
  });
}

function init() {
  screenInit();
  window.addEventListener(`resize`, () => {
    screenInit();
    location.reload();
  });
  addComments();
}

init();
