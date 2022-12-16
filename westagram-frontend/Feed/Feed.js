const commentMaker = document.querySelector(".comment_maker");
const commentBtn = document.querySelector(".commentBtn");
const newcomment = document.querySelector(".newComment");

function comment() {
  if (commentMaker.value) {
    commentBtn.style.backgroundColor = "#68adfc";
    commentBtn.style.color = "#ffffff";
  } else {
    commentBtn.style.backgroundColor = "#ffffff";
    commentBtn.style.color = "#b2dffc";
  }
}

commentMaker.addEventListener("keyup", comment);

function pushComment() {
  const create_div = document.createElement("p");
  create_div.innerText = `Chanyoung       ${commentMaker.value}`;
  document.querySelector(".middle").appendChild(create_div);
}
commentBtn.addEventListener("click", pushComment);

function commentEnter() {
  if (KeyCode === 13) {
    createP = document.createElement("p");
    createP.innerTextd = commentMaker.value;
    newcomment.appendChild(createP);
  }
}
commentMaker.addEventListener("keyup", commentEnter);
