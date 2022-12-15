const commentbtn = document.querySelector("#commentInput");
const INPUT = document.querySelector(".commentinput");
const commentWin = document.querySelector(".commentwindow");
const createUl = document.querySelector(".commentList");

function commentpush() {
  const createli = document.createElement("li");

  createUl.appendChild(createli);
  createli.innerText = INPUT.value;
  INPUT.value = "";
}

commentbtn.addEventListener("click", commentpush);

INPUT.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    commentpush();
  }
});

// 댓글 리셋하고 다시 추가해야됨
