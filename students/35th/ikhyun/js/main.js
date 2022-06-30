let comment = document.querySelectorAll(".comment");
let submit = document.querySelectorAll(".submit");
let commentTime = document.querySelectorAll(".comment-time");
let newCommentParents = document.querySelectorAll(".create-comment-div");

let idArr = ["Wework", "Wecode", "HTML", "CSS", "JavaScript"];

for (let i = 0; i < comment.length; i++) {
  function createComment() {
    if (comment[i].value) {
      let createCommentDiv = document.createElement("div");
      createCommentDiv.className = "create-comment";
      newCommentParents[i].appendChild(createCommentDiv);

      let createNewCommentDiv = document.createElement("div");
      createNewCommentDiv.className = "new-comment";
      createCommentDiv.appendChild(createNewCommentDiv);

      let createIconDiv = document.createElement("div");
      createIconDiv.className = "delete-heart";
      createCommentDiv.appendChild(createIconDiv);

      let randomNumber = Math.floor(Math.random() * 5);

      let newUserId = document.createElement("span");
      newUserId.className = "user-id";
      newUserId.innerHTML = idArr[randomNumber];
      createNewCommentDiv.appendChild(newUserId);

      let newComment = document.createElement("span");
      newComment.className = "user-comment";
      newComment.innerHTML = comment[i].value;
      createNewCommentDiv.appendChild(newComment);

      let heartIcon = document.createElement("i");
      heartIcon.className = "fa-regular fa-heart";
      createIconDiv.appendChild(heartIcon);

      let deleteIcon = document.createElement("i");
      deleteIcon.className = "fa-solid fa-trash";
      createIconDiv.appendChild(deleteIcon);

      comment[i].value = "";
      commentTime[i].innerHTML = "방금전";
      submit[i].style.opacity = "";
      submit[i].style.cursor = "";
      heartIcon.addEventListener("click", function () {
        heartIcon.style.color === "red"
          ? ((heartIcon.style.color = ""),
            (heartIcon.className = "fa-regular fa-heart"))
          : ((heartIcon.style.color = "red"),
            (heartIcon.className = "fa-solid fa-heart"));
      });
      deleteIcon.addEventListener("click", function () {
        createCommentDiv.remove();
        commentTime[i].innerHTML = "";
      });
    }
  }
  function createCommentByEnter(event) {
    if (comment[i].value) {
      submit[i].style.opacity = "1";
      submit[i].style.cursor = "pointer";
      if (event.key === "Enter") {
        createComment();
      }
    } else {
      submit[i].style.opacity = "";
      submit[i].style.cursor = "";
    }
  }
  comment[i].addEventListener("keyup", createCommentByEnter);
  submit[i].addEventListener("click", createComment);
}
