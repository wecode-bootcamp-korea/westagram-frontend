const leftComment = document.getElementById("leftComment");
const commentSubmit = document.getElementById("commentSubmit");

function checkInput() {
  const newComment = leftComment.value;
  if (newComment.length > 0) {
    addComment(newComment);
  } else if (window.event.code === "enter") {
    if (newComment.length > 0) {
      addComment(newComment);
    } else {
      alert("댓글을 입력하세요!");
    }
  } else {
    event.preventDefault();
  }
}
