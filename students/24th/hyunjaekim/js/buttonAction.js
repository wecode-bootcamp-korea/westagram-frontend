const detailWrapper = document.querySelector(".detailWrapper");

function onHeartClick(event) {
  if (event.target.className === "far fa-heart") {
    event.target.className = "fas fa-heart";
  } else if (event.target.className === "fas fa-heart") {
    event.target.className = "far fa-heart";
  }
}

detailWrapper.addEventListener("click", onHeartClick);
