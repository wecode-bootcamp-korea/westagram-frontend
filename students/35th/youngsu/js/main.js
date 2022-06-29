const btnheart = document.querySelector(".btn-heart");
const heart = document.getElementById("heart");

const btnComment = document.querySelector(".insert");
const comment = document.querySelector(".comment-insert");
let count = 0;

const heartColorChange = () => {
  // heart 색 변하는 함수
  if (count === 0) {
    heart.src = "images/redheart.png";
    return count++;
  } else {
    heart.src = "images/instagram4.png";
    return (count = 0);
  }
};

btnheart.addEventListener("click", heartColorChange); // 하트 누를 시 하트 색 변경
