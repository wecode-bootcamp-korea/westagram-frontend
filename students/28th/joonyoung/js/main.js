// Const varaibles
const HIDDEN = "hidden";

// utilities
const toggleArrow = (arrow) => arrow.classList.toggle(HIDDEN);

// **************************************************
// [] Nav profile image Dropdown
const mainProfileImage = document.querySelector(".profile-img");
const dropdown = mainProfileImage.nextElementSibling;

mainProfileImage.addEventListener("click", (e) => {
  console.log("img");
  dropdown.classList.toggle("open");
});

// **************************************************
// SECTION: Carousel for story
// [X] Carousel for stories
const storyWrapper = document.querySelector(".stories__wrapper");
const stories = storyWrapper.querySelector(".stories");
const [storyLeftBtn, storyRightBtn] = storyWrapper.querySelectorAll("i.fas");

const slideStart = storyWrapper.getBoundingClientRect();
const [leftEnd, rightEnd] = [slideStart.left, slideStart.right];
const offset = storyWrapper.offsetWidth / 2;
let prevMoved = 0;

// FIXME: 맨 양쪽에 도달 헀을 때, <- , -> 가 없어지고 다른 버튼 클릭시 생기도록
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

// **************************************************
// [] Carousel for Feed image -> 모든 feed에 대해 시행해야 한다!!
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

  feedIcons.addEventListener("click", (e) => {
    if (e.target.nodeName !== "path") return;
    e.target.classList.toggle("like");
    const likeCounter = e.target.closest("svg").closest("div")
      .nextElementSibling.firstElementChild;
    let currLikes = parseInt(likeCounter.innerHTML.replace(",", "")) + 1;
    if (!e.target.classList.contains("like")) currLikes -= 2;
    likeCounter.innerHTML = currLikes
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });

  // **********************************************************
  // [] Comment 작성 -> commnet upload
  const commentsWrapper = feed.querySelector(".comments__wrapper");
  const commentsList = commentsWrapper.querySelector(".comments");
  const likes = commentsWrapper.querySelector("p .like-counter");
  const commentInput = commentsWrapper.querySelector(
    ".comment__input textarea"
  );
  const addCommentBtn = commentsWrapper.querySelector(".add__comment");
  let commentIdx = 0;

  // SECTION: 1) delete
  commentsList.addEventListener("click", (e) => {
    if (!e.target.classList.contains("fa-trash-alt")) return;
    commentsList.removeChild(e.target.closest("li"));
  });

  // SECTION: 2) comment의 길이가 길어진 경우 see-more클릭시 내용볼 수 있게하는 로직
  commentsList.addEventListener("click", (e) => {
    if (!e.target.classList.contains("see-more")) return;
    e.target.classList.add(HIDDEN);
    e.target.nextElementSibling.classList.remove(HIDDEN);
  });

  // SECTION 3) heart button click시 liked class 추가
  commentsList.addEventListener("click", (e) => {
    if (e.target.nodeName !== "path") return;
    e.target.classList.toggle("like");
  });

  // SECTION 4) enter / button click시 댓글 달리도록 하는 로직
  commentInput.addEventListener("keydown", (e) => {
    if (!(e.key === "Enter")) return;
    e.preventDefault();
    uploadComment("joonyg10", commentInput.value, commentsList);
    commentInput.value = null;
    commentsList.style.height = commentsList.scrollHeight;
  });
  addCommentBtn.addEventListener("click", (e) => {
    uploadComment("joonyg10", commentInput.value, commentsList);
    commentInput.value = null;
    commentsList.style.height = commentsList.scrollHeight;
  });
});

const uploadComment = (user, comment, commentUl) => {
  if (!comment) return;
  comment = checkCommentsLen(comment);
  const newCommentLi = document.createElement("li");
  newCommentLi.className = "flex mb-1 items-center";
  newCommentLi.innerHTML = `
    <strong>${user}</strong>
    <span>${comment}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 heart"
      fill="none"
      viewBox="0 0 24 24"
      stroke="black"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
    <i class="fas fa-trash-alt"></i>
  `;
  commentUl.appendChild(newCommentLi);
};
// // **************************************************
// TODO:
// [] 댓글 추가시 높이는 고정! -> 4개 이상일 때, 더보기 눌러 늘리기
//
// [] 더보기 클릭시 긴 댓글 그대로 보이게
// [] textarea.value = ''에서 line break발생...

// // **************************************************
// // Utility fuctions
const checkCommentsLen = (comment) => {
  return comment.length > 40
    ? `<a class='see-more'>더보기</a> <span class='hidden'>${comment}</span>`
    : comment;
};

// Heart Svg animation function
window.addEventListener("DOMContentLoaded", () => {
  const heartBtns = [...document.querySelectorAll(".heart path")];
  heartBtns.map((heartBtn) => {
    heartBtn.addEventListener("click", (e) => {
      e.target.classList.toggle("liked");
    });
  });
});
