(() => {
  const commentButtonAtController = document.querySelector('.fa-comment');
  const commentWrapper = document.querySelector('.comment-wrapper');
  const commentSubmitButton = document.querySelector('.comment-submit-button');
  const commentButton = document.querySelector('.button-primary');
  const commentInput = document.querySelector('input[name=comment]');

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
    commentLikeButton.className = 'far fa-heart';
    commentLikeButtonWrapper.appendChild(commentLikeButton);

    feedUserId.innerHTML = userId;
    feedContent.innerHTML = commentMessage;

    feedComment.appendChild(feedUserId);
    feedComment.appendChild(feedContent);

    feedCommentItem.appendChild(feedComment);
    feedCommentItem.appendChild(commentLikeButtonWrapper);

    feedCommentList.appendChild(feedCommentItem);
  };

  const checkFilled = (input) => {
    const hasValue = input.value;
    if (!hasValue) return false;
    return true;
  };

  const submitComment = (event) => {
    event.preventDefault();
    makeComment('yunkukpark', commentInput.value);
    commentInput.value = null;
    commentButton.disabled = true;
  };

  commentWrapper.addEventListener('keyup', handleCommentButton);
  commentSubmitButton.addEventListener('click', submitComment);

  commentButtonAtController.addEventListener('click', () => {
    commentInput.focus();
  });
})();
