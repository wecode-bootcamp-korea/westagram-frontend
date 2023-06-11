const writeBtn = document.querySelector(".write-btn");
const commentInput = document.querySelector(".comment-input");
const commentList = document.querySelector(".comment-list");

commentInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const commentText = commentInput.value.trim();

    if (commentText !== "") {
      const newComment = document.createElement("li");
      newComment.textContent = commentText;
      commentList.appendChild(newComment);
      commentInput.value = "";
    }
  }
});

writeBtn.addEventListener("click", function (event) {
  const commentText = commentInput.value;

  if (commentText !== "") {
    const newComment = document.createElement("li");
    newComment.textContent = commentText;
    commentList.appendChild(newComment);
    commentInput.value = "";
  } else {
    alert("pleas insert text");
  }
});
