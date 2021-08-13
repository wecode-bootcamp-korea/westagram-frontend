const detailWrapper = document.querySelector(".detailWrapper");

function onHeartClick(event) {
  if (event.target.className === "far fa-heart") {
    event.target.className = "fas fa-heart";
  } else if (event.target.className === "fas fa-heart") {
    event.target.className = "far fa-heart";
  }
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

detailWrapper.addEventListener("click", handleClick);
