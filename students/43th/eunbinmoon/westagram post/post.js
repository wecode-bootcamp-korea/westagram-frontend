const comment = document.querySelector(".comment");
const likepicture = document.querySelector(".likeThisFeed");

console.log(likepicture);

likepicture.addEventListener("click", function addlike(){
  likepicture.innerHTML = "<i class="fa-regular fa-heart"> </i>";
  likepicture.style.color = "red"
};
