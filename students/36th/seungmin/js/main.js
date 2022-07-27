const search = document.querySelector(".navSearch-input");
const searchP = search.placeholder;

search.addEventListener("focus", () => {
  search.classList.add("placeHolderStyle");
});
search.addEventListener("blur", () => {
  search.classList.remove("placeHolderStyle");
  if (search.value !== "") search.style.paddingLeft = "50px";
});

const heart = document.querySelector(".fa-heart");
let heartVal = 0;

heart.addEventListener("click", () => {
  heartVal === 0
    ? (heartVal++,
      heart.classList.remove("fa-regular"),
      heart.classList.add("fa-solid"),
      (heart.style.color = "red"),
      (document.querySelector(".feedLike").innerHTML = "좋아요 1,898개"))
    : (heartVal--,
      heart.classList.remove("fa-solid"),
      heart.classList.add("fa-regular"),
      (heart.style.color = "black"),
      (document.querySelector(".feedLike").innerHTML = "좋아요 1,897개"));
});

const commentInput = document.querySelector("#feedAddCommentInput");
const commentButton = document.querySelector("#feedAddCommentButton");

window.addEventListener("keyup", () => {
  commentInput.value !== ""
    ? ((commentButton.disabled = false),
      (commentButton.style.color = "rgb(0,149,246)"))
    : ((commentButton.disabled = true),
      (commentButton.style.color = "rgb(175, 210, 234)"));
});

const feedCommetns = document.querySelector(".feedComments");

commentButton.addEventListener("click", () => {
  let newComment = document.createElement("div");
  newComment.innerHTML = `<span>me</span>${commentInput.value}`;
  newComment.className = "comment";
  feedCommetns.appendChild(newComment);
  commentInput.value = "";
});

commentInput.addEventListener("keydown", (e) => {
  let newComment = document.createElement("div");
  console.log(e.key);
  if (e.key == "Enter" && commentInput.value.length > 1) {
    newComment.innerHTML = `<span>me</span>${commentInput.value}`;
    newComment.className = "comment";
    feedCommetns.appendChild(newComment);
    commentInput.value = "";
    setTimeout(() => {}, 1000);
  }
});
