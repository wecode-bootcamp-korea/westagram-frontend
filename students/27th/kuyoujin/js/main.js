const getCommentText = document.getElementById("commentText");
const getPostBtn = document.getElementById("postBtn");
const getCommentResult = document.getElementsByClassName("commentResult")[0];
const getCommentList = document.getElementsByClassName("commentList")[0];

function changePostButtonColor() {
  if (getCommentText.value.length > 0) {
    getPostBtn.style.color = "#4193ef";
  } else if (getCommentText.value.length === 0) {
    getPostBtn.style.color = "#c5e1fa";
  }
}

getCommentText.addEventListener("keyup", changePostButtonColor);

function doUploadPost(e) {
  if (getCommentText.value.length === 0) return;

  const list = document.createElement("li");
  const listATag = document.createElement("a");
  const listPTag = document.createElement("p");

  list.className = "commentResult";
  listATag.className = "writeId";
  listATag.innerHTML = "sodalite.1204";
  listPTag.className = "writeContent";
  listPTag.innerHTML = getCommentText.value;

  getCommentList.appendChild(list);
  list.appendChild(listATag);
  list.appendChild(listPTag);

  e.preventDefault();

  getCommentText.value = null;
}

getPostBtn.addEventListener("submit", doUploadPost);
getPostBtn.addEventListener("click", doUploadPost);
