const inputComment = document.getElementById("input");
const buttonComment = document.getElementById("button");
const newComment = document.getElementById("newComment");
const commentForm = document.getElementsByClassName("comment")[0];
const man = document.getElementById("man");

inputComment.addEventListener("keyup", responseBtn);

function responseBtn() {
  const inputValue = inputComment.value;
  if (inputValue.length > 0) {
    buttonComment.style.color = "blue";
    buttonComment.disabled = false;
  } else {
    buttonComment.style.color = "#cbe0f9";
    buttonComment.disabled = true;
  }
  return;
}

function addComment(e) {
  const comment = document.createElement("div");
  const userID = document.createElement("span");
  const commentText = document.createElement("span");
  const likeBtn = document.createElement("button");
  const deletBtn = document.createElement("button");

  e.preventDefault();

  comment.classList.add("comentClass");
  userID.classList.add("userIDClass");
  commentText.classList.add("commentTextClass");
  likeBtn.classList.add("likeBtnClass");
  deletBtn.classList.add("deletBtnClass");

  userID.innerHTML = "wecode ";
  commentText.innerHTML = inputComment.value;

  newComment.appendChild(comment);
  comment.appendChild(userID);
  comment.appendChild(commentText);
  comment.appendChild(likeBtn);
  comment.appendChild(deletBtn);

  inputComment.value = "";
  buttonComment.style.color = "#cbe0f9";
  buttonComment.disabled = true;

  function commentDelet() {
    comment.remove("comment");
  }

  likeBtn.addEventListener("click", likechange);
  deletBtn.addEventListener("click", commentDelet);
}

function enterKey() {
  addComment();
}

// buttonComment.addEventListener("click", enterKey);
buttonComment.addEventListener("click", addComment);

function likechange(e) {
  let target = e.target.classList;

  if (target.contains("likebtnClass")) {
    target.remove("likebtnClass");
    target.add("redheart");
  } else {
    target.remove("redheart");
    target.add("likebtnClass");
  }
}

function menuBox() {
  let profileMenu = document.getElementsByClassName("profileMenu")[0];
  // console.log(profileMenu.style.opacity);
  if (profileMenu.style.opacity === "1") {
    profileMenu.style.opacity = "0";
  } else {
    profileMenu.style.opacity = "1";
  }
}
// console.dir(profileMenu)
man.addEventListener("click", menuBox);

function exitMenu(e) {
  console.log(e.man.value);
  profileMenu.style.opacity = "0";
}
man.addEventListener("change", exitMenu);

//다른데 누르면 꺼지는 기능
