(() => {
  const commentButtonAtController = document.querySelector('.fa-comment');
  const commentWrapper = document.querySelector('.comment-wrapper');
  const commentSubmitButton = document.querySelector('.comment-submit-button');
  const commentButton = document.querySelector('.button-primary');
  const commentInput = document.querySelector('input[name=comment]');

  const submitComment = (event) => {
    event.preventDefault();
    createComment('yunkukpark', commentInput.value);
    commentInput.value = null;
    commentButton.disabled = true;
  };

  const createComment = (userId = 'default id', commentMessage) => {
    const feedCommentList = document.querySelector('.feed-comment-list');
    const feedCommentItem = document.createElement('li');
    feedCommentItem.classList.add('feed-comment-item');
    const feedComment = `
      <dl class="feed-desc feed-comment">
        <dt class="feed-comment user-id">${userId}</dt>
        <dd class="feed-comment feed-content">${commentMessage}</dd>
      </dl>
      <div>
        <button type="button">
          <i class="fa-heart far"></i>
        </button>
        <button type="button">
          <i class="fas fa-times"></i>
        </button>
      </div>`;
    feedCommentItem.innerHTML = feedComment;
    feedCommentList.appendChild(feedCommentItem);

    handleDeleteComment(feedCommentItem);
  };

  const handleDeleteComment = (feedCommentItem) => {
    const deleteTrigger = feedCommentItem.querySelector('.fa-times');
    deleteTrigger.addEventListener('click', () => deleteComment(feedCommentItem));
  };

  const deleteComment = (feedCommentItem) => {
    feedCommentItem.remove();
  };

  const handleCommentButton = (event) => {
    const isFilled = checkFilled(commentInput);

    isFilled ? (commentButton.disabled = false) : (commentButton.disabled = true);
    if (!isFilled) return;

    if (event.code === 'Enter') {
      createComment('yunkukpark', commentInput.value);
      commentInput.value = null;
      commentButton.disabled = true;
    }
  };

  const checkFilled = (input) => {
    const hasValue = input.value;
    if (!hasValue) return false;
    return true;
  };

  const init = () => {
    commentWrapper.addEventListener('keyup', handleCommentButton);
    commentSubmitButton.addEventListener('click', submitComment);
    commentButtonAtController.addEventListener('click', () => {
      commentInput.focus();
    });
  };

  init();
})();
