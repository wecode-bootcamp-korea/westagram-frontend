(() => {
  const feedImage = document.querySelector('.feed-main');
  const feedImageWrapper = document.querySelector('.feed-image-wrapper');
  const feedControler = document.querySelector('.feed-controler');
  const feedHeartIcon = feedControler.querySelector('.fa-heart');
  const commentList = document.querySelector('.feed-comment-list');

  const borderIconClassName = 'far';
  const filledIconClassName = 'fas';

  const handleCommentHeartIcon = (event) => {
    const classListArray = event.target.classList.value.split(' ');
    const isHeartButton = classListArray.find((classItem) => classItem === 'fa-heart');
    if (event.target && isHeartButton) {
      changeHeartIcon(event.target);
    }
  };

  const handleLikeHit = () => {
    changeHeartIcon(feedHeartIcon);
    setLikeHit();
    animateHeart();
  };

  const changeHeartIcon = (icon2Change) => {
    const targetClassList = icon2Change.classList;
    targetClassList.toggle('is-liked');
    targetClassList.toggle(borderIconClassName);
    targetClassList.toggle(filledIconClassName);
  };

  const setLikeHit = () => {
    const likeHitSpan = document.querySelector('.like-hit');
    let likeHit = Number(document.querySelector('.like-hit').innerText);
    const isLiked = checkLiked();
    isLiked ? (likeHitSpan.innerText = likeHit + 1) : (likeHitSpan.innerText = likeHit - 1);
  };

  const animateHeart = () => {
    const feedImageWrapperHeart = feedImageWrapper.querySelector('.fa-heart');
    const animationValue = `heart-move 3s`;

    const isLiked = checkLiked();
    if (isLiked) {
      feedImageWrapperHeart.style.animation = animationValue;
      setTimeout(() => {
        feedImageWrapperHeart.style.removeProperty('animation');
      }, 2000);
    }
  };

  const checkLiked = () => {
    const classList = feedHeartIcon.classList;
    const classListArray = classList.value.split(' ');
    return classListArray.find((classItem) => classItem === filledIconClassName);
  };

  const init = () => {
    feedImage.addEventListener('dblclick', handleLikeHit);
    feedHeartIcon.addEventListener('click', handleLikeHit);
    commentList.addEventListener('click', handleCommentHeartIcon);
  };

  init();
})();
