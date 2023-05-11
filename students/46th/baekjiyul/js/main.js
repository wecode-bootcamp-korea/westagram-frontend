const comment = document.querySelector(".comment input");
const commentBtn = document.querySelector(".comment button");
const commentList = document.querySelector(".commentList");

let ACCOUNTNAME = "jy_baek";

function deleteComment(event) {
  const deletedComment = event.target.parentNode;
  commentList.removeChild(deletedComment);
}

function changeLikeBtn(event) {
  const likedHeart = event.target;
  if (likedHeart.classList.contains("fa-regular")) {
    likedHeart.classList.remove("fa-regular");
    likedHeart.classList.add("fa-solid");
  } else {
    likedHeart.classList.remove("fa-solid");
    likedHeart.classList.add("fa-regular");
  }
}

function addComment() {
  if (comment.value) {
    const newList = document.createElement("li");
    const newComment = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const heartIcon = document.createElement("i");
    const newCommentAccount = document.createElement("span");
    newComment.innerText = ` ${comment.value}`;
    deleteBtn.innerText = "삭제";
    heartIcon.classList.add("fa-regular");
    heartIcon.classList.add("fa-heart");
    newCommentAccount.classList.add("comment-account");
    newCommentAccount.innerText = "jy_baek";
    newList.prepend(newCommentAccount);
    newList.appendChild(newComment);
    deleteBtn.appendChild(heartIcon);
    newList.appendChild(deleteBtn);
    newList.appendChild(heartIcon);
    commentList.appendChild(newList);
    deleteBtn.addEventListener("click", deleteComment);
    heartIcon.addEventListener("click", changeLikeBtn);
    newList.id = `${comment.value}`;
    comment.value = "";
  }
}

commentBtn.addEventListener("click", addComment);
comment.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addComment();
  }
});

const firstCommentIcon = document.querySelector(".commentList-first i");
const firstCommentBtn = document.querySelector(".commentList-first button");

firstCommentIcon.addEventListener("click", changeLikeBtn);
firstCommentBtn.addEventListener("click", deleteComment);

/**Functions for searching ID section**/
const accountData = [
  { id: "writeanddraw", profile: "img/profile.jpg", nickname: "drawer" },
  { id: "daebaki.wow", profile: "img/profile.jpg", nickname: "daebak" },
  { id: "nomadplan", profile: "img/profile.jpg", nickname: "planner" },
  { id: "wecodeKorea", profile: "img/profile.jpg", nickname: "wecode" },
  { id: "airplaneworld", profile: "img/profile.jpg", nickname: "pilot" },
  { id: "highfiveworld", profile: "img/profile.jpg", nickname: "highworld" },
  { id: "zebraelephant", profile: "img/profile.jpg", nickname: "animalZoo" },
];

const accountDataId = accountData.map((item) => item.id);

const searchInput = document.querySelector(".searchBar input");
const resultBox = document.querySelector(".searchBarMenu ul");
const resultBoxTriangle = document.querySelector(".resultBoxTriangle");

function filterId(element) {
  const searchId = searchInput.value;
  return element.indexOf(searchId) != -1;
}

function paintMatchedId(element) {
  const paintIdList = accountData.filter((x) => {
    return x.id == element;
  });
  const resultId = document.createElement("li");
  resultId.id = "filtered-id";
  resultId.innerHTML = `<img class="filtered-image" src="${paintIdList[0].profile}"/>
  <div class="result-account"><p>${paintIdList[0].id}</p><p>${paintIdList[0].nickname}</p></div>`;
  resultId.style.display = "flex";
  resultBox.appendChild(resultId);
}

searchInput.addEventListener("keyup", function () {
  if (searchInput.value.length > 0) {
    const matchId = accountDataId.filter((x) => filterId(x));
    if (matchId.length > 0) {
      resultBoxTriangle.classList.remove("none");
      matchId.forEach((id) => paintMatchedId(id));
    } else {
      resultBoxTriangle.style.classList.add("none");
      resultBox.innerHTML = "";
    }
  } else {
    deleteResultBox();
  }
});

searchInput.addEventListener("focusout", deleteResultBox);

function deleteResultBox() {
  searchInput.value = "";
  resultBox.innerHTML = "";
  resultBoxTriangle.classList.add("none");
}
