const commentForm = document.querySelector(".feedscomment");
const commentInput = document.querySelector(".feedscomment__input");
const commentList = document.querySelector(".feedscontent__comment");

// 댓글기능 구현
function paintComment(comment) {
  const ul = document.querySelector(".feedscontent__comment");
  const li = document.createElement("li");
  const div = document.createElement("div");
  const icon = document.createElement("i");
  const btn = document.createElement("button");
  const span = document.createElement("span");
  const divIn = document.createElement("div");
  div.className = "feedscontent__comment--greeting";
  icon.classList = "fa-regular fa-heart fa-xl";
  btn.innerText = "x";
  span.innerText = "그니당";

  div.appendChild(icon);

  div.innerText = comment;
  div.appendChild(icon);
  div.appendChild(btn);
  div.prepend(span);
  li.appendChild(div);
  ul.appendChild(li);

  // 삭제기능 구현
  btn.addEventListener("click", (event) => {
    const btn = event.target.parentNode;
    btn.remove();
  });

  // 좋아요기능 구현
  icon.addEventListener("click", (event) => {
    const REGULAR = "fa-regular";
    const SOLID = "fa-solid";

    icon.classList.contains(REGULAR)
      ? icon.classList.replace(REGULAR, SOLID)
      : icon.classList.replace(SOLID, REGULAR);
  });
}

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const comment = commentInput.value;
  commentInput.value = "";
  paintComment(comment);
});

// nav 프로필 사진 클릭 시 메뉴 박스 생성
const mypageIcon = document.querySelector(".status-bar__icon img:last-child");
const profile = document.querySelector(".profile");

mypageIcon.addEventListener("click", (event) => {
  profile.classList.toggle("hidden");
});

const closeMenu = (event) => {
  if (event.target !== mypageIcon) {
    profile.classList.add("hidden");
  }
};

window.addEventListener("click", closeMenu);
