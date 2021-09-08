// Add Comment
const btn_upload = document.querySelector(".btn_upload");
const btn_delete = document.querySelector(".comment_delete");
const textarea = document.querySelector("textarea");
const article_comments = document.querySelector(".article_comments");
const comments_row = document.querySelector(".comments_row");
const my_id = document.querySelector(".my_id").innerText;

const uploadComment = () => {
  if (textarea.value) {
    let newSpan = document.createElement("span");
    newSpan.classList.add("user_id");
    let newP = document.createElement("p");
    let newText = document.createTextNode(textarea.value);
    let newId = document.createTextNode(my_id);
    let newHeart = document.createElement("i");
    let newTrash = document.createElement("i");
    let newDiv = document.createElement("div");
    let newCommentDiv = document.createElement("div");
    newCommentDiv.classList.add("comments_menu");
    newDiv.classList.add("comments_row");
    newHeart.classList.add("comment_like");
    newHeart.classList.add("far");
    newHeart.classList.add("fa-heart");
    newHeart.onclick = () => toggleLike(newHeart);
    newTrash.classList.add("comment_delete");
    newTrash.classList.add("far");
    newTrash.classList.add("fa-trash-alt");
    newTrash.onclick = () => deleteComment(newTrash);

    newSpan.appendChild(newId);
    newP.appendChild(newSpan);
    newP.appendChild(newText);
    newCommentDiv.appendChild(newHeart);
    newCommentDiv.appendChild(newTrash);
    newDiv.appendChild(newP);
    newDiv.appendChild(newCommentDiv);
    article_comments.appendChild(newDiv);
    textarea.value = "";
  }
};

textarea.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    uploadComment();
  }

  if (textarea.value) {
    btn_upload.style.opacity = 1;
  } else {
    btn_upload.style.opacity = 0.4;
  }
});

btn_upload.addEventListener("click", uploadComment);

//Delete Comment
const deleteComment = (el) => {
  el.parentNode.parentNode.remove();
};

// Comment Heart
const comment_like = document.querySelector(".comment_like");
let isLiked = false;

const toggleLike = (el) => {
  isLiked = !isLiked;
  if (isLiked === true) {
    el.classList.remove("far");
    el.classList.add("fas");
    el.style.color = "#ED4956";
  } else {
    el.classList.remove("fas");
    el.classList.add("far");
    el.style.color = "rgba(0, 0, 0, 0.1)";
  }
};

// Modal Box
const btn_profile = document.querySelector(".btn_profile");
const menu_box = document.querySelector(".menu_box");
let isHidden = true;

btn_profile.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden === false) {
    menu_box.style.display = "block";
  } else {
    menu_box.style.display = "none";
  }
});

/*Search Filter*/
