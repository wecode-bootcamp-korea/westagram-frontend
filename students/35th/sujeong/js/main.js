"use strict";
// 이미지 눌렀을 때, 해당 이미지 바뀌는 것

const heart = document.querySelector("#heart");

let toggleButton = false;
const change = () => {
  toggleButton = !toggleButton;
  heart.src = toggleButton ? "img/heart2.png" : "img/heart.png";
  // 불린 형태의 자바스크립트를 할 경우 위의 코드처럼 작성하도록 익숙해지기
};
heart.addEventListener("click", change);

// if (toggleButton) {
//   heart.src = "img/heart2.png";
// } else {
//   heart.src = "img/heart.png";
// }
// if문으로 풀게되면 이렇게 된다.

// 더보기 버튼 생성

// const btn = document.getElementById("btn");
// const contents = document.getElementById("contents");

// btn.addEventListener('click', ) => {
//   btn.classList.toggle('clicked');
//   contents.classList.toggle('clamp');
// };

// 댓글창 작성
// const dat = document.querySelector('.dat');
// const div = d
// const datgle = dat.value;

// if(e.code == enter){
//   div.innerHTML="user[i]"+datgle;
// }

//let clickBtn = document.getElementsByClassName("userWriteComment")


// 댓글 창 첫 번째 방법
// const submit = () => {
//   const box = document.getElementsByClassName("userWriteComment");
//   const comments = document.createElement("div");
//   const userId = document.createElement("strong");
//   const mainText = document.createElement("p");

//   comments.classList.add("commentBox");
//   userId.classList.add("userId");
//   mainText.classList.add("userWriteComment");

//   userId.innerHTML = " user ";
//   mainText.innerText = commentInput.value;

//   comments.appendChild(userId);
//   comments.appendChild(mainText);

//   box.appendChild(comments);
// };

// submitBtn.addEventListener("keydown", (event) => {
//   if (event.code === "Enter") {
//     submit();
//     commentInput.value = "";
//   }
// });


//댓글 만들기

const commentInput=document.getElementById('contents');

let submit =  (e) => {
  e.preventDefault();
  //form 사용 시 적용해야 한다
  let comment = commentInput.value;
  let newComment = document.querySelector('.userWriteComment')

  if (commentInput.value.length > 0) {
    let commentText.innerHTML = `<div class="comment-text>
    <span class="aricle-bold">user</span>
    ${comment}</span></span></div>`;

    newComment.appendChild(commentText);
    commentInput='';
  }
};
commentSubmit.addEventListener('click', handleForm);
