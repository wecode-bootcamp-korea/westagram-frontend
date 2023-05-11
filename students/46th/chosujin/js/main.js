const inputBox = document.querySelector("#comment"); //input 변수 할당
const buttonBox = document.querySelector(".commentBt"); //button 변수 할당
const commentHeart = document.querySelector(".fa-regular.fa-heart"); //하트에 변수할당

//게시 버튼 클릭했을 때 댓글 기능 추가
//1) 내가 쓴 input의 값을 가져온다.

function commentFun() {
  const newCommentSpanId = document.createElement("span");
  const newCommentSpan = document.createElement("span"); // 2) 내가 입력한 값이 들어갈 공간만들어주기
  const newCommentDiv = document.createElement("div");
  const newCommentLi = document.createElement("li");
  const newCommentImg = document.createElement("i");
  const newCommentBt = document.createElement("button");
  const commentBody = document.querySelector("ul");

  if (inputBox.value !== "") {
    inputBox.value; //1) input에 내가 입력한 값 그 자체
    newCommentSpan.innerText = inputBox.value;
    newCommentLi.className = "commentList";
    newCommentDiv.appendChild(newCommentSpanId);
    newCommentDiv.appendChild(newCommentSpan);
    newCommentLi.appendChild(newCommentDiv);
    newCommentLi.appendChild(newCommentDiv);
    newCommentLi.appendChild(newCommentImg);
    newCommentLi.appendChild(newCommentBt);
    commentBody.appendChild(newCommentLi);
    newCommentSpanId.className = "id";
    newCommentSpanId.innerText = "btsSugar ";

    inputBox.value = "";
  }
}

function heart() {
  commentHeart.classList.add("fa-solid", "fa-heart");
  commentHeart.style.color = "red";
}

function commentEnter(event) {
  if (event.keyCode === 13) {
    commentFun();
    inputBox.value = "";
  }
}

commentHeart.addEventListener("click", heart);
buttonBox.addEventListener("click", commentFun);
inputBox.addEventListener("keypress", commentEnter);
