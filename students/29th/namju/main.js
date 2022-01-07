const commentTextArea = document.querySelectorAll(".comment-area");

const autoHeightTextarea = (element) => {
  element.style.height = "18px";
  element.style.height = element.scrollHeight + "px";
};

Array.from(commentTextArea).forEach((item) => {
  item.addEventListener("input", function () {
    autoHeightTextarea(item);
  });
});

const commentAddBtn = document.getElementsByClassName("btn-add-comment");

const addComment = (index) => {
  const feedComment = document.getElementsByClassName("feed-comment");

  const comment = document.createElement("div");
  comment.classList.add("feed-comment-wrap");
  const commentLeft = document.createElement("div");
  commentLeft.classList.add("comment");
  const usrName = document.createElement("strong");
  usrName.style.marginRight = "3px";
  usrName.innerHTML = "southpole_pbf";
  const commentSpan = document.createElement("span");
  commentSpan.innerHTML = commentTextArea[index].value;

  const commentBtns = document.createElement("div");
  commentBtns.classList.add("comment-btns");

  const likeButton = document.createElement("button");
  likeButton.type = "button";
  likeButton.classList.add("btn-like");
  const heartEmpty = document.createElement("img");
  heartEmpty.src = "/assets/heart-empty.svg";
  heartEmpty.alt = "like comment";
  likeButton.addEventListener("click", function () {
    likeUnlike(this);
  });

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.classList.add("btn-delete");
  const deleteIcon = document.createElement("img");
  deleteIcon.src = "/assets/delete.svg";
  deleteIcon.alt = "delete comment";
  deleteButton.addEventListener("click", function () {
    deleteComment(this);
  });

  likeButton.appendChild(heartEmpty);
  deleteButton.appendChild(deleteIcon);
  commentBtns.appendChild(likeButton);
  commentBtns.appendChild(deleteButton);
  commentLeft.appendChild(usrName);
  commentLeft.appendChild(commentSpan);
  comment.appendChild(commentLeft);
  comment.appendChild(commentBtns);
  feedComment[index].appendChild(comment);
  commentTextArea[index].value = null;
  commentTextArea[index].style.height = "18px";
  commentAddBtn[index].disabled = true;
};

Array.from(commentAddBtn).forEach((item, index) => {
  item.addEventListener("click", () => {
    addComment(index);
  });
});

Array.from(commentTextArea).forEach((item, index) => {
  item.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && commentTextArea[index].value) {
      addComment(index);
      e.preventDefault();
    } else if (e.key === "Enter" && !commentTextArea[index].value) {
      e.preventDefault();
    }
  });

  item.addEventListener("keyup", () => {
    if (item.value) {
      commentAddBtn[index].disabled = false;
    }
  });

  item.addEventListener("keyup", () => {
    if (!item.value) {
      commentAddBtn[index].disabled = true;
    }
  });
});

const commentBtn = document.getElementsByClassName("btn-comment");

Array.from(commentBtn).forEach((item, index) => {
  item.addEventListener("click", () => {
    commentTextArea[index].focus();
  });
});

const btnLike = Array.from(document.querySelectorAll(".btn-like"));

function likeUnlike(e) {
  if (e.firstElementChild.src.includes("/assets/heart-empty.svg")) {
    e.firstElementChild.src = "/assets/heart-filled.svg";
  } else {
    e.firstElementChild.src = "/assets/heart-empty.svg";
  }
}

btnLike.forEach((item) => {
  item.addEventListener("click", function () {
    likeUnlike(this);
  });
});

const btnDelete = Array.from(document.querySelectorAll(".btn-delete"));

const deleteComment = (e) => {
  e.parentNode.parentNode.remove();
  e.removeEventlistner("click", deleteComment);
};

btnDelete.forEach((item) => {
  item.addEventListener("click", () => deleteComment(item));
});

const setSideBarPosition = () => {
  const main = document.getElementById("main");
  const feed = document.getElementById("feed");
  const sideBar = document.getElementById("sideBar");

  let feedLeft = feed.getBoundingClientRect().left + window.scrollX;
  let startSideBar = feedLeft + feed.offsetWidth + 28;

  sideBar.style.left = startSideBar + "px";
  sideBar.style.width = (main.offsetWidth - 40) * 0.3 + "px";
};

window.addEventListener("DOMContentLoaded", setSideBarPosition);
visualViewport.addEventListener("resize", setSideBarPosition);
