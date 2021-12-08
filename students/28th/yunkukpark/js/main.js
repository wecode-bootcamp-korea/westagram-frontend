const commentWrapper = document.querySelector('.comment-wrapper');
const commentSubmitButton = document.querySelector('.comment-submit-button');
const commentButton = document.querySelector('.user-info-button');
const commentInput = document.querySelector('input[name=comment]');

const setLayout = () => {
  const mainLeft = document.querySelector('.main-left');
  const mainRight = document.querySelector('.main-right');

  const mainLeftXoffset = mainLeft.offsetLeft;
  const mainLeftWidth = mainLeft.offsetWidth;
  const mainLeftMarginRight = 28;

  const mainRightXoffset = `${mainLeftXoffset + mainLeftWidth + mainLeftMarginRight}px`;

  mainRight.style.left = mainRightXoffset;
};

// Comment 관련 EventListener

const handleCommentButton = (event) => {
  const isFilled = checkFilled(commentInput);

  isFilled ? (commentButton.disabled = false) : (commentButton.disabled = true);
  if (!isFilled) return;

  if (event.code === 'Enter') {
    makeComment('yunkukpark', commentInput.value);
    commentInput.value = null;
    commentButton.disabled = true;
  }
};

const checkFilled = (input) => {
  const hasValue = input.value;
  if (!hasValue) return false;
  return true;
};

const makeComment = (userId = 'default id', commentMessage) => {
  const feedCommentList = document.querySelector('.feed-comment-list');

  const feedCommentItem = document.createElement('li');
  feedCommentItem.className = 'feed-comment-item';

  const feedComment = document.createElement('dl');
  feedComment.className = 'feed-desc feed-comment';

  const feedUserId = document.createElement('dt');
  feedUserId.className = 'feed-comment user-id';

  const feedContent = document.createElement('dd');
  feedContent.className = 'feed-comment feed-content';

  const commentLikeButtonWrapper = document.createElement('button');
  const commentLikeButton = document.createElement('i');
  commentLikeButton.className = 'ic-heart';
  commentLikeButtonWrapper.appendChild(commentLikeButton);

  feedUserId.innerHTML = userId;
  feedContent.innerHTML = commentMessage;

  feedComment.appendChild(feedUserId);
  feedComment.appendChild(feedContent);

  feedCommentItem.appendChild(feedComment);
  feedCommentItem.appendChild(commentLikeButtonWrapper);

  feedCommentList.appendChild(feedCommentItem);

  console.log(feedCommentItem);
};

const submitComment = (event) => {
  event.preventDefault();
  makeComment('yunkukpark', commentInput.value);
  commentInput.value = null;
  commentButton.disabled = true;
};

// 바로 옆에 있는 Button on/Off
commentWrapper.addEventListener('keyup', handleCommentButton);
commentSubmitButton.addEventListener('click', submitComment);
// Button 눌렀을 때 Comment 남기기

// Window 관련 EventListener
window.addEventListener('load', setLayout);
window.addEventListener('resize', setLayout);
