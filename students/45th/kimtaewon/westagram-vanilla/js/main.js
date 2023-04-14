// 댓글 입력 후 엔터키 누르거나 or 게시 버튼 누르면 댓글이 추가 되는 기능 구현

const commentElement = document.getElementById('comment');
const commentPostBtn = document.getElementById('postBtn');

// input value 가 입력되면 게시 버튼 활성화
const activePostBtn = () => {
  let commentValue = commentElement.value;
  return commentPostBtn.className = (commentValue.length > 0 ? "postBtnActive" : "postBtnDefault");
}

//  엔터거나 클릭이면 아래 댓글창 추가 실행
const creatComment = (text) => {
  // 댓글 포스팅기능 완료

  // 유저가 steve_jobs 인 p태그 생성
  let commentUser = document.createElement("p")
  commentUser.innerText = "steve_jobs"
  commentUser.className = "commentUser";
  console.log("유저 생성");
  // 입력받은 밸류 값을 이너택스트로 가진 P태그 생성
  let commentText = document.createElement("p")
  commentText.className = "commentText";
  commentText.innerText = text;
  console.log("내용 생성");
  
  // 유저와 코맨트 감싸는class 명이 commentList 인 div 박스 만들기
  let commentList = document.createElement("div")
  commentList.className = "commentList";
  console.log("코맨트 리스트 생성");

  commentList.appendChild(commentUser);
  commentList.appendChild(commentText)

  // 댓글박스에 댓글리스트 추가
  document.getElementById('postCommentBox').appendChild(commentList);
  console.log('입력한 댓글 추가 완료');
  console.log('크리에이트 영역 : ', commentElement.value);
  commentElement.value = "";
}

const posting = () => {

  if (commentElement.value.length !==0) {
  creatComment(commentElement.value);
  }
}

const post = (keyEvent) => {
   activePostBtn();
  if(keyEvent.keyCode === 13) {
    return posting();
  } else {
    return commentPostBtn.addEventListener('click', posting);
  }
}

// 키업 할때 포스트 함수 실행
commentElement.addEventListener('keyup', post);







  



