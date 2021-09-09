let more = document.querySelector(".more");
let followBtn = document.querySelector(".follow");

const a = function toggleClass(){
  document.querySelector("#lines2").classList.toggle("lines2");
  // document.querySelector(".more").innerHTML = "내리기";
}

more.addEventListener("click", a)

const follow = function toggleFollow(){
  document.querySelector("#follow").classList.toggle("follow")
}

followBtn.addEventListener('click', follow);

