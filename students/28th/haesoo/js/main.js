const commentContainer = document.querySelector(".js-feed-comment");
const commentInput = document.querySelector(".js-comment-input");
const commentButton = document.querySelector(".js-comment-button");

commentInput.addEventListener("keyup", handleInput);
commentButton.addEventListener("click", handleClick);

function handleInput(event) {
  if (event.keyCode === 13) {
    const comment = event.target.value;
    makeComment(comment);
    comment = "";
  }
}

function handleClick() {
  const comment = commentInput.value;
  makeComment(comment);
}

function makeComment(text) {
  const commentWrapper = document.createElement("div");
  const id = document.createElement("span");
  const comment = document.createElement("span");

  id.textContent = "__jaehyunjeong";
  comment.textContent = text;
  commentWrapper.className = "comment-wrapper";
  id.className = "comment-id";
  comment.className = "comment-text";
  commentWrapper.appendChild(id);
  commentWrapper.appendChild(comment);

  commentContainer.appendChild(commentWrapper);
  commentInput.value = "";
}
