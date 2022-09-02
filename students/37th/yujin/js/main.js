"use strict"
// 게시글 좋아요 버튼
const likeBtn = document.getElementsByClassName("feed-like-btn")[0];
const list = document.getElementById("#hello");
const likeCount = document.getElementsByClassName("likeCount")[0];
// 댓글달기
const commentList = document.querySelector(".comments-list");//댓글목록
const commentParts = document.querySelector(".comments-parts")
const myProfileId = document.querySelector(".my-profile-id");
const newComment = document.querySelector(".new-comment");
const commentsAddId = document.querySelector(".comments-part-Id");
const commentAddBtn = document.querySelector(".comments-add-btn");
// const addComment = document.querySelector(".comment");


// commentsAddBtn.addEventListener("click", () => {
//   const newCommentList = document.createElement("li");
//   const newCommentId = document.createElement("strong");
//   const newCommentContent = document.createElement("p");
//   const newLikeBtn = document.createElement("i");
//   const newDelBtn = document.createElement("i");

//   newLikeBtn.className = "fa-heart";
//   newDelBtn.className = "fa-trash-can";
  
//   newCommentList.appendChild(newCommentId);
//   newCommentList.appendChild(newCommentContent);
//   newCommentList.appendChild(newLikeBtn);
//   newCommentList.appendChild(newDelBtn);
  
//   newCommentId.innerText = myProfileId.value;
//   newCommentContent.innerText = newComment.value;
//   newComment.value = "";
// })



const writeComment = () =>{
  const newCommentPart = document.createElement("li");
  newCommentPart.className = "comments-parts";
  newCommentPart.innerHTML = 
  ` <strong>${myProfileId.value}</strong>
    <p>${newComment.value}</p>
    <button><i class="fa-regular fa-heart"></i></button>
    <button><i class="fa-solid fa-trash-can"></i></button>
  `;
    commentList.appendChild(newCommentPart);
    newComment.value = "";
  }
  
  commentAddBtn.addEventListener("click", () => {
    if (newComment.value) {
      writeComment();
    } else if(!newComment.value){
      alert="아직 하고싶은 말이 없으신가요?"
    }
  });

// commentsContainer.addEventListener("click", (e) => {
//   e.target.nodeName === "LI" && e.target.remove();
// });


let clicked = false;
likeBtn.addEventListener("click", function () {
  if (!clicked) {
    clicked = true;
    likeBtn.innerHTML = `<i class="fa-solid fa-heart icon"></i>`;
    likeBtn.style.color = `red`;
    likeCount.textContent++;
  } else {
    clicked = false;
    likeBtn.innerHTML = `<i class="fa-regular fa-heart icon"></i>`;
    likeBtn.style.color = `black`;
    likeCount.textContent--;
  }
});
