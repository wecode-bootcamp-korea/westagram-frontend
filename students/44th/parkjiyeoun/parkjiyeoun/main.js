//구현할 기능 : 댓글 내용 입력 후 Enter press, 혹은 게시 버튼 클릭 시 댓글 추가 기능

//1. 댓글창을 자바스크립트로 가져온다.
const comment = document.getElementsByClassName("comment")[0];
const commentBtn = document.getElementsByClassName("comment_upload_btn")[0];
//2.댓글창을 keyup 했을 떄 글자수가 1개라도 넘어가면 게시버튼 활성화
commentBtn.disabled = true;

function commentValue() {
  if (comment.value.length > 0) {
    commentBtn.disabled = false;
    commentBtn.style.color = "#4c9eee#";
    //commentBtn.classList.remove("comment_upload_btn_off");
  } else {
    commentBtn.disabled = true;
  }
}

comment.addEventListener("keyup", commentValue);

//3. enter 키 누르거나 || 게시 버튼 누르면 댓글 추가
