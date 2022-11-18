const commentListBox = document.getElementById("commentList");
const commentInput = document.getElementsByClassName("comment")[0];
function addComment() {
  if (commentInput.value === "") {
    alert("댓글을 입력해 주세요.");
    return;
  }
  const commentAdd = document.createElement("li");
  commentAdd.innerHTML = `<span class='commentAddName'>heehee.hee</span>
<span class="commentText">${commentInput.value}</span>
<button class='deleteComment'>x</button>`;
  const deleteButton = commentAdd.querySelector("button");

  commentListBox.appendChild(commentAdd);
  commentInput.value = "";
  deleteButton.addEventListener("click", function () {
    deleteComment(commentAdd);
  });
}

function deleteComment(li) {
  li.remove();
}

function enterkey() {
  if (window.event.keyCode == 13) {
    addComment();
  }
}

const addButton = document.getElementsByClassName("upload")[0];

commentInput.addEventListener("keyup", enterkey);
addButton.addEventListener("click", addComment);
