const like = document.querySelector(".like");
const contentBox = document.querySelector(".content-bar");
const newDiv = document.createElement("div");
console.log(like);

function addLike() {
  const heart = '<i class="fa-solid fa-heart fa-2x full-heart"></i>';
  newDiv.innerHTML = heart;
  contentBox.prepend(newDiv);
  contentBox.removeChild(like);
}

like.addEventListener("click", addLike);
