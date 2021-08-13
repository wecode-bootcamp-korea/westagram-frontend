const detailWrapper = document.querySelector(".detailWrapper");
let likedNumber = document.querySelector(".likedNumber");
const likes = document.querySelector(".likes");
let num = 1515;

function onHeartClick(event) {
  if (event.target.className === "far fa-heart") {
    event.target.className = "fas fa-heart";
    ++num;
    addLikes(num);
  } else if (event.target.className === "fas fa-heart") {
    event.target.className = "far fa-heart";
    --num;
    addLikes(num);
  }
}

function addLikes(num) {
  likedNumber.innerHTML = `${num}`;
}

function onListClick(e) {
  if (e.target.className === "reply") {
    let tobeRemoved = e.target;
    tobeRemoved.remove();
  }
}

function handleClick(e) {
  onHeartClick(e);
  onListClick(e);
}

function init() {
  detailWrapper.addEventListener("click", (e) => handleClick(e));
}

init();
