// textarea 콘텐츠에 따라 높이 조정
function auto_grow(element) {
  element.style.height = "18px";
  element.style.height = element.scrollHeight + "px";
}

// 댓글 추가 + 게시 버튼 active
const commentAddBtn = document.getElementsByClassName("btn-add-comment");
const commentTextArea = document.getElementsByClassName("comment-area");

const addComment = (index) => {
  const feedComment = document.getElementsByClassName("feed-comment");

  const comment = document.createElement("div");
  comment.classList.add("comment");
  const commentLeft = document.createElement("div");
  commentLeft.classList.add("comment-left");
  const usrName = document.createElement("strong");
  usrName.style.marginRight = "3px";
  usrName.innerHTML = "southpole_pbf";
  const commentSpan = document.createElement("span");
  commentSpan.innerHTML = commentTextArea[index].value;
  const likeButton = document.createElement("button");
  likeButton.type = "button";
  likeButton.classList.add("btn-like-comment");
  const heartEmpty = document.createElement("i");
  heartEmpty.classList.add("far", "fa-heart");
  heartEmpty.addEventListener("click", likeUnlike);

  likeButton.appendChild(heartEmpty);
  commentLeft.appendChild(usrName);
  commentLeft.appendChild(commentSpan);
  comment.appendChild(commentLeft);
  comment.appendChild(likeButton);
  feedComment[index].appendChild(comment);
};

// add thru button click
Array.from(commentAddBtn).forEach((item, index) => {
  item.addEventListener("click", () => {
    addComment(index);
    commentTextArea[index].value = null;
  });
});

// add thru enter
Array.from(commentTextArea).forEach((item, index) => {
  item.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addComment(index);
      e.preventDefault();
      commentTextArea[index].value = null;
    }
  });

  item.addEventListener("keyup", () => {
    if (item.value) {
      commentAddBtn[index].id = "active";
    }
  });

  item.addEventListener("keyup", () => {
    if (!item.value) {
      commentAddBtn[index].id = "";
    }
  });
});

// 말풍선 누르면 textarea focus 되도록
const commentBtn = document.getElementsByClassName("btn-comment");

Array.from(commentBtn).forEach((item, index) => {
  item.addEventListener("click", (e) => {
    commentTextArea[index].focus();
  });
});

// 댓글 하트 클릭 시 변화 -> 문제!!!!
// let HeartBtn = document.getElementsByClassName("fa-heart");
// 그냥 js에서 하는걸로 했는데.. 그러면 새로 추가된 댓글에는 작동을 안함 ㅠㅠ
// 그래서 그냥 함수를 만들고, 각 하트 버튼 요소에 onclick으로 추가해주는 것으로 변경
// 댓글 추가할 때에도 속성으로 onclick을 주니 된다! -> 질문!! 이렇게 inline? 식으로 함수 적용하는것은 꼼수/지양해야할 pratice인지 아니면 상황에 따라 섞어 써야하는지?

let heartBtn = Array.from(document.getElementsByClassName("fa-heart"));

function likeUnlike() {
  if (Array.from(this.classList).includes("far")) {
    this.classList.add("fas");
    this.classList.remove("far");
  } else {
    this.classList.remove("fas");
    this.classList.add("far");
  }
}

heartBtn.forEach((item) => {
  item.addEventListener("click", likeUnlike);
});

// 일반 하트 클릭 시 변화
const emptyLikeBtn = document.getElementsByClassName("like");
const filledLikeBtn = document.getElementsByClassName("unlike");

Array.from(emptyLikeBtn).forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.add("hidden");
    filledLikeBtn[index].classList.remove("hidden");
  });
});

Array.from(filledLikeBtn).forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.add("hidden");
    emptyLikeBtn[index].classList.remove("hidden");
  });
});

// 사진 더블클릭 시 like 되도록
const feedImg = document.getElementsByClassName("feed-img-wrap");

Array.from(feedImg).forEach((item, index) => {
  item.addEventListener("dblclick", () => {
    emptyLikeBtn[index].classList.add("hidden");
    filledLikeBtn[index].classList.remove("hidden");
  });
});

// sidebar position + width 맞춰주기!!! (fixed를 위해!)
const main = document.getElementById("main");
const feed = document.getElementById("feed");
const sideBar = document.getElementById("sideBar");

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

let startSideBar = getOffset(feed).left + feed.offsetWidth + 28;
sideBar.style.left = startSideBar + "px";

sideBar.style.width = (main.offsetWidth - 40) * 0.3 + "px";

visualViewport.addEventListener("resize", () => {
  startSideBar = getOffset(feed).left + feed.offsetWidth + 28;
  sideBar.style.left = startSideBar + "px";
  sideBar.style.width = (main.offsetWidth - 40) * 0.3 + "px";
});
