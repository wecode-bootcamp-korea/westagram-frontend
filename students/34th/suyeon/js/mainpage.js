//1. 게시 버튼 활성화 또는 비활성화 시키는 방법

//선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환한다. 일치하는 요소가 없으면 null을 반환.
const mineCommentInput = document.querySelector(".myCommentInput");
const commentButton = document.querySelector(".myCommentButton");

//버튼이 활성화되면 색깔이 파란색으로 바뀌고, 커서가 포인터 형태로 전환
function commentButtonActive() {
  commentButton.style.color = "#0195f7";
  commentButton.disabled = false;
  commentButton.style.cursor = "pointer";
}

//버튼이 비활성화되면 색깔이 본래의 색으로 돌아오고, 커서가 디폴트 형태로 전환
function commentButtonInactive() {
  commentButton.style.color = "#c1e2f8";
  commentButton.disabled = true;
  commentButton.style.cursor = "default";
}

//인풋창에 이벤트리스너를 활성화 시키기.
//value값에 string이나 number가 들어가게 되므로 ""(공백)이 아니면 이라는 조건을 걸어주었다.
mineCommentInput.addEventListener("keyup", () => {
  mineCommentInput.value !== ""
    ? commentButtonActive()
    : commentButtonInactive();
});

//2. 게시를 클릭하거나 엔터를 누르면 댓글이 달리게 구현하기

commentButton.addEventListener("click", () => {
  const myUsername = document.querySelector("#myId");
  const commentParent = document.querySelector(".usercomment");
  //ul 하위 내용(content)에 innerHTML으로 접근하고 수정.
  if (mineCommentInput.value !== "") {
    commentParent.innerHTML += `<li class="eachUserComment">
    <span>${myUsername.innerText}</span>
    <p>${mineCommentInput.value}</p>
    <button><i class="fa-regular fa-heart"></i></button>
  </li>`;
    mineCommentInput.value = ""; //댓글이 달리면 인풋 창의 내용 초기화.
    commentButtonInactive(); //값이 없으므로, 게시 버튼 비 활성화.
  }
});

//댓글이 교체되는게 아닌 밑에 계속 추가 하고싶었기 때문에
// 36번째 줄에 "commentParent.innerHTML +=" 으로 교체하였다.
