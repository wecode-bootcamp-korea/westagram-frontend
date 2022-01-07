// textarea 콘텐츠에 따라 높이 조정
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

// 댓글 추가 + 게시 버튼 active
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
  const likeButton = document.createElement("button");
  likeButton.type = "button";
  likeButton.classList.add("btn-like");
  const heartEmpty = document.createElement("img");
  heartEmpty.src = "/assets/heart-empty.svg";
  heartEmpty.alt = "like comment";
  likeButton.addEventListener("click", function () {
    likeUnlike(this);
  });

  likeButton.appendChild(heartEmpty);
  commentLeft.appendChild(usrName);
  commentLeft.appendChild(commentSpan);
  comment.appendChild(commentLeft);
  comment.appendChild(likeButton);
  feedComment[index].appendChild(comment);
  commentTextArea[index].value = null;
  commentTextArea[index].style.height = "18px";
  commentAddBtn[index].disabled = true;
};

// add thru button click
Array.from(commentAddBtn).forEach((item, index) => {
  item.addEventListener("click", () => {
    addComment(index);
  });
});

// add thru enter
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

// 말풍선 누르면 textarea focus 되도록
const commentBtn = document.getElementsByClassName("btn-comment");

Array.from(commentBtn).forEach((item, index) => {
  item.addEventListener("click", () => {
    commentTextArea[index].focus();
  });
});

// like unlike
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

// sidebar position + width 맞춰주기!!! (fixed를 위해!)

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
