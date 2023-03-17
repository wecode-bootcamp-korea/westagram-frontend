function addComent() {
  const leftComment = document.getElementById("left-comment").value;
  const commentItem = document.createElement("li");
  document.getElementById("left-comment").value = "";

  event.preventDefault();
  //console.log("this ran");

  if (leftComment.length > 0) {
    document.getElementById("comment-wrapper").appendChild(commentItem);
    commentItem.innerText = leftComment;
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
