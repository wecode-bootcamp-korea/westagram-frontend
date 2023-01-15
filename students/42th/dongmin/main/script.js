const btnSubmit = document.getElementsByClassName("submit")[0];
const btnHeart = document.getElementsByClassName("heart-button")[0];
const addList = document.createElement("li");

console.log(btnHeart);
// function addNewComment(comment) {
//   addList.classList.add("comment-li");
// }

//console.log(listComment);

btnSubmit.addEventListener("click", () => {
  const listComment = document.getElementsByClassName("comment-li")[0];
  const inputComment = document.getElementsByClassName("input-comment")[0];

  if (inputComment.value.length <= 0) {
    alert("내용을 입력해주세요!");
    return;
  }

  const mkDiv = document.createElement("div");
  const mkName = document.createElement("span");
  const mkContent = document.createElement("span");

  mkDiv.className = "name-content-cnt size-for-overflow-hidden";
  mkName.className = "name";
  mkContent.className = "content";

  mkName.innerHTML = "gmgmgun";
  mkContent.innerHTML = inputComment.value;

  listComment.appendChild(mkDiv);
  mkDiv.appendChild(mkName);
  mkDiv.appendChild(mkContent);

  inputComment.value = "";
});
