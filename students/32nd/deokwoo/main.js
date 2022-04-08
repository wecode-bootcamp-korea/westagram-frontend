let src = document.querySelector(".search");
let point = document.querySelector(".inputsrc");

function hideSearch() {
  src.style.visibility = "hidden";
  point.setAttribute("placeholder", "검색");
  point.focus();
}

function showSearch() {
  src.style.visibility = "";
  point.removeAttribute("placeholder");
}

src.addEventListener("click", hideSearch);
point.addEventListener("focusout", showSearch);

let reply = document.querySelector(".reply_list");
let ent = document.querySelector(".replyent");
let text = document.querySelector(".replyInput");
let btn = document.querySelector(".replyent");

function activeReply() {
  if (text.value) {
    btn.removeAttribute("disabled");
    btn.classList.add("active");
  } else {
    btn.setAttribute("disabled", true);
    btn.classList.remove("active");
  }
}

text.addEventListener("keyup", activeReply);

function addReply() {
  let li = document.createElement("li");
  let id = document.getElementById("id").textContent;
  let like = document.createElement("i");
  like.setAttribute("class", "fa-regular fa-heart");
  like.addEventListener("click", fillHeart);

  li.innerHTML = `<span>${id}</span> ${text.value}`;

  let delbtn = document.createElement("button");
  delbtn.setAttribute("class", "delete");
  delbtn.innerText = "삭제";
  delbtn.addEventListener("click", () => li.remove());

  li.appendChild(like);
  li.appendChild(delbtn);
  reply.appendChild(li);

  text.value = "";
  btn.setAttribute("disabled", true);
  btn.classList.remove("active");
}

function getTime(e) {
  console.log(e.target);
}

ent.addEventListener("click", addReply);

function enterKey(e) {
  if (e.code === "Enter") {
    addReply();
  }
}

text.addEventListener("keyup", enterKey);

let del = document.querySelector(".delete");

function delHandler(e) {
  e.target.parentNode.remove();
}

del.addEventListener("click", delHandler);

let info = document.querySelector(".information");
let pf = document.querySelector(".profile");

function showInfo() {
  info.classList.add("show");
  let allScreen = document.createElement("div");

  allScreen.setAttribute("class", "hide");
  allScreen.addEventListener("click", () => {
    info.classList.remove("show");
    let all = document.querySelector(".hide");
    all.remove();
    pf.style.border = "none";
  });

  document.querySelector(".navigation").append(allScreen);

  pf.style.border = "2px solid red";
  pf.style.borderRadius = "50%";
}

pf.addEventListener("click", showInfo);

let heart = document.querySelector(".icon_left i:first-child");
let smallHeart = document.querySelector(".reply_list i");

function fillHeart(e) {
  let target = e.target;
  if (target.classList.contains("fa-regular")) {
    target.classList.remove("fa-regular");
    target.classList.add("fa-solid");
    target.style.color = "red";
  } else {
    target.classList.remove("fa-solid");
    target.classList.add("fa-regular");
    target.style.color = "";
  }
}

heart.addEventListener("click", fillHeart);
smallHeart.addEventListener("click", fillHeart);
