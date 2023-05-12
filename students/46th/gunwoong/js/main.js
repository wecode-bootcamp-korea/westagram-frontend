const feedsComment = document.querySelector(".feeds__comment");
const feedsCommentInput = document.querySelector(".feeds__comment__input");
const feedsCommentButton = document.querySelector(".feeds__comment__button");
const feedsCommentForm = document.querySelector("form");

function CreateComment() {
  const newComment = [];
  newComment.push(feedsCommentInput.value);

  const li = document.createElement("li");
  li.className = "comment-list";
  feedsComment.appendChild(li);

  const span = document.createElement("span");
  span.className = "comment-text";
  span.innerText = newComment;
  li.appendChild(span);

  const button = document.createElement("button");
  button.className = "comment-delete";
  button.innerText = "❌";
  li.appendChild(button);

  feedsCommentInput.value = "";
}

feedsCommentButton.addEventListener("click", CreateComment);
feedsCommentForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
console.log(newComment);
function DeleteComment() {}
