// HTML addCommentText : input tag
// HTML addCommentButton : button tag
// HTML feedPostOthersComment : div tage

const ADD_COMMENT_TEXT = document.querySelector('#addCommentText');
const ADD_COMMENT_BUTTON = document.querySelector('#addCommentButton');
const FEED_POST_OTHERS_COMMENT = document.querySelector('.feedPostOthersComment');

const onAdd = () => {
  const INPUT = ADD_COMMENT_TEXT.value;

  const TEXT = document.createElement('p');
  TEXT.setAttribute('class', 'comment');
  TEXT.innerHTML = INPUT;

  FEED_POST_OTHERS_COMMENT.appendChild(TEXT);
  ADD_COMMENT_TEXT.value = '';
  ADD_COMMENT_TEXT.focus();
}

ADD_COMMENT_BUTTON.addEventListener('click', onAdd);
