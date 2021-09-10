// ===댓글 추가 기능===
const btn_upload = document.querySelector(".btn_upload");
const btn_delete = document.querySelector(".comment_delete");
const textarea = document.querySelector("textarea");
const article_comments = document.querySelector(".article_comments");
const comments_row = document.querySelector(".comments_row");
const my_id = document.querySelector(".my_id").innerText;

// value 입력되었을 때, 댓글 Element를 추가하는 함수
const uploadComment = () => {
  if (textarea.value) {
    const newSpan = document.createElement("span");
    const newP = document.createElement("p");
    const newText = document.createTextNode(textarea.value);
    const newId = document.createTextNode(my_id);
    const newHeart = document.createElement("i");
    const newTrash = document.createElement("i");
    const newDiv = document.createElement("div");
    const newCommentDiv = document.createElement("div");
    newSpan.classList.add("user_id");
    newCommentDiv.classList.add("comments_menu");
    newDiv.classList.add("comments_row");
    newHeart.classList.add("comment_like", "far", "fa-heart");
    newTrash.classList.add("comment_delete", "far", "fa-trash-alt");

    newHeart.onclick = () => toggleLike(newHeart);
    newTrash.onclick = () => deleteComment(newTrash);

    newSpan.appendChild(newId);
    newP.appendChild(newSpan);
    newP.appendChild(newText);
    newCommentDiv.appendChild(newHeart);
    newCommentDiv.appendChild(newTrash);
    newDiv.appendChild(newP);
    newDiv.appendChild(newCommentDiv);
    article_comments.appendChild(newDiv);

    textarea.value = "";
  }
};

// Enter 눌렀을 때 댓글 추가
textarea.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    uploadComment();
  }

  if (textarea.value) {
    btn_upload.style.opacity = 1;
  } else {
    btn_upload.style.opacity = 0.4;
  }
});

// 버튼 눌렀을 때 댓글 추가
btn_upload.addEventListener("click", uploadComment);

// ===댓글 삭제 기능===
const deleteComment = (el) => {
  el.parentNode.parentNode.remove();
};

// ===좋아요 Toggle 기능===
const comment_like = document.querySelector(".comment_like");
let isLiked = false;

const toggleLike = (el) => {
  isLiked = !isLiked;
  if (isLiked === true) {
    el.classList.remove("far");
    el.classList.add("fas");
    el.style.color = "#ED4956";
  } else {
    el.classList.remove("fas");
    el.classList.add("far");
    el.style.color = "rgba(0, 0, 0, 0.1)";
  }
};

// ===Nav Profile 메뉴 박스 생성 기능===
const btn_profile = document.querySelector(".btn_profile");
const menu_box = document.querySelector(".menu_box");
let isHidden = true;

btn_profile.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden === false) {
    menu_box.style.display = "block";
  } else {
    menu_box.style.display = "none";
  }
});

// ===아이디 검색 기능===
const searchbox = document.querySelector(".search");
const search_list = document.querySelector("ul");
const search_result_box = document.querySelector(".search_result_box");
const btn_init = document.querySelector(".btn_init");
const user_list = [
  {
    id: "up_enery_bar",
    description: "난 에너지바",
    image: "./img/energy.jpg",
  },
  {
    id: "deli_cious.pizza",
    description: "맛있는 야채 피자",
    image: "./img/pizza.jpg",
  },
  {
    id: "im.tendong_",
    description: "JMT 텐동",
    image: "./img/tendong.jpg",
  },
  {
    id: "im.yellow_peaaach",
    description: "노랑 복숭아 탄산",
    image: "./img/juice.jpg",
  },
  {
    id: "gunchim_loopy",
    description: "군침이 싹도노",
    image: "./img/cake.jpg",
  },
  {
    id: "__bingsuya",
    description: "틈헤이러 빙수",
    image: "./img/bingsu.jpg",
  },
  {
    id: "cheers_beers_",
    description: "치어스비어스 홍대 1호점",
    image: "./img/beer.jpg",
  },
];

// ul이 그 전의 결과값이 담긴 childNode를 가지고 있으면 삭제하는 함수
const deletePreviousResult = (listBox) => {
  while (listBox.hasChildNodes()) {
    listBox.removeChild(listBox.firstChild);
  }
};

// filter된 data로 새로운 list element 생성하는 함수
const createFilteredElement = (filteredArray, listBox) => {
  filteredArray.forEach((element) => {
    let newLi = document.createElement("li");
    let newProfile = document.createElement("img");
    let newRow = document.createElement("div");
    let newId = document.createElement("h5");
    let newDes = document.createElement("h5");
    newDes.classList.add("user_description");
    newProfile.classList.add("profile_s");
    newId.classList.add("user_id");
    newProfile.src = element.image;
    newId.innerText = element.id;
    newDes.innerText = element.description;

    newRow.appendChild(newId);
    newRow.appendChild(newDes);
    newLi.appendChild(newProfile);
    newLi.appendChild(newRow);
    listBox.appendChild(newLi);
  });
};

// searchBox에 값이 있을 때, refreshBtn을 보여주는 함수
const showRefreshBtn = (inputElement) => {
  inputElement.value
    ? ((btn_init.style.display = "block"),
      (search_result_box.style.display = "block"))
    : ((btn_init.style.display = "none"),
      (search_result_box.style.display = "none"));
};

// searchBox에 내용을 입력했을 때 실행
searchbox.addEventListener("keyup", () => {
  const result = user_list.filter((user) => user.id.includes(searchbox.value));

  deletePreviousResult(search_list);
  createFilteredElement(result, search_list);
  showRefreshBtn(searchbox);
});
