//댓글 좋아요 기능
// img로 때려박은 하트를 전부 버튼으로 바꿔야하나?
//1. 일단 하트 이미지와 버튼 dom을 가져오기
//2. 버튼 클릭할 시
//3. 버튼 안 이미지를 빨간 하트 이미지로 바꿔버리면 될려나
//4. 버튼 클릭 횟수가 %2 ===0 일 땐 원래의 하트 이미지가 되고
//5. 버튼 클릭 횟수가 %2 ===1 이면 빨간 하트 이미지가 되게 하면 되것다
// button에 addevent 해서 function 안에 if 문 2개 만들어서 하트 이미지 바뀌게
let HeartIcon = document.getElementById("좋아요");
const Btn = document.getElementById("icon-button");

let count = 0;

const CommentBtn = document.getElementById("댓글좋아요");
let commentHeartIcon = document.getElementsByClassName("small-heart")[0];

//피드 좋아요
function changeRedheart() {
  HeartIcon.src = "./image/red heart.png";
}

function Original() {
  HeartIcon.src = "./image/heart.png";
}

//댓글 좋아요
function changeRed() {
  commentHeartIcon.src = "./image/red heart.png";
}

function original() {
  commentHeartIcon.src = "./image/heart.png";
}

//count 변수를 선언해 버튼 클릭 횟수를 담고싶은데
//count++ 하면 클릭 횟수가 계속 쌓이는데

function PressLike() {
  count++;
  if (count % 2 == 0) {
    Original();
  }
  if (count % 2 == 1) {
    changeRedheart();
  }

  console.log(count);
}

Btn.addEventListener("click", PressLike);

function presslike() {
  count++;
  if (count % 2 == 0) {
    original();
  }
  if (count % 2 == 1) {
    changeRed();
  }

  console.log(count);
}

CommentBtn.addEventListener("click", presslike);
