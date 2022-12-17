const commentMaker = document.querySelector(".comment_maker");
const commentBtn = document.querySelector(".commentBtn");
const newcomment = document.querySelector(".newComment");
const user_id = document.getElementById("id_login");

console.log(user_id);

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
  if (commentMaker.value) {
    const create_div = document.createElement("div");
    create_div.innerHTML = `<div class= "Newcomment"> <div class= User_id>
  <span><b>${user_id}</b></span></div>        ${commentMaker.value} </div>`;
    document.querySelector(".middle").appendChild(create_div);
    commentMaker.value = "";
  }
}
commentBtn.addEventListener("click", pushComment);

function commentEnter(e) {
  if (e.keyCode == 13 && commentMaker.value) {
    const create_div = document.createElement("div");
    create_div.innerHTML = `<div class= "Newcomment"> <div class= User_id>
      <span>ChanHwi</span></div>       ${commentMaker.value} </div>`;
    document.querySelector(".middle").appendChild(create_div);
    commentMaker.value = "";
  }
}
commentMaker.addEventListener("keypress", commentEnter);
