//좋아요 버튼 부분
const likebtn = document.querySelector("#likeheart");
const likelog = document.querySelector(".like");
const likecontent = document.createElement("div");
let count = 1;

function dolike() {
  let like = count++;

  if (like % 2 === 1) {
    likecontent.innerText = `${localStorage.getItem(
      "username"
    )}님이 좋아합니다.`;
    likebtn.style.color = "red";
  } else {
    likebtn.style.color = "gray";
    likecontent.innerText = null;
  }
  likelog.appendChild(likecontent);
}

likebtn.addEventListener("click", dolike);

//댓글 관리
const newcomment = document.querySelector(".commentinput");
const newcommentbtn = document.querySelector(".commentbtn");

function delcomment(event) {
  const first = event.target.parentElement;
  let second = first.parentElement;
  let last = second.parentElement;
  last.remove();
}

function docommentlikeicon(event) {
  const commentlikebtn = event.target;
  commentlikebtn.classList.toggle("clicked");
}

function savecomment() {
  const allcommentlist = document.querySelector("ul");
  const commentlist = document.createElement("li");
  const userwriteall = document.createElement("div");
  userwriteall.classList = "userwriteall";
  const userwrite = document.createElement("div");
  userwrite.classList = "userwrite";
  const userid = document.createElement("div");
  userid.classList = "userid";
  const usercomment = document.createElement("div");
  usercomment.classList = "usercomment";
  const usercommentdel = document.createElement("button");
  usercommentdel.classList = "hidden";
  const commenticon = document.createElement("i");
  commenticon.classList = "fas fa-heart";
  if (window.event.keyCode == 13) {
    userid.innerText = localStorage.getItem("username");
    usercomment.innerText = newcomment.value;
    usercommentdel.innerText = "X";
    userwrite.appendChild(userid);
    userwrite.appendChild(usercomment);
    userwrite.appendChild(usercommentdel);
    userwriteall.appendChild(userwrite);
    userwriteall.appendChild(commenticon);
    commentlist.appendChild(userwriteall);
    allcommentlist.appendChild(commentlist);
  }
  usercommentdel.addEventListener("click", delcomment);
  commenticon.addEventListener("click", docommentlikeicon);
}

newcomment.addEventListener("keyup", savecomment);

function delcommentinput() {
  if (window.event.keyCode == 13) {
    newcomment.value = null;
  }
}

newcomment.addEventListener("keyup", delcommentinput);

const commentupbtn = document.querySelector(".commentbtn");

function uploadcommentbtn() {
  const allcommentlist = document.querySelector("ul");
  const commentlist = document.createElement("li");
  const userwriteall = document.createElement("div");
  userwriteall.classList = "userwriteall";
  const userwrite = document.createElement("div");
  userwrite.classList = "userwrite";
  const userid = document.createElement("div");
  userid.classList = "userid";
  const usercomment = document.createElement("div");
  usercomment.classList = "usercomment";
  const usercommentdel = document.createElement("button");
  usercommentdel.classList = "hidden";
  const commenticon = document.createElement("i");
  commenticon.classList = "fas fa-heart";
  userid.innerText = localStorage.getItem("username");
  usercomment.innerText = newcomment.value;
  usercommentdel.innerText = "X";
  userwrite.appendChild(userid);
  userwrite.appendChild(usercomment);
  userwrite.appendChild(usercommentdel);
  userwriteall.appendChild(userwrite);
  userwriteall.appendChild(commenticon);
  commentlist.appendChild(userwriteall);
  allcommentlist.appendChild(commentlist);
  usercommentdel.addEventListener("click", delcomment);
  commenticon.addEventListener("click", docommentlikeicon);
}

commentupbtn.addEventListener("click", uploadcommentbtn);

function delcommentinput2() {
  newcomment.value = null;
}

commentupbtn.addEventListener("click", delcommentinput2);
