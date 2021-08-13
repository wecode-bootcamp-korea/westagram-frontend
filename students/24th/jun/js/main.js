"use strict";
const entry = document.querySelector(".entry");
const oldComments = document.querySelector(".oldComments");
const commentArea = document.querySelector(".commentArea");
const likeBtns = document.querySelectorAll('.likeBtn');
const likeEmoji = document.querySelector('.likeEmoji');

// **댓글 생성 및 삭제 기능**
// 댓글 등록, 삭제 기능 이벤트 등록
entry.addEventListener("click", addItemFunction);
commentArea.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    addItemFunction();
    return;
  }
});

//댓글 등록 기능
function addItemFunction(e) {
  const typing = commentArea.value;
  addItem(typing);
  commentArea.value = "";
}

function addItem(typing) {
  const div = document.createElement("div"),
    idSpan = document.createElement("span"),
    contentSpan = document.createElement("span"),
    delBtn = document.createElement("span"),
    likeBtn = document.createElement("button");

  div.setAttribute("class", "comment");
  idSpan.innerText = "3_jun";
  idSpan.setAttribute("class", "commentId");
  contentSpan.innerText = typing;
  contentSpan.setAttribute("class", "commentContent");
  likeBtn.setAttribute("class", "likeBtn");
  likeBtn.innerHTML = `<svg aria-label="좋아요" class="_8-yf5 white" fill="#262626" height="12" display="inline-block" role="img" viewBox="0 0 48 48" width="12"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
    <svg aria-label="좋아요 취소" class="_8-yf5 red" fill="#ed4956" display="none" height="12" role="img" viewBox="0 0 48 48" width="12"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>`;
  delBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;

  delBtn.addEventListener("click", deleteFunction);

  div.appendChild(idSpan);
  div.appendChild(contentSpan);
  div.appendChild(delBtn);
  div.appendChild(likeBtn);

  oldComments.appendChild(div);
}

// 댓글 삭제 기능
function deleteFunction(e) {
  const delTarget = e.target.parentNode.parentNode;
  delTarget.remove();
}

// 댓글 좋아요, 좋아요 취소 기능
for (const likeBtn of likeBtns) {
  likeBtn.addEventListener("click", (e) => {
    const svgs = likeBtn.getElementsByTagName("svg");
    const like = svgs[0];
    const disLike = svgs[1];
    if (disLike.getAttribute("display") === "none") {
      like.setAttribute("display", "none");
      disLike.setAttribute("display", "inline-block");
    } else {
      like.setAttribute("display", "inline-block");
      disLike.setAttribute("display", "none");
    }
  });
}

// 게시글 좋아요 기능
likeEmoji.addEventListener('click', (e) => {
  const bigLike = document.querySelector('.bigLike');
  const bigDislike = document.querySelector('.bigDislike');
  if (bigDislike.getAttribute('display') === 'inline-block') {
    bigDislike.setAttribute('display', 'none');
    bigLike.setAttribute('display', 'inline-block');
  } else {
    bigLike.setAttribute('display', 'none');
    bigDislike.setAttribute('display', 'inline-block');
  }
});