const feedsComment = document.querySelector(".feeds__comment");
const feedsCommentInput = document.querySelector(".feeds__comment__input");
const feedsCommentButton = document.querySelector(".feeds__comment__button");
const feedsCommentForm = document.querySelector("form");

function CreateComment() {
  const newComment = feedsCommentInput.value;

  const li = document.createElement("li");
  feedsComment.appendChild(li);

  const span = document.createElement("span");
  span.innerText = newComment;
  li.appendChild(span);

  const button = document.createElement("button");
  button.innerText("❌");
  li.appendChild(button);
}

feedsCommentButton.addEventListener("click", CreateComment);
feedsCommentForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

function DeleteComment() {}
