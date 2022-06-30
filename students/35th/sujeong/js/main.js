// 이미지 눌렀을 때, 해당 이미지 바뀌는 것

const heart = document.querySelector("#heart");

let toggleButton = false;
const change = () => {
  toggleButton = !toggleButton;
  heart.src = toggleButton ? "img/heart2.png" : "img/heart.png";
  // 불린 형태의 자바스크립트를 할 경우 위의 코드처럼 작성하도록 익숙해지기
  // if (toggleButton) {
  //   heart.src = "img/heart2.png";
  // } else {
  //   heart.src = "img/heart.png";
  // }
};
heart.addEventListener("click", change);

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
