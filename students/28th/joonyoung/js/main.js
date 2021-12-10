// Const varaibles
let search = [
  { id: 1, username: "Enna", img: "./public/stories/story1.jpg" },
  { id: 2, username: "Enna", img: "./public/stories/story2.jpg" },
];
const HIDDEN = "hidden";
const ACTIVE = "active";
const LIKE = "liked";
const HEART = "heart-path";
const FRONT_COMMENT = "comment-front";

// utilities
const toggleArrow = (arrow) => arrow.classList.toggle(HIDDEN);
const addClass = (target, classVar) => target.classList.add(classVar);
const toggleClass = (target, classVar) => target.classList.toggle(classVar);
const checkElementNotHaveClass = (target, classVar) =>
  !target.classList.contains(classVar);
const getElementRect = (ele) => ele.getBoundingClientRect();

// **************************************************
// [X] Nav profile image Dropdown
const mainProfileImage = document.querySelector(".profile-img");
mainProfileImage.addEventListener("click", () =>
  toggleClass(mainProfileImage.nextElementSibling, "open")
);

// SECTION: Carousel for story
// [X] Carousel for stories
const storyWrapper = document.querySelector(".stories__wrapper");
const stories = storyWrapper.querySelector(".stories");
const [storyLeftBtn, storyRightBtn] = storyWrapper.querySelectorAll("i.fas");

const slideStart = storyWrapper.getBoundingClientRect();
const [leftEnd, rightEnd] = [slideStart.left, slideStart.right];
const offset = storyWrapper.offsetWidth / 2;
let prevMoved = 0;

// FIXME: 맨 양쪽에 도달 헀을 때, <- , -> 가 없어지고 다른 버튼 클릭시 생기도록 안되는 경우가 있는듯?
storyLeftBtn.addEventListener("click", (e) => {
  const leftOffset = leftEnd - stories.getBoundingClientRect().left;
  if (storyRightBtn.classList.contains(HIDDEN)) toggleArrow(storyRightBtn);
  if (leftOffset <= offset) {
    prevMoved -= leftOffset + 16;
    toggleArrow(storyLeftBtn);
  } else prevMoved -= offset;
  stories.style.transform = `translateX(-${prevMoved}px)`;
});

storyRightBtn.addEventListener("click", (e) => {
  const rightOffset = stories.getBoundingClientRect().right - rightEnd;
  if (storyLeftBtn.classList.contains(HIDDEN)) toggleArrow(storyLeftBtn);
  if (rightOffset <= offset) {
    prevMoved += rightOffset + 16;
    toggleArrow(storyRightBtn);
  } else prevMoved += offset;
  stories.style.transform = `translateX(-${prevMoved}px)`;
});

// SECTION: Carousel for Feed image -> 모든 feed에 대해 시행해야 한다!!
const feeds = [...document.querySelectorAll(".feed")];
feeds.map((feed) => {
  const feedCarousel = feed.querySelector(".feed__carousel");
  const feedImgContainer = feed.querySelector(".img__container");
  const feedImages = [...feedImgContainer.querySelectorAll("img")];
  const feedIcons = feed.querySelector(".feed__icons");
  const [feedLeftBtn, feedRightBtn] = feedCarousel.querySelectorAll("i.fas");
  let currIdx = 0;

  feedLeftBtn.addEventListener("click", (e) => {
    if (currIdx === 0) return;
    else if (currIdx === 1) toggleArrow(feedLeftBtn);
    else if (currIdx === feedImages.length - 1) toggleArrow(feedRightBtn);
    feedImgContainer.style.transform = `translateX(-${
      --currIdx * feedImgContainer.offsetWidth
    }px)`;
  });

  feedRightBtn.addEventListener("click", (e) => {
    if (currIdx === 0) toggleArrow(feedLeftBtn);
    else if (currIdx === feedImages.length - 2) toggleArrow(feedRightBtn);
    else if (currIdx === feedImages.length - 1) return;
    feedImgContainer.style.transform = `translateX(-${
      ++currIdx * feedImgContainer.offsetWidth
    }px)`;
  });

  // FIXME: 3) like버튼 클릭시 좋아요 갯수를 동적으로 update
  const updateLikes = (e) => {
    if (!checkElementNotHaveClass(e.target, HEART)) return;
    toggleClass(e.target, LIKE);
    const likeCounter = e.target.closest(".feed__icons").lastChildElement;
    let currLikes = parseInt(likeCounter.innerHTML.replace(",", "")) + 1;
    if (!e.target.classList.contains("like")) currLikes -= 2;
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
  const addCommentBtn = commentsWrapper.querySelector(".add__comment");

  // SECTION: btn active
  const activeBtn = (e) => {
    if (e.target.value) addClass(addCommentBtn, ACTIVE);
  };
  commentInput.addEventListener("input", activeBtn);

  // SECTION:  delete comment
  const deleteComment = (e) => {
    if (checkElementNotHaveClass(e.target, "fa-trash-alt")) return;
    commentList.removeChild(e.target.closest("li"));
  };
  commentList.addEventListener("click", deleteComment);

  // SECTION: X 버튼 click시 translate원상복구
  const resetDelete = (e) => {
    if (checkElementNotHaveClass(e.target, "fa-times")) return;
    e.target.closest(
      "section"
    ).nextElementSibling.style.transform = `translateX(0px)`;
  };
  commentList.addEventListener("click", resetDelete);

  // SECTION: 2) comment의 길이가 길어진 경우 see-more클릭시 내용볼 수 있게하는 로직
  const seeMoreComment = (e) => {
    if (checkElementNotHaveClass(e.target, "see-more")) return;
    toggleClass(e.target, HIDDEN);
    toggleClass(e.target.nextElementSibling, HIDDEN);
  };
  commentList.addEventListener("click", seeMoreComment);

  // SECTION 3) heart button click시 liked class 추가
  const addHeartClass = (e) => {
    if (e.target.nodeName !== "path") return;
    toggleClass(e.target, LIKE);
  };
  commentList.addEventListener("click", addHeartClass);

  // SECTION 4) enter / button click시 댓글 달리도록 하는 로직
  const addCommentWithEnter = (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    uploadComment("joonyg10", commentInput.value);
    toggleClass(addCommentBtn, ACTIVE);
  };
  const addCommentWithBtnClick = (e) => {
    uploadComment("joonyg10", commentInput.value);
    toggleClass(e.target, ACTIVE);
  };

  // FIXME:
  let isMoving = false,
    dragAnimationID,
    startPos,
    currPos,
    movedBy;
  const commentBox = getElementRect(commentList.querySelector(".comment"));
  const minimumRequiredMove = commentBox.width * 0.05;
  const maxMoved = 132;
  console.log(minimumRequiredMove, maxMoved, commentBox.width);

  // FIXME:
  const commentFront = commentList.querySelector("li.comment .comment-front");
  const commentDelete = commentList.querySelector("li.comment .comment-delete");

  // SECTION: 7-1) relative logic
  const startCommentDrag = (e) => {
    if (checkElementNotHaveClass(e.target, FRONT_COMMENT)) return;
    isMoving = true;
    startPos = e.pageX;
    dragAnimationID = requestAnimationFrame(animation);
  };

  const movingComment = (e) => {
    if (!isMoving) return;
    currPos = e.pageX;
    movedBy = currPos - startPos;
    if (Math.abs(movedBy) >= minimumRequiredMove) movedBy = -maxMoved;
    animation();
  };
  const endCommentDrag = (e) => {
    isMoving = false;
    cancelAnimationFrame(dragAnimationID);
    moveCommentByCalc();
  };
  const animation = () => {
    moveCommentByCalc();
    if (isMoving) requestAnimationFrame(animation);
  };
  const moveCommentByCalc = () => {
    commentFront.style.transform = `translateX(${movedBy}px)`;
  };
  commentList.addEventListener("mousedown", startCommentDrag);
  commentList.addEventListener("mousemove", movingComment);
  commentList.addEventListener("mouseup", endCommentDrag);

  commentInput.addEventListener("keydown", addCommentWithEnter);
  addCommentBtn.addEventListener("click", addCommentWithBtnClick);

  // FIXME: comments에 drag하는 eventlistener 추가!
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
    <section class="comment-front flex items-center">
      <strong>${user}</strong>&nbsp;&nbsp;
      <span>${comment}</span>
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
    commentList.appendChild(newCommentLi);
    commentInput.value = null;
  };

  // TODO: 5) textarea auto line change
  const adjustInputHeight = () => {
    // console.log(e.target.style);
    // e.target.style.height = `100px`;
    // e.target.style.height = resizeInput(e.target.style.height) + "px";
  };
  commentInput.addEventListener("keyup", adjustInputHeight);

  // TODO: 6) resize textarea input
  // const resizeInput = (height) => {
  //   console.log(height);
  //   let numberOfLineBreak = height.match(/\n/g || []).length;
  //   console.log(numberOfLineBreak);

  //   // resized Height = line-height * \n count + padding(top, bottom) + min-height
  //   let resizedHeight = (numberOfLineBreak + 1) * 16 + 32;
  // };
});

// // **************************************************
// // Utility fuctions
const checkCommentsLen = (comment) => {
  return comment.length > 40
    ? `<a class='see-more'>...더보기</a> <span class='hidden'>${comment}</span>`
    : comment;
};

// FIXME: Heart Svg animation function

// window.addEventListener("DOMContentLoaded", () => {
//   const heartBtns = [...document.querySelectorAll(".heart path")];
//   heartBtns.map((heartBtn) => {
//     heartBtn.addEventListener("click", addHeartClass);
//   });
// });
