"use strict";

const postComment = document.getElementById('post');
const inputComment = document.getElementById('newComment');
const btnComment = document.getElementById('btnPost');

// 새 코멘트 값 체크
function checkComment(){
  if(inputComment.value.length > 0){
    addComment(inputComment.value)
  }
}

// 새 코멘트 추가
function addComment(value){
  
  const listComments = document.getElementById('listComment');
  const newCommentLine = document.createElement('p');
  const newComment = `
  <p class="txt_comment">
      <span>
          <a href="#n" class="txt_id">follow ID</a>
          <span>${value}</span>
      </span>
      <button id="delete" type="button">X</button>
  </p>
  `;

  newCommentLine.innerHTML = newComment;
  listComments.appendChild(newCommentLine);
  
  // 코멘트 추가 후, 작성칸 비움 
  inputComment.value = '';
}

const init = () => {
    // 게시 버튼 클릭 시
    postComment.addEventListener('submit', (e)=>{
      e.preventDefault();
      checkComment();
    });
    // enter키 클릭 시
    inputComment.addEventListener('keyup', (e)=>{
      if (e.keyCode === 13 && ! e.shiftKey) {
        e.preventDefault();
        checkComment();
      }
    });
};

init();