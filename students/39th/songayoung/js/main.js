const commentForm = document.querySelector(".comments_form");
const comments = document.querySelector("#comment_input");
const submitButton = document.querySelector(".btn span");

function commentUpdate() {
  const ulbox = document.querySelector(".comments_info.comment_list_ul");
  const liBox = document.createElement("li");
  const pBox = document.createElement("div");
  const userBox = document.createElement("span");
  const commentCtnBox = document.createElement("span");
  let user = "songayoung";

  userBox.setAttribute("class", "user_id");
  commentCtnBox.setAttribute("class", "comment_contents");
  pBox.setAttribute("class", "comments_tit");

  userBox.innerHTML = user;
  commentCtnBox.innerHTML = comments.value;

  pBox.appendChild(userBox);
  pBox.appendChild(commentCtnBox);
  liBox.appendChild(pBox);
  ulbox.appendChild(liBox);
  comments.value = "";
}

commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

submitButton.addEventListener("click", commentUpdate);

comments.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    commentUpdate();
  }
});

comments.addEventListener("keyup", function (e) {
  let commentValue = comments.value;

  if (commentValue.length > 0) {
    submitButton.disabled = false;
    submitButton.style.cursor = "pointer";
    submitButton.style.color = "#1c7ed6";
  } else {
    submitButton.disabled = true;
    submitButton.style.cursor = "default";
    submitButton.style.color = "#bfdffd";
  }
});
