const $inputChat = document.getElementsByClassName("input-chat")[0];
const $btnChat = document.getElementsByClassName("btn-chat")[0];
const $commentBox = document.getElementsByClassName("box-comment")[0];

// 댓글 쓰기
const leaveComment = function (e) {
  e.preventDefault();
  const comment = document.createElement("p");
  const wrapComment = document.createElement("div");
  comment.textContent = $inputChat.value;
  wrapComment.appendChild(comment);
  comment.classList.add("text-comment");
  $inputChat.value = "";

  const likeIcon = document.createElement("img");
  likeIcon.src = "../src/icon/heart.png";
  likeIcon.width = 14;
  likeIcon.height = 14;
  likeIcon.classList.add("img-heart-comment");
  wrapComment.appendChild(likeIcon);

  const deleteIcon = document.createElement("img");
  deleteIcon.src = "../src/icon/delete.png";
  deleteIcon.width = 10;
  deleteIcon.height = 10;
  deleteIcon.classList.add("img-delete-comment");
  wrapComment.appendChild(deleteIcon);

  $commentBox.appendChild(wrapComment);
};

const visibleButton = function () {
  if ($inputChat.value.length > 0) {
    $btnChat.classList.add("btn-chat-effect");
  } else {
    $btnChat.classList.remove("btn-chat-effect");
  }
};

$btnChat.addEventListener("click", leaveComment);
$inputChat.addEventListener("keyup", visibleButton);

// 하트 & 지우기
const controlImg = function (e) {
  if (e.target.getAttribute("src") == "../src/icon/heart.png") {
    e.target.setAttribute("src", "../src/icon/fullHeart.png");
  } else if (e.target.getAttribute("src") == "../src/icon/fullHeart.png") {
    e.target.setAttribute("src", "../src/icon/heart.png");
  }
  if (e.target.className === "img-delete-comment") {
    let parent = e.target.parentElement;
    parent.remove();
  }
};
$commentBox.addEventListener("click", controlImg);

// 아이디 찾기
const $searchBar = document.getElementsByClassName("input-searchBar")[0];
const $filteredBox = document.getElementsByClassName("box-filteredId")[0];
const idData = [
  {
    userId: "apple_01",
    userName: "새콤달콤",
    userImg: "../src/img/profile/apple.jpg",
  },
  {
    userId: "applepie0101",
    userName: "파이는3.14",
    userImg: "../src/img/profile/applepie.jpg",
  },
  {
    userId: "peach_01",
    userName: "어피치가되고싶어",
    userImg: "../src/img/profile/peach.jpg",
  },
  {
    userId: "peachcookie123",
    userName: "스윗복숭",
    userImg: "../src/img/profile/peach_2.jpg",
  },
  {
    userId: "watermelon_03",
    userName: "수박수박수",
    userImg: "../src/img/profile/watermelon.jpg",
  },
  {
    userId: "water33",
    userName: "삼다수",
    userImg: "../src/img/profile/water.jpg",
  },
  {
    userId: "lemon_04",
    userName: "레몽몽",
    userImg: "../src/img/profile/lemon.jpg",
  },
  {
    userId: "lemonpie4040",
    userName: "레몬파이",
    userImg: "../src/img/profile/lemon.jpg",
  },
  {
    userId: "candy_0426",
    userName: "사탕해",
    userImg: "../src/img/profile/candy.jpg",
  },
  {
    userId: "cake2626",
    userName: "생일이다",
    userImg: "../src/img/profile/cake.jpg",
  },
];

const searchId = function () {
  let result = idData.filter((v, i) => {
    return v.userId.includes($searchBar.value);
  });
  result.forEach((v, i) => {
    const wrapFiltered = document.createElement("div");
    const wrapText = document.createElement("div");
    const filteredImg = document.createElement("img");
    const filteredId = document.createElement("span");
    const filteredName = document.createElement("span");
    filteredImg.classList.add("filteredImg");
    wrapFiltered.classList.add("wrapFiltered");
    filteredId.classList.add("filteredId");
    filteredName.classList.add("filteredName");
    wrapText.classList.add("wrapText");

    wrapFiltered.appendChild(filteredImg);
    filteredImg.src = v.userImg;

    filteredId.innerText = v.userId;
    wrapText.appendChild(filteredId);

    filteredName.innerText = v.userName;
    wrapText.appendChild(filteredName);
    wrapFiltered.appendChild(wrapText);

    $filteredBox.appendChild(wrapFiltered);
  });
  if ($searchBar.value.length === 0) {
    eraseSearchId();
    const boxRecentSearch = document.createElement("div");
    const recentSearchTitle = document.createElement("p");
    const recentSearchContent = document.createElement("p");
    recentSearchTitle.innerText = "최근 검색 항목";
    recentSearchTitle.classList.add("title-recentSearch");
    recentSearchContent.innerText = "최근 검색 내역 없음.";
    recentSearchContent.classList.add("content-recentSearch");
    boxRecentSearch.appendChild(recentSearchTitle);
    boxRecentSearch.appendChild(recentSearchContent);
    $filteredBox.appendChild(boxRecentSearch);
  }
};

const eraseSearchId = function () {
  while ($filteredBox.hasChildNodes()) {
    $filteredBox.removeChild($filteredBox.firstChild);
  }
};

$searchBar.addEventListener("keyup", searchId);
$searchBar.addEventListener("keydown", eraseSearchId);
$searchBar.addEventListener("click", () => {
  $filteredBox.style.display = "inline-block";
});
$searchBar.addEventListener("focusout", () => {
  $filteredBox.style.display = "none";
  $searchBar.value = "";
});

// 메뉴박스
const $wrapMenu = document.getElementsByClassName("wrap-menu")[0];
const $profileImg = document.getElementsByClassName("img-navProfile")[0];
const $body = document.getElementsByTagName("body")[0];
const controlMenu = function (e) {
  if (e.target.className === "img-navProfile") {
    if ($wrapMenu.style.display === "none") {
      $wrapMenu.style.display = "inline-block";
    } else {
      $wrapMenu.style.display = "none";
    }
  } else {
    $wrapMenu.style.display = "none";
  }
};
$body.addEventListener("click", controlMenu);
