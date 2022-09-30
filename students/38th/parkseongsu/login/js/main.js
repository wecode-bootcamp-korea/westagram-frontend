const commentInput = document.getElementById("commentInput");
const commentbtn = document.getElementById("commentbtn");
const commentList = document.getElementById("commentlist");
const menuIcon = document.getElementById("menuIcon");
const dropMenu = document.getElementById("dropMenu");
const articleHeartIcon = document.querySelector(".likebox .heartIcon");

function writeComment(event) {
  event.preventDefault();

  const userId = sessionStorage.getItem("userId");
  const commentValue = commentInput.value;
  const li = document.createElement("li");

  commentList.appendChild(li);

  const userIdSpan = document.createElement("span");
  const textSpan = document.createElement("span");
  const heartBtn = document.createElement("span");
  const removeBtn = document.createElement("span");

  heartBtn.classList.add("emptyHeart");
  textSpan.classList.add("commentmargin");
  removeBtn.classList.add("removeBtn");
  userIdSpan.classList.add("boldWeight");

  userIdSpan.innerText = `${userId} `;
  textSpan.innerText = ` ${commentValue}`;

  li.appendChild(userIdSpan);
  li.appendChild(textSpan);
  li.appendChild(heartBtn);
  li.appendChild(removeBtn);

  commentInput.value = null;
//디스플레이 논이 아닌 .remove()로 요소 자체를 날릴 수 있음
  function hidden() {
    li.classList.add("displaynone");
  }

  function like() {
    heartBtn.classList.toggle("fullHeartSmall");
    heartBtn.classList.toggle("emptyHeart");
  }

  removeBtn.addEventListener("click", hidden);
  heartBtn.addEventListener("click", like);
}

function createDropbar() {
  dropMenu.classList.toggle("displaynone");
}

function articleHeart() {
  articleHeartIcon.classList.toggle("fullHeart");
}

commentbtn.addEventListener("click", writeComment);
menuIcon.addEventListener("click", createDropbar);
articleHeartIcon.addEventListener("click", articleHeart);
