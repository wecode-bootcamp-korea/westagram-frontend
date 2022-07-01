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
// 부모박스 여기 밑에 댓글이 들어가야한다
const commentBox = document.querySelector(".userWriteComment");
// 이 친구는 인풋이다
const commentInput = document.getElementById("comment");
// 이 친구는 버튼이다
const submitBtn = document.getElementById("submit-btn");

// 아래 클릭 이벤트를 누르면 실행해주세요
const handleForm = (e) => {
  //submit 속성은 새로고침이 자동으로되므로 e로 막아줘야한다/
  e.preventDefault();
  // 사용자가 인풋에 적는 값들
  let comment = commentInput.value;
  // 그 값이 적히는지 콘솔로 찍어보자
  // console.log(comment);

  if (commentInput.value.length > 0) {
    // 콘솔로 수시로 확인해보자
    console.log(comment);
    // 새로운 부모 div를 만들었음
    let newCommentText = document.createElement("div");
    // 그 새로운 부모 div안에 아래 내용을 그대로 넣어주세요/
    newCommentText.innerHTML = `<div class="comment-text">
    <span class="aricle-bold">user</span>
    <span>${comment}</span></div>`;
    // 그대로 넣은 값이 보이는지 콘솔로 찍어보자
    console.log(newCommentText);
    // 그래서 최종으로 만든 div부모 박스안에 맨뒤에 newComentTExt를 넣었따.
    commentBox.appendChild(newCommentText);
    // 다 실행되고 나면 빈값으로 초기화 끝 근데 왜 변수명으로 넣으면 실행이 안 되는 거지?
    commentInput.value = "";
  }
};

// 버튼에. 이벤트 리스너를 실행해주세요. 클릭과 / 실행함수
submitBtn.addEventListener("click", handleForm);
