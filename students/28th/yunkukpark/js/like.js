const feedImage = document.querySelector('.feed-main');
const feedImageWrapper = document.querySelector('.feed-image-wrapper');
const feedControler = document.querySelector('.feed-controler');
const feedHeartIcon = feedControler.querySelector('.fa-heart');

const commentList = document.querySelector('.feed-comment-list');
const commentHeartIcons = commentList.querySelectorAll('.fa-heart');

const borderIconClassName = 'far';
const filledIconClassName = 'fas';

const handleCommentHeartIcon = (event) => {
  const classListArray = event.target.classList.value.split(' ');
  const isHeartButton = classListArray.find((classItem) =>
    classItem === 'fa-heart' ? true : false,
  );
  if (event.target && isHeartButton) {
    changeHeartIcon(event.target);
  }
};

const checkLiked = () => {
  const classList = feedHeartIcon.classList;
  const classListArray = classList.value.split(' ');
  const isLiked = classListArray.find((classItem) =>
    classItem === filledIconClassName ? true : false,
  );
  return isLiked;
};

const setLikeHit = () => {
  const likeHitSpan = document.querySelector('.like-hit');
  let likeHit = Number(document.querySelector('.like-hit').innerText);
  const isLiked = checkLiked();
  isLiked ? (likeHitSpan.innerHTML = likeHit + 1) : (likeHitSpan.innerHTML = likeHit - 1);
};

const changeHeartIcon = (icon2Change) => {
  const classList = icon2Change.classList;

  const classListArray = classList.value.split(' ');
  const isSolidIcon = classListArray.find((classItem) =>
    classItem === borderIconClassName ? true : false,
  );

  classList.toggle('is-liked');
  if (isSolidIcon) {
    classList.remove(borderIconClassName);
    classList.add(filledIconClassName);
  } else {
    classList.remove(filledIconClassName);
    classList.add(borderIconClassName);
  }
};

const handleLikeHit = () => {
  changeHeartIcon(feedHeartIcon);
  setLikeHit();
  animateHeart();
};

const animateHeart = () => {
  const feedImageWrapperHeart = feedImageWrapper.querySelector('.fa-heart');
  const animantionValue = `heart-move 3s`;

  const isLiked = checkLiked();
  if (isLiked) {
    feedImageWrapperHeart.style.animation = animantionValue;
    setTimeout(() => {
      feedImageWrapperHeart.style.removeProperty('animation');
    }, 2000);
  }
};

feedImage.addEventListener('dblclick', handleLikeHit);
feedHeartIcon.addEventListener('click', handleLikeHit);

commentList.addEventListener('click', handleCommentHeartIcon);
