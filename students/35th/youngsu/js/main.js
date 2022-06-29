const btnheart = document.querySelector(".btn-heart");
const heart = document.getElementById("heart");
const likeNumber = document.querySelector(".like-number");
const comment = document.querySelector(".comment-content");
const commentContent = document.querySelector(".comment");

const btnComment = document.querySelector(".insert");

let count = 0;

const heartColorChange = () => {
  // heart 색 변하는 함수
  if (count === 0) {
    heart.src = "images/redheart.png";
    likeNumber.innerHTML = "wecode_bootcamp님 외 5명이 좋아합니다.";
    return count++;
  } else {
    heart.src = "images/instagram4.png";
    likeNumber.innerHTML = "wecode_bootcamp님 외 4명이 좋아합니다.";
    return (count = 0);
  }
};

let arr = [];
const commentBrower = () => {
  commentContent.innerHTML +=
    "user" + (arr.length + 1) + " : " + comment.value + "<div></div>";
  arr.push(commentContent.innerHTML);
  console.log(arr);
  return (comment.value = "");
};

btnheart.addEventListener("click", heartColorChange); // 하트 누를 시 하트 색 변경
btnComment.addEventListener("click", commentBrower);
