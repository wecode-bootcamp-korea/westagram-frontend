//댓글 input에 글이 입력되고 게시버튼, enter 클릭 시 새로운 글이 입력이 된다.
//<div class="comment-box"> 에 글을 추가 한다.
//commentList = [] 입력값을 준다.
//commentList = [] 여기에 들어온 값을 <div class="comment-box"> 에 추가

let newComment = document.querySelector('.writing-input');
let addButton = document.querySelector('.writing-btn');

let commentList = [];

 

addButton.addEventListener('click', addComment);


// 데이터 세팅(=배열에 input value 추가)
function addComment() {
  let userComment = newComment.value;
  commentList.push(userComment)
  newComment.value = '' //값 push 이후 input 창 비우기
  render();  
}


// 데이터를 html 형태로 바꿔서 화면에 그리기
function render() {
  let resultHTML = '';

  for(let i=0; i<commentList.length; i++){
    let commentHTML = `
    <div class="comment">
     <div class="comment-box">
      <div>
        <span class="userId">afdgdfsd</span>
        <span>${commentList[i]}</span>
      </div>
      <i class="fa-regular fa-heart"></i>
    </div>
    <div class="comment-time">42분 전</div>
    </div>`

    resultHTML = resultHTML + commentHTML
    // document.querySelector('.comments-section').innerHTML = resultHTML
  } 
  document.querySelector('.comments-section').innerHTML = resultHTML
}

function onKeyUp(e){
  if(e.key === "Enter"){
    addComment();
  }
}


