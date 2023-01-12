
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


const newDiv = document.createElement('div');
newDiv.className = "commentBox";


const newB = document.createElement('b');
newB.innerText = "blushcats"


const newSpan = document.createElement('span');
newSpan.innerText = commentInput.value;
newSpan.className = "commentContext";


const newImg = document.createElement('img');
newImg.className = "commentDeleteIcon";
newImg.alt = "delete";
newImg.src = "./img/delete.png";

newImg.addEventListener('click', newCommentDelete );

function newCommentDelete() {
  newDiv.remove()
}


newDiv.appendChild(newB);
newDiv.appendChild(newSpan);
newDiv.appendChild(newImg);
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

