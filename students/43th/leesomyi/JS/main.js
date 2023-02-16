const commentInput = document.getElementsByTagName("input")[1];
const addCommentBtn = document.querySelector(".addCommentBtn");

// 댓글 추가 함수
const addComment = () => {
  const commentArea = document.querySelector(".commentArea");
  const createList = document.createElement("li");
  const createContent = document.createElement("span");
  const crearHeart = document.createElement("i");

  commentArea.classList.remove("blind");
  crearHeart.classList.add("fa-regular", "fa-heart");

  createContent.innerHTML = commentInput.value;
  createList.appendChild(createContent);
  commentArea.appendChild(createList);
  createList.appendChild(crearHeart);

  commentInput.value = "";
  commentInput.focus();
};

// 게시 버튼 클릭 이벤트
addCommentBtn.addEventListener("click", () => {
  addComment();
});

// 엔터 키다운 이벤트
commentInput.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    addComment();
  }
  return;
});
