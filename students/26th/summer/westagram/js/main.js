// 댓글 input 창에 엔터치거나 "게시" 누르면 댓글 추가되도록 createElement로 요소 생성해서, input에 입력한 값이 추가 되어야합니다.

const inputComment = document.getElementsByClassName("writeComment")[0];
const comments = document.getElementsByClassName("comments")[0];
const postBtn = document.getElementsByClassName("post")[0];
let comment = "";
let commentList = "";

onInputComment = (e) => {
  comment = e.target.value;
  console.log(e);
  // if (e.code == "Enter") {
  //   postComment();
  // }
};

onClickPost = () => {
  if (!comment) {
    return;
  }
  postComment();
  if (window.event.code === "Enter") {
    postComment();
    return;
  }
};

const postComment = () => {
  commentList = document.createElement("li");
  commentList.classList.add("comment");
  commentList.textContent = comment;
  comments.appendChild(commentList);
  inputComment.value = "";
};

inputComment.addEventListener("keyup", onInputComment);
postBtn.addEventListener("click", onClickPost);
// postBtn.addEventListener("keydown", onKeyDown);
