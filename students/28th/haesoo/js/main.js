const commentContainer = document.querySelector(".js-feed-comment");
const commentInput = document.querySelector(".js-comment-input");
const commentButton = document.querySelector(".js-comment-button");

commentInput.addEventListener("keyup", handleInput);
commentButton.addEventListener("click", handleClick);

function handleInput(event) {
  const comment = commentInput.value;
  if (comment && event.keyCode === 13) {
    makeComment(comment);
    commentInput.value = "";
  }
}

function handleClick() {
  const comment = commentInput.value;
  if (comment) {
    makeComment(comment);
    commentInput.value = "";
  }
}

function makeComment(text) {
  return (commentContainer.innerHTML = `
      <div class="comment-wrapper">
        <span class="comment-id">__jaehyunjeong</span>
        <span class="comment-text">${text}</span>
      </div>
    `);
}
