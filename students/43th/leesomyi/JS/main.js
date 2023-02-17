const commentInput = document.getElementsByTagName("input")[1];
const addCommentBtn = document.querySelector(".addCommentBtn");

// 댓글 추가 함수
const addComment = () => {
  const commentArea = document.querySelector(".commentArea");
  const createList = document.createElement("li");
  const createContent = document.createElement("span");
  const createHeart = document.createElement("i");
  const removeBtn = document.createElement("div");

  // 클래스 추가
  commentArea.classList.remove("blind");
  createHeart.classList.add("fa-regular", "fa-heart");
  removeBtn.classList.add("removeBtn");

  // 추가 될 댓글 구조
  createContent.innerHTML = commentInput.value;
  removeBtn.innerHTML = "Delete";
  createList.appendChild(createContent);
  commentArea.appendChild(createList);
  createList.appendChild(createHeart);
  createList.appendChild(removeBtn);

  // 댓글 등록 후 placeholder 초기화, input에 포커스
  commentInput.value = "";
  commentInput.focus();

  // 댓글 삭제 이벤트
  const removeComment = () => {
    createList.remove();
  };

  removeBtn.onclick = removeComment;

  //댓글 좋아요 변경 함수
  const changeLike = () => {
    createHeart.classList.remove("fa-regular");
    createHeart.classList.add("fa-solid");
    createHeart.style.color = "red";
  };

  createHeart.onclick = changeLike;
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
