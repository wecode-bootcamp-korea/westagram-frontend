function addComent(event) {
  //const inputComment = document.getElementById("left-comment");
  const leftComment = document.getElementById("left-comment").value;
  const commentItem = document.createElement("li");
  const heartBtn = document.createElement("i");
  const ulspan = document.createElement("span");
  const deleteBtn = document.createElement("button");
  const ulContainer = document.getElementById("comment-wrapper");
  document.getElementById("left-comment").value = "";

  heartBtn.className = "heart-btn";
  deleteBtn.className = "delete-btn";

  event.preventDefault();
  //console.log("this ran");

  if (leftComment.length > 0) {
    commentItem.innerText = leftComment;
    ulContainer.appendChild(commentItem);

    commentItem.appendChild(ulspan);
    ulspan.append(heartBtn);
    ulspan.append(deleteBtn);
    deleteBtn.addEventListener("click", () => commentItem.remove());
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
