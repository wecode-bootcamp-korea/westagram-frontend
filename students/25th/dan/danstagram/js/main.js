const listComment = document.getElementById('listComment');
const getNewComment = document.getElementById('newComment');
const postComment = document.getElementById('btnPost');

postComment.addEventListener('click', addComment);
getNewComment.addEventListener("keyup", (e)=>{
  if (e.keyCode === 13 && ! e.shiftKey) {
     e.preventDefault();
     addComment()
  }
});

function addComment(){

  // 새 코멘트 공간만들어서 코멘트 리스트에 추가
  const newCommentTxt = document.createElement('p');
  newCommentTxt.classList.add('txt_comment');

  //input에 적힌 값 할당
  const getNewCommentTxt = getNewComment.value;

  // 코멘트 안에 출력될 ID 공간
  newCommentTxt.innerHTML = '<a href="#n" class="txt_id">follow ID</a>';

  // 코멘트 안에 출력될 내용
  let span = document.createElement("span")
  newCommentTxt.append(span)
  newCommentTxt.lastChild.innerText = getNewCommentTxt;

  // 코멘트 리스트에 추가
  listComment.appendChild(newCommentTxt)
  console.log(getNewComment)

  // 코멘트 리스트에 추가되면 input비움
  getNewComment.value = ''
}