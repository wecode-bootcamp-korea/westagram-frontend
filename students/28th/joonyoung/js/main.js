// Const varaibles
const HIDDEN = "hidden";

// utilities
const toggleArrow = (...arrows) =>
  arrows.map((arrow) => arrow.classList.toggle(HIDDEN));

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
  if (storyRightBtn.classList.contains(HIDDEN)) toggleArrow(storyRightBtn);
  const leftOffset = leftEnd - stories.getBoundingClientRect().left;
  if (leftOffset <= offset) {
    prevMoved -= leftOffset + 16;
    toggleArrow(storyLeftBtn);
  } else prevMoved -= offset;
  stories.style.transform = `translateX(-${prevMoved}px)`;
});

storyRightBtn.addEventListener("click", (e) => {
  if (storyLeftBtn.classList.contains(HIDDEN)) toggleArrow(storyLeftBtn);
  const rightOffset = stories.getBoundingClientRect().right - rightEnd;
  if (rightOffset <= offset) {
    prevMoved += rightOffset + 16;
    toggleArrow(storyRightBtn);
  } else prevMoved += offset;
  stories.style.transform = `translateX(-${prevMoved}px)`;
});

// // [] Carousel for stories
// const HIDDEN = "hidden";
// const storyWrapper = document.querySelector(".stories__wrapper");
// const stories = document.querySelector(".stories");
// const storyLeftArrow = document.querySelector(".fa-chevron-circle-left");
// const storyRightArrow = document.querySelector(".fa-chevron-circle-right");

// // storyLeftArrow.addEventListener("click", (e) => {
// //   const offset = stories.scrollWidth - storyWrapper.offsetWidth;
// //   stories.style.transform = `translateX(${offset}px)`;
// //   storyLeftArrow.classList.add(HIDDEN);
// //   storyRightArrow.classList.remove(HIDDEN);
// // });

// storyRightArrow.addEventListener("click", (e) => {
//   const offset = stories.scrollWidth - storyWrapper.offsetWidth;
//   // if (offset > storyWrapper.offsetWidth) {
//   //   storyContainer.style.transform = `translateX(${-storyWrapper.offsetWidth}px)`;
//   // } else
//   stories.style.transform = `translateX(${-offset - 32}px)`;
//   toggleArrow(storyLeftArrow, storyRightArrow);
// });

// const toggleArrow = (...arrows) =>
//   arrows.map((arrow) => arrow.classList.toggle(HIDDEN));
// // **************************************************
// // [] Carousel for Feed image
// const feed = document.querySelector(".feed");
// const feedCarousel = document.querySelector(".feed__carousel");
// const slideContainer = feedCarousel.querySelector(".carousel__container");
// const slides = [...feedCarousel.querySelectorAll(".carousel__container img")];
// const carouselLeftBtn = feedCarousel.querySelector(".fa-chevron-circle-left");
// const carouselRightBtn = feedCarousel.querySelector(".fa-chevron-circle-right");
// const slideBtn = feedCarousel.querySelector(".slide_btn");
// let currSlideIdx = 0;

// carouselLeftBtn.addEventListener("click", (e) => {
//   if (currSlideIdx === 0) return;
//   if (currSlideIdx === 1) toggleArrow(carouselLeftBtn);
//   if (currSlideIdx === slides.length - 1) toggleArrow(carouselRightBtn);
//   // slideContainer.style.transform = `translateX(${-offset}px)`;
//   slideFeed(slideContainer, getOffset(0));
// });

// carouselRightBtn.addEventListener("click", (e) => {
//   if (currSlideIdx === 0) toggleArrow(carouselLeftBtn);
//   if (currSlideIdx === slides.length - 2) toggleArrow(carouselRightBtn);
//   if (currSlideIdx === slides.length - 1) return;
//   // slideContainer.style.transform = `translateX(${-offset}px)`;
//   slideFeed(slideContainer, getOffset());
// });

// const slideFeed = (slide, offset) => {
//   slide.style.transform = `translateX(${-offset}px)`;
// };

// const getOffset = (inc = true) =>
//   (inc ? ++currSlideIdx : --currSlideIdx) * feedCarousel.offsetWidth;

// // **************************************************
// // [] Comment 작성 -> commnet upload
// const feedCommentContainer = feed.querySelector(".comments__wrapper");
// const commentList = feedCommentContainer.querySelector(".comments");

// const commentInput = feedCommentContainer.querySelector(".comment__input");
// const commentUploadBtn = commentInput.querySelector(".add__comment ");
// commentInput.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });
// commentInput.addEventListener("keydown", (e) => {
//   e.key === "Enter" && uploadComment("joonyg", e.target.value);
// });
// commentUploadBtn.addEventListener("click", (e) => {
//   uploadComment("joonyg", commentInput.querySelector("textarea").value);
// });
// const uploadComment = (user, comment) => {
//   if (!comment) return;
//   const newCommentIi = document.createElement("li");
//   newCommentIi.innerHTML = `
//     <strong>${user}</strong>
//     <span>${comment}</span>
//   `;
//   commentList.appendChild(newCommentIi);
//   commentInput.querySelector("textarea").value = "".replace(/\n\s/g, "");
// };
// // **************************************************
// // Utility fuctions
// const checkCommentsLen = (comment) => {
//   comment.length > 100 ? "더보기" : comment;
// };
