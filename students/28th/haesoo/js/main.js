const commentContainer = document.querySelector(".js-feed-comment");
const commentInput = document.querySelector(".js-comment-input");
const commentButton = document.querySelector(".js-comment-button");

commentInput.addEventListener("keyup", handleInput);
commentButton.addEventListener("click", handleClick);

function handleInput(event) {
  const comment = commentInput.value;
  if (comment && event.keyCode === 13) {
    makeComment(comment);
  }
}

function handleClick() {
  const comment = commentInput.value;
  if (comment) {
    makeComment(comment);
  }
}

function makeComment(text) {
  const commentWrapper = document.createElement("ul");
  commentWrapper.className = "comment-wrapper";

  const comment = `
    <span class="comment-id">__jaehyunjeong</span>
    <span class="comment-text">${text}</span>
    <button class="delete-button">X</button>
  `;
  commentWrapper.innerHTML = comment;
  commentContainer.appendChild(commentWrapper);
  commentInput.value = "";

  deleteComment(commentWrapper);
}

function deleteComment(comment) {
  const deleteButton = comment.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    comment.remove();
  });
}
