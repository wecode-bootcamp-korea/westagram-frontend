//구현할 기능 : 댓글 내용 입력 후 Enter press, 혹은 게시 버튼 클릭 시 댓글 추가 기능
//1. 댓글창을 자바스크립트로 가져온다.
const comment = document.getElementsByClassName("comment")[0];
const commentBtn = document.getElementsByClassName("comment_upload_btn")[0];

function commentValue() {
  //2.new_text_comment class 가져오고  그 안에 id 들어갈 span, txt 들어갈 span
  const commentBox = document.getElementsByClassName("new_text_comment")[0];

  const newComment = document.createElement("div");
  const newId = document.createElement("span");
  const newTxt = document.createElement("span");

  newComment.classList.add("text_comment");
  newId.classList.add("id");
  newTxt.classList.add("txt");

  newId.innerHTML = "parkjiyeoun";
  newTxt.innerHTML = comment.value;

  newComment.appendChild(newId);
  newComment.appendChild(newTxt);

  commentBox.appendChild(newComment);
}

//버튼 클릭하면 함수 실행
commentBtn.addEventListener("click", (e) => {
  commentValue();
  comment.value = "";
});

comment.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    commentValue();
    comment.value = "";
  }
});
