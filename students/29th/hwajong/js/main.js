const userComment = document.querySelector(".feed-comment__content");
const addBtn = document.querySelector(".feed-comment__button");

function addComment() {
  const text = userComment.value;
  console.log(text);

  const feedComment = document.querySelector(".friends-comment__info");
  const commentDiv = document.createElement("div");
  const userId = document.createElement("span");
  const userText = document.createElement("span");
  const idStrong = document.createElement('strong');


  let user = "test";

  commentDiv.setAttribute("class", "friends-comment__info");
  userId.setAttribute("class", "friends-comment__friend-id");
  userText.setAttribute("class", "friends-comment__friend-comment");

  userId.innerHTML = user;
  userText.innerHTML = text;

  console.log(userId);
  console.log(userText);
  console.log(idStrong);

  commentDiv.appendChild(userId);
  commentDiv.appendChild(userText);
  userId.style.fontWeight = "bold";
  feedComment.appendChild(commentDiv);
  userComment.value = "";
}

addBtn.addEventListener("click", addComment);
userComment.addEventListener("keydown", (event) =>{
  if(event.key === 'Enter') {
    addComment();
  }
  return;
});
