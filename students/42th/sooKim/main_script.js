
const commentInput = document.querySelector(".commentWrite")
const commentBtn = document.querySelector(".commentWriteButton")

// 댓글 버튼 활성화 //

function commentBtnOnOff(){
    if(commentInput.value.length !== 0){
    commentBtn.style.color = '#3E7FDE';
    commentBtn.disabled = false;
  } else {
    commentBtn.style.color = '#BCD5F0';
    commentBtn.disabled = true;
  }
}

commentInput.addEventListener('keyup', commentBtnOnOff);

// 댓글 추가 //

const commentBox = document.querySelectorAll('.commentBox');
console.log("commentBox",commentBox)

function addNewComment() {
  const newCommentLocation = document.querySelector('.comments');
  const newComment = document.createElement('li');

  // newComment.innerHTML = `
  //   <div class="commentBox">
  //     <b>blushcats</b>
  //     <span class="commentContext">${commentInput.value}</span>
  //     <img class ="commentDeleteIcon" alt="delete" src="./img/delete.png">
  //   </div>
  // `;
  
//1. div.commentBox 만들기

const newDiv = document.createElement('div');
newDiv.className = "commentBox";

//2. b 태그 만들기 - blushcats라는 innerText 넣어주기
const newB = document.createElement('b');
newB.innerText = "blushcats"

//3. span 태그 만들기 - class명 지어주기, innerText 넣어주기
const newSpan = document.createElement('span');
newSpan.innerText = commentInput.value;
newSpan.className = "commentContext";

//4. img 태그 만들기 - class, alt, src 경로 넣어주기 
//4-1. img태그에 addEventListener함수 
const newImg = document.createElement('img');
newImg.className = "commentDeleteIcon";
newImg.alt = "delete";
newImg.src = "./img/delete.png";

newImg.addEventListener('click', newCommentDelete );

function newCommentDelete() {
  newDiv.remove()
}

//5. div.commentBox -> b, span, img 태그 넣기

newDiv.appendChild(newB);
newDiv.appendChild(newSpan);
newDiv.appendChild(newImg);
//6. newComment -> div.commentBox 넣끼
newComment.appendChild(newDiv);
  

  newCommentLocation.appendChild(newComment);
  commentInput.value = '';
}

commentBtn.addEventListener('click', addNewComment)
commentInput.addEventListener('keypress', function(){
  if (window.event.keyCode == 13) {
  addNewComment();
  }
});

// 더보기 구현 //
const moreBtn = document.querySelector("#postMore")
const postContext = document.querySelector(".postContext")

function postMore () {
  postContext.style.whiteSpace = "normal";
  moreBtn.style.marginTop = "auto";
  moreBtn.remove();
}

moreBtn.addEventListener('click', postMore)

