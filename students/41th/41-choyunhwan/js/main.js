const commentbtn = document.querySelector("#commentInput");
const INPUT = document.querySelector(".commentinput");
const commentWin = document.querySelector(".commentwindow");
const createUl = document.querySelector(".commentList");
const heartICON = document.querySelector("#heartIcon");
function commentpush() {
  const createli = document.createElement("li");

  createUl.appendChild(createli);
  createli.innerText = `yunhwan    ${INPUT.value}`;
  INPUT.value = "";
}

commentbtn.addEventListener("click", commentpush);

INPUT.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    commentpush();
  }
});

heartICON.addEventListener("click", function () {
  heartICON.src = "img/redheart.png";
});
// 댓글 리셋하고 다시 추가해야됨
