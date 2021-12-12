// Const varaibles
const allUsers = [
  { id: 1, username: "Enna", img: "./public/stories/story1.jpg" },
  { id: 2, username: "Jesy", img: "./public/stories/story2.jpg" },
  { id: 3, username: "Mike", img: "./public/stories/story3.jpg" },
  { id: 4, username: "Meow", img: "./public/stories/story4.jpg" },
  { id: 5, username: "Mally", img: "./public/stories/story5.jpg" },
  { id: 6, username: "John", img: "./public/stories/story6.jpg" },
  { id: 7, username: "Kai", img: "./public/stories/story7.jpg" },
];
const HIDDEN = "hidden";
const ACTIVE = "active";
const LIKE = "liked";
const HEART = "heart-path";
const FRONT_COMMENT = "comment-front";
const SHIFT = "Shift";
const ENTER = "Enter";

// utilities
const addClass = (target, classVar) => target?.classList.add(classVar);
const removeClass = (target, classVar) => target?.classList.remove(classVar);
const toggleClass = (target, classVar) => target?.classList.toggle(classVar);
const checkElementHasClass = (target, classVar) =>
  target.classList.contains(classVar);
const getClosestSelector = (target, selector) => {
  if (checkElementHasClass(target, selector)) return target;
  target.closest(selector);
};
const getElementRect = (ele) => ele.getBoundingClientRect();

// **************************************************
// SECTION: Search Bar 만들기
const navbarSearch = document.querySelector("header nav .search");
const filteredList = navbarSearch.querySelector(".filtered-user");

const filterUserByInput = (inputValue) => {
  return allUsers.filter((user) =>
    user.username.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const updateBySearch = (e) => {
  if (e.target !== document.activeElement) return;
  removeFilteredList(e);
  const filteredUser = filterUserByInput(e.target.value);
  filteredUser.map((user) => {
    const newUser = document.createElement("li");
    newUser.className = "flex items-center";
    newUser.innerHTML = `
      <img src="${user.img}"  alt="recommend user image ${user.id}" class="w-6 h-6" />
      <p>${user.username}</p>
    `;
    filteredList.appendChild(newUser);
  });
};

const removeFilteredList = (e) => {
  // filteredList.innerHTML = ''도 있지만 원시적으로 해보았음.
  let currFilteredUser = e.target.nextElementSibling.firstElementChild;
  while (currFilteredUser) {
    const nextUser = currFilteredUser.nextElementSibling;
    filteredList.removeChild(currFilteredUser);
    currFilteredUser = nextUser;
  }
};

const focusOutSearch = (e) => {
  if (e.key === "Escape") removeFilteredList(e);
};

navbarSearch.addEventListener("focus", updateBySearch);
navbarSearch.addEventListener("input", updateBySearch);
navbarSearch.addEventListener("focusout", removeFilteredList);
window.addEventListener("keydown", focusOutSearch);

// **************************************************
// SECTION: Nav profile image Dropdown
const mainProfileImage = document.querySelector(".profile-img");
mainProfileImage.addEventListener("click", () =>
  toggleClass(mainProfileImage.nextElementSibling, "open")
);

// SECTION: Carousel for story
const storyWrapper = document.querySelector(".stories__wrapper");
const stories = storyWrapper.querySelector(".stories");
const [storyLeftBtn, storyRightBtn] = storyWrapper.querySelectorAll("i.fas");

const slideStart = storyWrapper.getBoundingClientRect();
const [leftEnd, rightEnd] = [slideStart.left, slideStart.right];
const offset = storyWrapper.offsetWidth / 2;
let prevMoved = 0;

// FIXME: 맨 양쪽에 도달 헀을 때, <- , -> 가 없어지고 다른 버튼 클릭시 생기도록. 안되는 경우가 있는듯?
const slideStoryToLeft = (e) => {
  const leftOffset = leftEnd - getElementRect(stories).left;
  if (checkElementHasClass(storyRightBtn, HIDDEN))
    toggleClass(storyRightBtn, HIDDEN);
  if (leftOffset <= offset) {
    prevMoved -= leftOffset + 16;
    toggleClass(storyLeftBtn, HIDDEN);
  } else prevMoved -= offset;
  stories.style.transform = `translateX(-${prevMoved}px)`;
};

const slideStoryToRight = (e) => {
  const rightOffset = getElementRect(stories).right - rightEnd;
  if (checkElementHasClass(storyLeftBtn, HIDDEN))
    toggleClass(storyLeftBtn, HIDDEN);

  if (rightOffset <= offset) {
    prevMoved += rightOffset + 16;
    toggleClass(storyRightBtn, HIDDEN);
  } else prevMoved += offset;
  stories.style.transform = `translateX(-${prevMoved}px)`;
};

storyLeftBtn.addEventListener("click", slideStoryToLeft);
storyRightBtn.addEventListener("click", slideStoryToRight);

// SECTION: Carousel for Feed image -> 모든 feed에 대해 시행해야 한다!!
const feeds = [...document.querySelectorAll(".feed")];
feeds.map((feed) => {
  const feedCarousel = feed.querySelector(".feed__carousel");
  const feedImgContainer = feed.querySelector(".img__container");
  const feedImages = [...feedImgContainer.querySelectorAll("img")];
  const [feedLeftBtn, feedRightBtn] = feedCarousel.querySelectorAll("i.fas");
  const feedIcons = feed.querySelector(".feed__icons");
  let currIdx = 0;

  const slideFeedLeft = (e) => {
    if (currIdx === 0) return;
    else if (currIdx === 1) toggleClass(feedLeftBtn, HIDDEN);
    else if (currIdx === feedImages.length - 1)
      toggleClass(feedRightBtn, HIDDEN);
    feedImgContainer.style.transform = `translateX(-${
      --currIdx * feedImgContainer.offsetWidth
    }px)`;
  };

  const slideFeedRight = (e) => {
    if (currIdx === 0) toggleClass(feedLeftBtn, HIDDEN);
    else if (currIdx === feedImages.length - 2)
      toggleClass(feedRightBtn, HIDDEN);
    else if (currIdx === feedImages.length - 1) return;
    feedImgContainer.style.transform = `translateX(-${
      ++currIdx * feedImgContainer.offsetWidth
    }px)`;
  };
  feedLeftBtn.addEventListener("click", slideFeedLeft);
  feedRightBtn.addEventListener("click", slideFeedRight);

  // SECTION: 3) like버튼 클릭시 좋아요 갯수를 동적으로 update
  const likeCounter = feedIcons.querySelector(".like-counter");
  let currLikes = parseInt(likeCounter.innerHTML.replace(",", ""));

  const updateLikes = (e) => {
    if (!checkElementHasClass(e.target, HEART)) return;
    toggleClass(e.target, LIKE);
    currLikes += 1;
    if (!checkElementHasClass(e.target, LIKE)) currLikes -= 2;
    likeCounter.innerHTML = currLikes
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  feedIcons.addEventListener("click", updateLikes);

  // **********************************************************
  // [] Comment 작성 -> commnet upload
  const commentsWrapper = feed.querySelector(".comments__wrapper");
  const commentList = commentsWrapper.querySelector(".comments");
  const commentInput = commentsWrapper.querySelector(
    ".comment__input textarea"
  );
  const textAreaRect = getElementRect(commentInput);
  // console.log((textAreaRect.right - textAreaRect.left) * 0.8);
  const addCommentBtn = commentsWrapper.querySelector(".add__comment");

  // SECTION: comment btn active
  const activeBtn = (e) => {
    if (e.target.value) addClass(addCommentBtn, ACTIVE);
    else removeClass(addCommentBtn.ACTIVE);
  };
  commentInput.addEventListener("input", activeBtn);

  // SECTION:  delete comment
  const deleteComment = (e) => {
    if (!checkElementHasClass(e.target, "fa-trash-alt")) return;
    commentList.removeChild(e.target.closest("li"));
  };
  commentList.addEventListener("click", deleteComment);

  // SECTION: X 버튼 click시 translate원상복구
  const resetDelete = (e) => {
    if (!checkElementHasClass(e.target, "fa-times")) return;
    e.target.closest(
      "section"
    ).nextElementSibling.style.transform = `translateX(0px)`;
  };
  commentList.addEventListener("click", resetDelete);

  // SECTION: 2) comment의 길이가 길어진 경우 see-more클릭시 내용볼 수 있게하는 로직
  const seeMoreComment = (e) => {
    if (!checkElementHasClass(e.target, "see-more")) return;
    toggleClass(e.target, HIDDEN);
    toggleClass(e.target.nextElementSibling, HIDDEN);
  };
  commentList.addEventListener("click", seeMoreComment);

  // SECTION 3) heart button click시 liked class 추가
  const addHeartClass = (e) => {
    if (!checkElementHasClass(e.target, HEART)) return;
    updateLikes(e);
  };
  commentList.addEventListener("click", addHeartClass);

  // SECTION: Slide logic
  let isMoving = false,
    dragAnimationID,
    startPos,
    currPos,
    movedBy;
  const commentBox = getElementRect(commentList.querySelector(".comment"));
  const minimumRequiredMove = commentBox.width * 0.05;
  const maxMoved = commentBox.width * 0.28;

  const startCommentDrag = (e) => {
    if (!checkElementHasClass(e.target, FRONT_COMMENT)) return;
    isMoving = true;
    startPos = e.pageX;
    dragAnimationID = requestAnimationFrame(() => animation(e.target));
  };

  const movingComment = (e) => {
    if (!isMoving) return;
    currPos = e.pageX;
    movedBy = currPos - startPos;
    if (Math.abs(movedBy) >= minimumRequiredMove) movedBy = -maxMoved;
    else movedBy = 0;
    animation(getClosestSelector(e.target, FRONT_COMMENT));
  };

  const endCommentDrag = () => {
    isMoving = false;
    cancelAnimationFrame(dragAnimationID);
    moveCommentByCalc();
    movedBy = 0;
  };

  const animation = (target) => {
    moveCommentByCalc(target);
    if (isMoving) requestAnimationFrame(animation);
  };

  // FIXME: target : undefined error (if로 Filtering했는데도 발생)
  const moveCommentByCalc = (target) => {
    if (target) {
      target.style.transform = `translateX(${movedBy}px)`;
    }
  };
  commentList.addEventListener("mousedown", startCommentDrag);
  commentList.addEventListener("mousemove", movingComment);
  commentList.addEventListener("mouseup", endCommentDrag);

  // FIXME: comment추가 하는 로직
  let lines = 0;

  const addCommentWithEnter = (e) => {
    e.preventDefault();
    addCommentWithBtnClick(e);
  };
  const addCommentWithBtnClick = (e) => {
    uploadComment(
      "joonyg10",
      e.target.value.replace(/(?:\r\n|\r|\n)/g, "<br />")
    );
    toggleClass(e.target, ACTIVE);
  };

  const handleInput = (e) => {
    if (e.key === ENTER) {
      e.shiftKey ? adjustInputHeight(e) : addCommentWithEnter(e);
    }
  };
  const adjustInputHeight = (e) => {
    if (e.keyCode == 8) {
      e.target.style.height = `${e.target.scrollHeight}px`;
      console.log("DELETE", e.target.scrollHeight);
    }
    if (e.key === ENTER && e.shiftKey) {
      ++lines;
      console.log(e.target.scrollHeight);
      e.target.style.height = `${e.target.scrollHeight + 8}px`;
    }
  };

  commentInput.addEventListener("keyup", handleInput);
  commentInput.addEventListener("keyup", adjustInputHeight);
  addCommentBtn.addEventListener("click", addCommentWithBtnClick);

  const checkCommentsLen = (comment) => {
    return lines === 0
      ? comment
      : `<a class='see-more'>...더보기</a> <span class='hidden'>
        ${comment}
      </span>`;
  };

  const uploadComment = (user, comment) => {
    if (!comment) return;
    comment = checkCommentsLen(comment);

    const newCommentLi = document.createElement("li");
    newCommentLi.className = "comment";
    newCommentLi.innerHTML = `
    <section class="comment-delete">
      <div class="comment-delete comment flex items-center">
        <i class="fas fa-times"></i>
        <i class="fas fa-trash-alt"></i>
      </div>
    </section>
    <section class="comment-front flex">
      <strong>${user}</strong>&nbsp;&nbsp;
      <span class="actual-comment"></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 heart"
        fill="none"
        viewBox="0 0 24 24"
        stroke="black"
      >
        <path
          class="heart-path"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </section>
    `;
    newCommentLi.querySelector(".actual-comment").innerHTML = comment;
    commentList.appendChild(newCommentLi);
    commentInput.value = null;
    lines = 0;
  };
});
