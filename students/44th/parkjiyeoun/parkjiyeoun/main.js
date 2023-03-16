//구현할 기능 : 댓글 내용 입력 후 Enter press, 혹은 게시 버튼 클릭 시 댓글 추가 기능

//댓글 적는 인풋창을 자바스크립트로 가져온다.
const comment = document.getElementsByClassName("comment")[0];
const commentBtn = document.getElementsByClassName("comment_upload_btn")[0];

//함수: 게시할 댓글을 한 글자 이상 적으면 게시 버튼 비활성화 풀리도록
//(Html에서 설정한 disabled true/ false 로 구분)
//! 문제 : 인풋에 적어넣으면 버튼이 활성화 안됨
function btnChange() {
  if (comment.value.length > 0) {
    commentBtn.disabled = false;
  } else {
    commentBtn.disabled = true;
  }
}

//함수 : 새로운 코멘트를 달아줄 떄 위에 댓글내역(text_comment)에 등록 되게 설정
function commentValue() {
  //새 코멘트 달릴 영역 html에서 불러오기
  const commentBox = document.getElementsByClassName("new_text_comment")[0];
  //commentBox(새 코멘트 달리는 영역) 에 들어가는 새 코멘트 아이디와 댓글 그룹 요소 만들어주기
  const newComment = document.createElement("div");
  const newId = document.createElement("span");
  const newTxt = document.createElement("span");
  //기존 댓글의 class 이름 똑같이 부여
  newComment.classList.add("text_comment");
  newId.classList.add("id");
  newTxt.classList.add("txt");
  //아이디는 "parkjiyeoun"으로 고정, 새 댓글은 comment(인풋)
  newId.innerHTML = "parkjiyeoun";
  newTxt.innerHTML = comment.value;

  newComment.appendChild(newId);
  newComment.appendChild(newTxt);

  commentBox.appendChild(newComment);
}

//버튼 클릭하면 함수 실행
commentBtn.addEventListener("keyup", btnChange);

commentBtn.addEventListener("click", () => {
  commentValue();
  comment.value = "";
});

comment.addEventListener("keydown", (event) => {
  if (event.code === 13) {
    commentValue();
    comment.value = "";
  }
});
