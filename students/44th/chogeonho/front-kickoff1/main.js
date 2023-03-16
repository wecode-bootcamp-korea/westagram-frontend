function addComent() {
  const leftComment = document.getElementById("left-comment").value;
  const commentItem = document.createElement("li");
  commentItem.innerText = leftComment;
  document.getElementById("comment-wrapper").appendChild(commentItem);
  event.preventDefault();
  //console.log("this ran");

  if (leftComment.length > 0) {
    return;
  } else {
    alert("댓글을 입력하세요");
  }
}

// const submitBtn = document.getElementById("commentSubmit");
// submitBtn.addEventListener("click", () => {
//   if(checkInput) {
//     addComent
//   }
// });

const submitBtn = document.getElementById("comment-submit");
submitBtn.addEventListener("click", addComent);
