const commentbtn = document.querySelector("#commentInput");
const INPUT = document.querySelector(".commentinput");
const commentWin = document.querySelector(".commentwindow");
const createP = document.createElement("p");

commentbtn.addEventListener("click", function () {
  commentWin.appendChild(createP);
  createP.innerText = INPUT.value;
  INPUT.value = "";
});
// 댓글 리셋하고 다시 추가해야됨
