const commentInput = document.getElementsByClassName("commentInput")[0];
const commentButton = document.getElementsByClassName("commentButton")[0];
const commentList = document.getElementsByClassName("commentList")[0];

function checkInput() {
  if (commentInput.value.length === 0) {
    alert("Enter comment!");
  } else {
    enterComment(commentInput.value);
  }
}

function enterComment(value) {
  const newCommentList = document.createElement("li");
  const newComment = `
  <div>
    <span class="commentUsername">i_am_a_fan</span>
    <span> ${value} </span>
  </div>
  <div class="commentIcons">
    <img class="commentLike" src="images/heart.png" />
    <img class="delete" src="images/trash.png" />
  </div>
  `;

  newCommentList.innerHTML = newComment;
  commentList.appendChild(newCommentList);

  commentInput.value = "";

  const deleteButton = newCommentList.querySelector(".delete");
  deleteButton.addEventListener("click", function () {
    commentList.removeChild(newCommentList);
  });
}

// commentInput.addEventListener("input", checkInput);
commentInput.addEventListener("keydown", function (e) {
  // console.log("enter");
  if (e.keyCode === 13 && commentInput.value.length > 0) {
    enterComment(commentInput.value);
  }
});

commentButton.addEventListener("click", function () {
  if (commentInput.value.length > 0) {
    enterComment(commentInput.value);
  }
});

// // delete comment
// const trashButton = newComment.querySelector(".delete");

// trashButton.addEventListener("click", commentList.removeChild(newComment));

// function enterComment(e) {
//   if (e.key === "Enter" /*&& commentInput.length>0 -> 안 됨 왜?*/) {
//     const newComment = document.createElement("li");
//     // newComment.setAttribute("class", "comment");

//     newComment.innerText = commentInput.value;
//     commentList.appendChild(newComment);
//     commentInput.value = "";
//   }
//   if (commentInput.length <= 0) {
//     commentInput.disabled = true;
//   } //안 된다ㅠ
// }

// function clickComment() {
//   const newComment = document.createElement("li");
//   //li로 했을 때 -> 공백을 치면 나온다 vs. div로 했을 때 -> 공백을 치면 안 나온다
//   // newComment.setAttribute("class", "comment");

//   newComment.innerText = commentInput.value;
//   commentList.appendChild(newComment);
//   commentInput.value = "";
// }
