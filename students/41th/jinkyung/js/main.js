const commentAddBox = document.getElementById("add_comment");
const commentAddEl = document.getElementById("comments");
const addBtn = document.getElementById("blue_btn")[0];

const commentBox = document.getElementById("comment_wrap");
const commentInput = document.getElementById("comment_input");

function addComment() {
  const text = commentInput.value;

  const item = document.createElement("li");
  item.innerHTML = text;

  commentBox.appendChild(item);
  commentInput.value = "";
  commentInput.focus();
}

commentInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addComment();
  }
  return;
});
