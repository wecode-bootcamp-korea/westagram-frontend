// input element
const commentTextElement = document.getElementById("addCommentText");
// add button element
const addCommentBtnElement = document.getElementById("addComment");
// comments list(<ul> tag) element
const commentListElement = document.getElementById("commentList");
// profile name element
const nameOfAuthorElement = document.getElementsByClassName("nameOfAuthor")[0];

// click event of button
addCommentBtnElement.addEventListener("click", function (e) {
  createTagAndInputText();
});

// keydown event of enter key
commentTextElement.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    createTagAndInputText();
  }
});

// create 'li' tag and insert text to input field
function createTagAndInputText() {
  let commentText = commentTextElement.value;
  let newCommentList = document.createElement("li");

  /// <span> tag No.1 = insert profile name
  const nameOfAuthorText = nameOfAuthorElement.textContent;
  let createAuthorInComment = document.createElement("span");
  createAuthorInComment.innerText = nameOfAuthorText;
  createAuthorInComment.style.fontWeight = "600";
  createAuthorInComment.style.fontSize = "14px";
  createAuthorInComment.style.marginRight = "5px";

  /// <span> tag No.2 = insert text of input field
  let createTextInListTag = document.createElement("span");
  createTextInListTag.innerText = commentText;

  /// append list-------------------------------
  commentListElement.appendChild(newCommentList);

  newCommentList.appendChild(createAuthorInComment);
  newCommentList.appendChild(createTextInListTag);

  /// delete comment input field(clear)
  commentTextElement.value = "";
}
