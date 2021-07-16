// viewport 해상도 -> style 바꿈
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
}

// 좋아요 icon 구현 보류
// function createCommentsLikeOrDelete() {
//   const commentsLikeOrDelete = document.createElement(`div`),
//     commentsLike = document.createElement(`a`),
//     commentsDeleteBtn = document.createElement(`button`),
//     heartIcon = document.getElementsByClassName(`.fa-heart`);

//   commentsLike.appendChild(heartIcon);
// }

// 댓글에 해당하는 div 생성 후 배치

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

  const commentsLikeOrDelete = document.createElement(`div`),
    commentsLikeBtn = document.createElement(`button`),
    commentsLike = document.createElement(`i`),
    commentsDelete = document.createElement(`button`);

  commentsLikeOrDelete.classList.add(`comments__desc-button-block`);
  commentsLike.classList.add(`far`);
  commentsLike.classList.add(`fa-heart`);

  commentsLikeBtn.id = `commentsLikeButton` + photoComments.childElementCount;
  commentsDelete.id = `commentsDeleteButton` + photoComments.childElementCount;

  commentsDelete.innerHTML = `삭제`;

  commentsLikeBtn.appendChild(commentsLike);
  commentsLikeOrDelete.appendChild(commentsLikeBtn);
  commentsLikeOrDelete.appendChild(commentsDelete);
  commentsDesc.appendChild(commentsLikeOrDelete);

  commentsDesc.id = `comments` + photoComments.childElementCount;

  photoComments.appendChild(commentsDesc);
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

function likeComments() {
  const photoComments = document.querySelector(`.photo__comments`);
  let commentsCount = photoComments.childElementCount;

  let commentsInfo = [];
  console.log(commentsCount);

  for (let i = 1; i <= commentsCount - 1; i++) {
    let comments = {
      id: i,
      commentsLikeBtn: document.querySelector(`#commentsLikeButton${i}`),
    };
    commentsInfo.push(comments);
  }

  if (commentsInfo !== null || commentsInfo !== undefined) {
    commentsInfo.forEach((elem) => {
      let commentsLikeBtn = elem[`commentsLikeBtn`];
      let redOrBlack = `black`;

      if (commentsLikeBtn !== null || commentsLikeBtn !== undefined) {
        commentsLikeBtn.addEventListener(`click`, () => {
          if (redOrBlack === `black`) {
            redOrBlack = `red`;
          } else {
            redOrBlack = `black`;
          }
          switch (redOrBlack) {
            case `black`:
              commentsLikeBtn.style.color = `black`;
              break;

            case `red`:
              commentsLikeBtn.style.color = `red`;
              break;
          }
        });
      }
    });
  }
}

function deleteComments() {
  const photoComments = document.querySelector(`.photo__comments`);
  let commentsCount = photoComments.childElementCount;

  let commentInfo = {};

  for (let i = 1; i < commentsCount; i++) {
    let comment = {
      id: i,
      commentDiv: document.querySelector(`comments${i}`),
    };

    commentInfo.id = i;
    commentInfo.comments = comment;
  }

  console.log(commentInfo);
}

// 댓글 DOM event, saveComments, 이전 댓글정보 유무 확인
function addComments() {
  const commentsInput = document.querySelector(`#commentsInput`),
    commentsPlaceholder = document.querySelector(`#commentsPlaceholder`),
    commentsForm = document.querySelector(`.comments-form`);

  let comments = ``;

  commentsInput.addEventListener(`keyup`, () => {
    comments = commentsInput.value;
    comments === ``
      ? (commentsPlaceholder.style.visibility = `visible`)
      : (commentsPlaceholder.style.visibility = `hidden`);
  });

  let commentsArr = [];

  localStorage.getItem(`comment`) !== null
    ? (commentsArr = JSON.parse(localStorage.getItem(`comment`)))
    : (commentsArr = []);

  commentsForm.addEventListener(`submit`, () => {
    const newCommentsId = localStorage.getItem(`id`),
      newCommentsText = comments;
    comments !== ``
      ? (createComments(newCommentsId, newCommentsText),
        (commentsInput.value = ``))
      : alert(`댓글 내용을 입력해주세요.`);
    saveComments(commentsArr, newCommentsId, newCommentsText);
  });

  deleteComments();
  likeComments();
}

// modal
function navSearch() {
  const searchBarLable = document.querySelector(`.header__search-bar`);

  const searchBarText = searchBarLable.children[0],
    searchBarInput = searchBarLable.children[1];

  const searchModal = document.querySelector(`.search-modal`);

  searchBarInput.addEventListener(`focusin`, () => {
    searchBarText.style.left = `30px`;
    searchBarText.style.transform = `translate(0, -50%);`;
    searchModal.classList.add(`visible`);
    searchModal.classList.remove(`hidden`);
  });

  searchBarInput.addEventListener(`keyup`, (event) => {
    searchBarText.classList.add(`hidden`);
  });

  searchBarInput.addEventListener(`focusout`, () => {
    searchBarText.style.left = `50%`;
    searchBarText.style.transform = `translate(-50%, -50%);`;
    searchModal.classList.remove(`visible`);
    searchModal.classList.add(`hidden`);
  });
}

// initialize
(() => {
  screenInit();
  loadComments();
  window.addEventListener(`resize`, () => {
    screenInit();
    location.reload();
  });
  navSearch();
  addComments();
})();
