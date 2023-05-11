const inputBox = document.querySelector("#comment"); //input 변수 할당
const buttonBox = document.querySelector("#commentBt"); //button 변수 할당

//게시 버튼 클릭했을 때 댓글 기능 추가
//1) 내가 쓴 input의 값을 가져온다.

function commmentFun() {
  const newCommentSpanId = document.createElement("span");
  const newCommentSpan = document.createElement("span"); // 2) 내가 입력한 값이 들어갈 공간만들어주기
  const newCommentDiv = document.createElement("div");
  const newCommentLi = document.createElement("li");
  const newCommentImg = document.createElement("img");
  const commentBody = document.querySelector("ul");
  newCommentImg.src = "/heart.png";

  if (inputBox.value !== "") {
    inputBox.value; //1) input에 내가 입력한 값 그 자체
    newCommentSpan.innerText = inputBox.value;
    newCommentLi.className = "commentList";
    newCommentDiv.appendChild(newCommentSpanId);
    newCommentDiv.appendChild(newCommentSpan);
    newCommentLi.appendChild(newCommentDiv);
    newCommentLi.appendChild(newCommentImg);
    commentBody.appendChild(newCommentLi);
    newCommentSpanId.className = "id";
    newCommentSpanId.innerText = "btsSugar ";
    newCommentImg.className = "commentHeart";

    inputBox.value = "";
  }
}

function commentEnter(event) {
  if (event.keyCode === 13) {
    commmentFun();
    inputBox.value = "";
  }
}

buttonBox.addEventListener("click", commmentFun);
inputBox.addEventListener("keypress", commentEnter);
