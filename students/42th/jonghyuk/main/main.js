const comment = document.querySelector(".writemention");
const addCommentbtn = document.querySelector(".writebtn");

console.log(comment);
console.log(addCommentbtn);

function checkInput() {
  const newComment = comment.value;
}

function addComment(value) {
  const commentLists = document.getElementById("commentWrapper");
  const newCommentList = document.createElement("li");
  const defaltComment = `<span class="name">eenooyos</span><span> ${value}</span><span class="delete"> x </span>`;

  newCommentList.innerHTML = defaltComment;
  commentLists.appendChild(newcommentList);
  commentInput.value = "";

  deleteComment;
}
