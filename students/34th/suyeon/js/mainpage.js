const mineCommentInput = document.querySelector('.myCommentInput')
const commentButton = document.querySelector('.myCommentButton')

function commentButtonActive (){
  commentButton.style.color = '#0195f7';
  commentButton.disabled = false;
  commentButton.style.cursor = 'pointer';
  //버튼이 활성화되면 커서가 포인터 형태로 전환
}

function commentButtonInactive (){
  commentButton.style.color = '#c1e2f8';
  commentButton.disabled = true;
  commentButton.style.cursor = 'default';
  //버튼이 비 활성화가 되면 커서가 기본값으로 다시 되돌아감
}

//댓글 다는 input에 무언가가 써지면 '게시'버튼이 파란색으로 바뀌면서 활성화
// value값에 string이나 number가 들어가게 되므로 ""(공백)이 아니면 이라는 조건을 걸어주자!!!
mineCommentInput.addEventListener('keyup',() => {
  mineCommentInput.value !== "" ? commentButtonActive () : commentButtonInactive ()
})

//2. 게시를 클릭하거나 엔터를 누르면 댓글이 달리게 구현하기

commentButton.addEventListener('click',() => {
  const myUsername = document.querySelector('#myId')
  const commentParent = document.querySelector('.usercomment')
  commentParent.innerHTML = `<li class="eachUserComment">
    <span>${myUsername.innerText}</span>
    <p>${mineCommentInput.value}</p>
    <button><i class="fa-regular fa-heart"></i></button>
  </li>`
  mineCommentInput.value = ""
})
