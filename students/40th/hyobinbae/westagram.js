//1. 댓글달기 => input으로 keyup get input 받아서 그대로
const getComment = document.getElementsByClassName("comment")[0];
const postBtn = document.getElementsByClassName("post")[0];
const list = document.getElementById("commentList");

const isComment = () => {
  const commentValue = getComment.value;
  if (commentValue.length > 0) {
    return true;
  } else return false;
};

const btnActive = () => {
  postBtn.disabled = isComment ? false : true;
  postBtn.style.opacity = isComment ? 1 : 0.5;
};

const postComment = () => {
  const value = getComment.value;

  const newCommentList = document.createElement("li");
  newCommentList.className = "listAlign";

  const newCommentDiv = document.createElement("div");

  const newCommentSpan = document.createElement("span");
  newCommentSpan.className = "userID";
  newCommentSpan.innerText = "ameliee_108 ";

  const newCommentContents = document.createElement("span");
  newCommentContents.innerText = value;

  const newCommentDel = document.createElement("span");
  newCommentDel.innerText = "x";

  newCommentList.appendChild(newCommentDiv);
  newCommentDiv.appendChild(newCommentSpan);
  newCommentDiv.appendChild(newCommentContents);
  newCommentList.appendChild(newCommentDel);

  list.appendChild(newCommentList);
};

const CommentPost = () => {
  getComment.addEventListener("keyup", btnActive);
  postBtn.addEventListener("click", postComment);
};

CommentPost();
