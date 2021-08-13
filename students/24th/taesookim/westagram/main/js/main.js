const searchInput = document.querySelector(".search-bar");
const commentInput = document.querySelector(".comment-post");
const commentForm = document.querySelector(".comment-form");
const commentList = document.querySelector(".comments");
const resultContainer = document.querySelector(".suggestions-container");
const filteredList = document.querySelector(".suggestions-list");

// 검색창 포커싱에 따른 레이아웃 변화 기능
searchInput.addEventListener("focus", () => {
  const search = document.querySelector(".search");
  const searchIcon = document.querySelector(".fas.fa-search");
  const searchDelete = document.querySelector(".fas.fa-times-circle");
  search.classList.add("focus");
  searchIcon.classList.add("focus");
  searchDelete.classList.add("focus");
});

searchInput.addEventListener("blur", () => {
  const search = document.querySelector(".search");
  const searchIcon = document.querySelector(".fas.fa-search");
  const searchDelete = document.querySelector(".fas.fa-times-circle");
  if (!searchInput.value) {
    search.classList.remove("focus");
    searchIcon.classList.remove("focus");
    searchDelete.classList.remove("focus");
  }
});

// 댓글 input value에 따른 버튼 색깔 변화
commentInput.addEventListener("input", () => {
  const btnPost = document.querySelector(".btn-post");
  commentInput.value
    ? (btnPost.style.color = "#0095f6")
    : (btnPost.style.color = "#b2dffc");
});

// 댓글 작성 기능 구현
commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addComment();
  commentInput.value = "";
});

const addComment = () => {
  const username = "ttsone_ss";
  const commentList = document.querySelector(".comments");
  const spanTag = document.createElement("span");
  const pTag = document.createElement("p");
  const iTag1 = document.createElement("i");
  const iTag2 = document.createElement("i");
  const liTag = document.createElement("li");
  spanTag.append(username);
  pTag.append(spanTag, commentInput.value, iTag1, iTag2);
  iTag1.setAttribute("class", "far fa-heart");
  iTag2.setAttribute("class", "far fa-trash-alt");
  liTag.append(pTag);
  commentList.append(liTag);
};

// 댓글 좋아요 및 삭제 기능 구현
commentList.addEventListener("click", (e) => {
  const comment = document.querySelector(".comments li");
  e.target.className === "far fa-trash-alt" && comment.remove();
  if (e.target.className === "far fa-heart") {
    e.target.className = "fa fa-heart";
  } else if (e.target.className === "fa fa-heart") {
    e.target.className = "far fa-heart";
  }
});

// 검색창 검색 기능 구현
const accountArray = [
  {
    id: "wecode_bootcamp",
    nickname: ">wecode | 위코드",
    image: "/images/wecode.jpeg",
  },
  {
    id: "wecode_socialclub",
    nickname: ">wecode | 위코드",
    image: "/images/wecode_socialclub.jpeg",
  },
  {
    id: "wecode_fullstack_bootcamp",
    nickname: "Wecode Full Stack Bootcamp",
    image: "/images/wecode_fullstack.jpeg",
  },
  {
    id: "orosy.ts",
    nickname: "김태수",
    image: "/images/81681164.jpg",
  },
];

searchInput.addEventListener("keyup", () => {
  filteredList.innerHTML = "";
  resultContainer.style.display = "none";
  if (searchInput.value) {
    const filteredAccount = accountArray.filter((x) => searchFunc(x.id));
    if (filteredAccount) {
      filteredAccount.forEach((li) => showFilteredAccount(li));
    }
  }
});

searchInput.addEventListener("focusout", () => {
  const containerCap = document.querySelector(".suggestions-cap");
  resultContainer.style.display = "none";
  containerCap.style.display = "none";
});

const searchFunc = (objId) => {
  const searchId = searchInput.value;
  return objId.indexOf(searchId) !== -1;
};

const showFilteredAccount = (account) => {
  const containerCap = document.querySelector(".suggestions-cap");
  resultContainer.style.display = "block";
  containerCap.style.display = "block";
  const filteredOne = document.createElement("li");
  filteredOne.innerHTML = `<img src=${account.image} alt=${account.id} 사진 />
  <div class="suggest-container">
    <p class="suggest-username">${account.id}</p>
    <p class="suggest-description">${account.nickname}</p>
  </div>`;
  filteredList.append(filteredOne);
};
