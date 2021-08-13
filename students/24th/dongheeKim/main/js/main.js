'use strict;'
const commentBtn = document.querySelector(".feeds-comment_btn");
const feedsText = document.querySelector(".feeds-text");
const commentText = document.querySelector(".feeds-comment_box");

// 함수 선언 : 댓글 생성
function plusComment() {
  const newComment = document.createElement('li');
  newComment.innerHTML = `<span><span class="accountName">donghee</span> ${commentText.value}</span>` 
                       + `<div><span class="heart"><i class="far fa-heart"></i></span>
                       <span class="delete"><i class="far fa-trash-alt"></i></span></div>`;
  feedsText.appendChild(newComment);
  commentText.value = null;
  likeComment(newComment);
  deleteComment(newComment);
}

// 함수 선언 : 댓글 삭제 함수
function deleteComment(newComment) {
  const deleteBtn = newComment.querySelector(".delete");
  deleteBtn.addEventListener("click",() => newComment.remove());
  deleteBtn.style.cursor = "Pointer";
}

// 함수 선언 : 댓글 좋아요/취소 함수
function likeComment(newComment) {
  const likeBtn = newComment.querySelector(".heart");
  likeBtn.style.cursor = "Pointer";
  likeBtn.addEventListener("click",function() {
    event.target.className = event.target.className === "far fa-heart" ? "fas fa-heart" : "far fa-heart";
})}

// 이벤트 추가
commentBtn.addEventListener("click",plusComment)

commentText.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    plusComment()
    }
})