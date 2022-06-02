// HTML posting_addComment_text : input tag
// HTML addCommentButton : button tag
// HTML feedPostOthersComment : div tage

const ADD_COMMENT_INPUT = document.querySelector('.posting_addComment_text');
const ADD_COMMENT_BUTTON = document.querySelector('.posting_addComment_button');
const FEED_POST_OTHERS_COMMENT = document.querySelector('.posting_othersComment');

const onAdd = () => {
  const INPUT = ADD_COMMENT_INPUT.value;

  const TEXT = document.createElement('p');
  TEXT.setAttribute('class', 'posting_othersComment_comment');
  TEXT.innerHTML = INPUT;

  FEED_POST_OTHERS_COMMENT.appendChild(TEXT);
  ADD_COMMENT_INPUT.value = '';
  ADD_COMMENT_INPUT.focus();
}

ADD_COMMENT_BUTTON.addEventListener('click', onAdd);
