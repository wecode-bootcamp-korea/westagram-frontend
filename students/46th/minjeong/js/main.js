const commentInput = document.querySelector(".comment");
const commentList = document.getElementById("comment-wrapper");

function addComment() {
  const commentText = commentInput.value;
  const commentElement = document.createElement("li");
  commentElement.textContent = commentText;
  commentList.appendChild(commentElement);
  commentInput.value = "";
}

commentInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addComment();
  }
});

const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", function () {
  addComment();
});
