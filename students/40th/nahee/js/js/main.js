function addComment() {
  const commentListBox = document.getElementById("commentList");
  const commentText = document.getElementsByClassName("comment")[0];
  const userId = document.getElementById("name").innerText;
  const commentListAdd = document.createElement("div");
  const commentListEl = document.createElement("span");
  const commentUser = document.createElement("a");
  commentUser.innerHTML = userId;
  commentListAdd.appendChild(commentUser);
  commentListEl.innerHTML = commentText.value;
  commentListAdd.appendChild(commentListEl);
  commentListBox.appendChild(commentListAdd);

  commentUser.classList.add = "list";
}

const addButton = document.getElementsByClassName("upload")[0];
addButton.addEventListener("click", addComment);
