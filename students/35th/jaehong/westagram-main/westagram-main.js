const commentInput = document.getElementsByClassName("replyContent")[0];
const submitBtn = document.getElementsByClassName("replyBtn")[0];

//댓글 게시 활성화 조건
function checkInput() {
  if (!commentInput.value) {
    return;
  }
  submit();
}
function submit() {
  //댓글이 생성될 div지정
  const box = document.getElementsByClassName("commentPlus")[0];

  //댓글의 형태를 구성할 element들 생성
  const comments = document.createElement("div");
  const userComment = document.createElement("div");
  const likeDelete = document.createElement("div");
  const userName = document.createElement("strong");
  const mainText = document.createElement("p");
  const likeButton = new Image();
  likeButton.src = "emptyheart.png";
  const deleteButton = document.createElement("button");

  userName.innerHTML = "jaehong ";
  mainText.innerText = commentInput.value;
  deleteButton.innerHTML = "삭제";

  //형성될 element들로 형태 구성
  comments.appendChild(userComment);
  comments.appendChild(likeDelete);
  userComment.appendChild(userName);
  userComment.appendChild(mainText);
  likeDelete.appendChild(likeButton);
  likeDelete.appendChild(deleteButton);
  box.appendChild(comments);

  //댓글을 구성하는 element들에 클래스명 부여
  comments.classList.add("replyUserDiv");
  userComment.classList.add("userComment");
  userName.classList.add("replyUserName");
  mainText.classList.add("replyMainText");
  likeDelete.classList.add("likeDelete");
  likeButton.classList.add("likeBtn");
  deleteButton.classList.add("deleteBtn");

  //생성된 버튼으로 게시된 댓글을 삭제하는 기능에 대한 함수
  deleteButton.addEventListener("click", () => {
    box.removeChild(comments);
  });
  //생성된 버튼으로 게시된 댓글에 좋아요하는 기능에 대한 함수
  likeButton.addEventListener("click", () => {
    likeDelete.removeChild(likeButton);
    const filledHeart = new Image();
    filledHeart.src = "heart.png";
    likeDelete.appendChild(filledHeart);
    filledHeart.classList.add("likeBtn");

    filledHeart.addEventListener("click", () => {
      likeDelete.removeChild(filledHeart);
      likeDelete.appendChild(likeButton);
    });
  });
}

//게시버튼 클릭으로 인한 댓글 게시 함수
submitBtn.addEventListener("click", (event) => {
  checkInput();
  commentInput.value = "";
});

//엔터버튼으로 인한 댓글 게시 함수
commentInput.addEventListener("keypress", (event) => {
  if (event.code === "Enter") {
    checkInput();
    commentInput.value = "";
  }
});

//게시버튼 클릭으로 인한 댓글 게시 함수
submitBtn.addEventListener("click", (event) => {
  checkInput();
  commentInput.value = "";
});

//엔터버튼으로 인한 댓글 게시 함수
commentInput.addEventListener("keypress", (event) => {
  if (event.code === "Enter") {
    checkInput();
    commentInput.value = "";
  }
});

//상단 검색바에 대한 변수 선언
const searchBar = document.getElementsByClassName("searchBlank")[0];
const search = document.getElementsByClassName("search")[0];
const searchInput = document.getElementsByClassName("searchBlank")[0];
const searchPlaceholder = searchInput.placeholder;

//상단 검색바 클릭시 돋보기 모양 아이콘 사라짐
searchBar.addEventListener("focusin", (event) => {
  const searchBarMagni = document.getElementsByClassName(
    "fa-magnifying-glass"
  )[0];
  search.removeChild(searchBarMagni);
});
//상단 검색바에서 포커스 아웃되면 돋보기 모양 아이콘 생겨남
searchBar.addEventListener("focusout", (event) => {
  document.createElement("i");
  const searchBarIcon = document.createElement("i");
  searchBarIcon.classList.add("fa-magnifying-glass");
  searchBarIcon.classList.add("fa-solid");
  search.appendChild(searchBarIcon);
});
//상단 검색바에서 포커스인 될 때/포커스아웃 될 때 플레이스홀더 생겨나고 사라짐
searchBar.addEventListener("focusin", (event) => {
  searchInput.setAttribute("placeholder", "");
});

searchBar.addEventListener("focusout", (event) => {
  searchInput.setAttribute("placeholder", "검색");
});
