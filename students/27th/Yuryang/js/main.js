// #1. 유효성 검사
//isValidComment 

const isCommentValid = validateComment ();

function addComment () {
  if(!isCommentValid) 
  
  return alert("댓글을 입력해 주세요!")
}

// #2. 댓글창 입력하면 댓글 올라오게 구현 


// pseudo code
//1. textarea (#newComment) 요소에 내용을 쓰고 
//2. 단 textarea(#newComment)에 내용이 들어가지 않는 경우에는 댓글이 입력되지 않아야 한다.
//3. 버튼을 클릭 button click event 혹은 submit을 하면 
//4  li 안에 user id 정보와 댓글 content 내용이 들어가고 
//5. ul.appendchild("li") 
//6. div.appenchild("ul") 

// const addComment = document.querySelector("#newComment");
const submitButton = documnet.querySelector("#commentSubmit");
const repleArea = document.querySelector(".commentsRepleArea");
const commentContainer= document.querySelector(".commentArea");

function buttonActivation(){
  if (newComment.value.length) { 
    submitButton.classList.remove("deactivated");
  }  
  // css로 .deactivated
  // js로 .deactivated를 조작
  // 처음에는 html코드상 .deactivated가 있는 상태이고, 
  // newComment.value.length가 있을 때 .deactivated를 html class를 제거한다
}

function createComment(){
  const addTextComment = commentContent.textContent.split('<div class="commentArea">').split('</div>');
  const commentContainer= document.querySelector(".commentArea");
  if (commentContent.textContent){
  commentContent.textContent = 
  `<div class="commentArea">
    <ul class="commentContent">
    <li class="commentId">user_test_1</li>
    <li class="comment">${newComment.textContent}</li>
  </ul>
  <!-- ...inlineblock/width/white-space/text-overflow:ellipsis/overflow:hidden 적용 -->
  <ul class="commentPart2">
    <li class="moreComment">더 보기</li>
    <li class="commentTime">42분 전</li>
    <li class="heartIcon">
      <i class="far fa-heart"></i>
    </li>
  </ul><${commentContainer}/div>`};
    // 댓글이 등록 됐을 때 초기화
    newComment.textContent = "";
}

submitButton.addEventlistener("click keyup", ()=>{ 
  const newComment = document.querySelector("#newComment");
  buttonActivation();
  createComment();
});
