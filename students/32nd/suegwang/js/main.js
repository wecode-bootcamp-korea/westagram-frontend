const instaForm = document.querySelector("#instaForm");
const commentsContainer = document.querySelector("#comments");

instaForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const usernameInput = instaForm.elements.username;
  const commentInput = instaForm.elements.comment;

  addComment(usernameInput.value, commentInput.value);
  usernameInput.value = "sooboi";
  commentInput.value = "";
});

const addComment = (username, comment) => {
  const newComment = document.createElement("li");
  const bTag = document.createElement("b");

  bTag.append(username);
  newComment.append(bTag);
  newComment.append(` ${comment}`);
  commentsContainer.append(newComment);
};
