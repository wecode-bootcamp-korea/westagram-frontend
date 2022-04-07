const commentInput = document.getElementsByClassName("inputComment")[0];
const commentPostBtn = document.getElementsByClassName("commentBtn")[0];
const newCommentLocation = document.getElementsByClassName("comment")[0];

const addNewComment = () => {
  const newComment = document.createElement("div");

  newComment.innerHTML = `<strong>gud_wns_</strong>
  <span>${commentInput.value}</span>`;

  newCommentLocation.appendChild(newComment);
  commentInput.value = "";
};

commentPostBtn.addEventListener("click", () => {
  if (commentInput.value) {
    addNewComment();
  }
});

function enterkey() {
  if (window.event.keyCode == 13 && commentInput.value) {
    addNewComment();
  }
}
