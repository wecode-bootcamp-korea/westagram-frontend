//구현할 기능 : 댓글 내용 입력 후 Enter press, 혹은 게시 버튼 클릭 시 댓글 추가 기능

//댓글 적는 인풋창을 자바스크립트로 가져온다.
const uploadText = document.getElementById("upload_text");
const uploadBtn = document.getElementById("upload_btn");

//uploadBtn.disabled = true;
//함수: 게시할 댓글을 한 글자 이상 적으면 게시 버튼 비활성화 풀리도록
//(Html에서 설정한 disabled true/ false 로 구분)

//!문제 : 버튼의 색이 계속 비활성화
/* ->해결 : uploadBtn.classList.remove("upload_btn_off");
upload_btn_off class를 없애서 비활성화 시키는 방법
*/

function btnChange() {
  if (uploadText.value.length > 0) {
    uploadBtn.disabled = false;
    uploadBtn.classList.remove("upload_btn_off");
  } else {
    uploadBtn.disabled = true;
    uploadBtn.classList.add("upload_btn_off");
  }
}

//함수 : 새로운 코멘트를 달아줄 떄 위에 댓글내역(text_comment)에 등록 되게 설정
//! 문제 : 내용이 안 써져 있는데 버튼을 누르기만 해도 아이디가 올라감
/*-->해결 :uploadBtn.disabled = true;
        uploadBtn.classList.add("upload_btn_off");
        을 버튼과 텍스트 이벤트 실행함수에 넣어줌
*/
function commentValue() {
  //새 코멘트 달릴 영역 html에서 불러오기
  const commentBox = document.getElementsByClassName("new_text_comment")[0];
  //commentBox(새 코멘트 달리는 영역) 에 들어가는 새 코멘트 아이디와 댓글 그룹 요소 만들어주기
  const newComment = document.createElement("div");
  const newId = document.createElement("span");
  const newTxt = document.createElement("span");
  const newHeartOff = document.createElement("img");
  const newHeartOn = document.createElement("img");
  //기존 댓글의 class 이름 똑같이 부여
  newComment.classList.add("text_comment");
  newId.classList.add("id");
  newTxt.classList.add("txt");
  newHeartOff.classList.add("icon_heart_off");
  newHeartOn.classList.add("icon_heart_on");
  //아이디는 "parkjiyeoun"으로 고정, 새 댓글은 comment(인풋)밸류값 불러옴
  newId.innerHTML = "parkjiyeoun  ";
  newTxt.innerHTML = uploadText.value;

  //새코멘트 그룹 안에 새 댓글 요소 등록
  newComment.appendChild(newId);
  newComment.appendChild(newTxt);
  newComment.appendChild(newHeartOff);
  newComment.appendChild(newHeartOn);
  newHeartOn.classList.remove("icon_heart_on");
  //새코멘트 그룹을 코멘트 달릴 영역에 등록
  commentBox.appendChild(newComment);

  newHeartOff.addEventListener("click", () => {
    newHeartOn.classList.add("icon_heart_on");
    newHeartOff.classList.remove("icon_heart_off");
  });
}

//댓글 적고 버튼 클릭하면 함수 실행
//!문제 : 댓글 입력했는데 등록이 안됨
/*--> 해결 : 
uploadBtn.addEventListener("keyup", btnChange);
에서
uploadText.addEventListener("keyup", btnChange);
변경 
버튼에 이벤트리스너 달아주는 게 아닌 텍스트 : 텍스트에서 키업하면 btnChange함수 실행한다
*/
uploadText.addEventListener("keyup", btnChange);

uploadBtn.addEventListener("click", () => {
  commentValue();
  uploadBtn.disabled = true;
  uploadBtn.classList.add("upload_btn_off");
  uploadText.value = "";
});

uploadText.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    commentValue();
    uploadBtn.disabled = true;
    uploadBtn.classList.add("upload_btn_off");
    uploadText.value = "";
  }
});
