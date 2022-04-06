const likeButton = document.body.querySelector(".button-heart");
const bookmarkButton = document.body.querySelector(".button-bookmark");
const postCommentInput = document.body.querySelector(".post-comment-input");
const postCommentButton = document.body.querySelector(".post-comment-button");
const postCommentList = document.body.querySelector(".post-comment-list");
const gnbSearchBar = document.body.querySelector(".gnb-search");
const gnbSearchResult = document.body.querySelector(".gnb-search-result");
const gnbSearchResultList = document.body.querySelector(
  ".gnb-search-result-list"
);
const gnbProfileSettingButton = document.body.querySelector(".button-profile");
const gnbProfileSetting = document.body.querySelector(
  ".gnb-profile-setting-modal"
);

// 피드 버튼들 동작 시 클래스 fa-solid 바꾸기 등

const heartButtonToggle = likeButton.addEventListener("click", () => {
  likeButton.classList.toggle("liked");
  likeButton.querySelector("i").classList.toggle("fa-regular");
  likeButton.querySelector("i").classList.toggle("fa-solid");
});

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmarked");
  bookmarkButton.querySelector("i").classList.toggle("fa-regular");
  bookmarkButton.querySelector("i").classList.toggle("fa-solid");
});

// 댓글 한 글자 이상 작성해야 게시 버튼 활성화
postCommentInput.addEventListener("keyup", () => {
  postCommentButton.disabled = postCommentInput.value.slice().trim()
    ? false
    : true;
});

// 댓글 입력하고 enter 프레스 하면 댓글 달리게 하기

// 1. li 엘리먼트를 만드는 함수
const createCommentLi = (id, comment) => {
  const li = document.createElement("li");
  li.className = "post-comment-item";

  const postCommentItemLeft = document.createElement("div");
  postCommentItemLeft.className = "post-comment-item-left";

  const userProfileLink = document.createElement("a");
  userProfileLink.href = "#";
  const userId = document.createElement("strong");
  userId.className = "user-id";
  userId.textContent = id;
  userProfileLink.appendChild(userId);

  const commentContent = document.createElement("span");
  commentContent.className = "post-comment-content";
  commentContent.textContent = comment;

  postCommentItemLeft.appendChild(userProfileLink);
  postCommentItemLeft.appendChild(commentContent);

  const postCommentItemRight = document.createElement("div");
  postCommentItemRight.className = "post-comment-item-right";

  const heartButton = document.createElement("button");
  heartButton.className = "button-heart";
  const heartIcon = document.createElement("i");
  heartIcon.className = "fa-regular fa-heart";
  heartButton.appendChild(heartIcon);

  heartButton.addEventListener("click", () => {
    heartButton.classList.toggle("liked");
    heartButton.querySelector("i").classList.toggle("fa-regular");
    heartButton.querySelector("i").classList.toggle("fa-solid");
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "button-delete";
  const deleteStrong = document.createElement("strong");
  deleteStrong.textContent = "삭제";
  deleteButton.appendChild(deleteStrong);

  deleteButton.addEventListener("click", (e) => {
    e.target.closest("li").remove();
  });

  postCommentItemRight.appendChild(heartButton);
  postCommentItemRight.appendChild(deleteButton);

  li.appendChild(postCommentItemLeft);
  li.appendChild(postCommentItemRight);

  return li;
};

// 2-1. 버튼 클릭 시 댓글 추가

postCommentButton.addEventListener("click", () => {
  if (!postCommentInput.value.slice().trim()) {
    return;
  }

  const newComment = createCommentLi("garuda352", postCommentInput.value);
  postCommentInput.value = "";
  postCommentButton.disabled = true;
  postCommentList.appendChild(newComment);
});

// 2-2. 엔터 입력 시 댓글 추가

postCommentInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    if (!postCommentInput.value.slice().trim()) {
      return;
    }
    const newComment = createCommentLi("garuda352", postCommentInput.value);
    postCommentInput.value = "";
    postCommentButton.disabled = true;
    postCommentList.appendChild(newComment);
  }
});

// 아이디 검색 기능

const idDataArray = [
  {
    id: "wecode_bootcamp",
    username: ">wecode | 위코드",
    profileImgUrl:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/53930194_2310969732301384_5134167175078084608_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2QAs8zwSlP0AX9Yv2f9&_nc_ht=scontent-ssn1-1.xx&oh=00_AT9koDC1iUJjCHPBquxVXhGHmIKWITRsl7teV5B8J9xCUA&oe=62732DB2",
  },
  {
    id: "sfc.seongnam",
    username: "성남FC - Seongnam FC",
    profileImgUrl:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/52606079_1182941335204372_5780145288782020608_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=8eSGiwkmhv8AX_ZAVko&_nc_ht=scontent-ssn1-1.xx&oh=00_AT9mf9yHtSNjSQ7yHFvBWYafvkBDAwdUo0vPmrvRFngXaw&oe=6272465A",
  },
  {
    id: "suwonsamsungfc",
    username: "수원삼성블루윙즈축구단",
    profileImgUrl:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/179942605_3973581779374288_4019617340567091806_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=aLb1iZ9O798AX8TnE-S&tn=Af7c0gtskNonnRcz&_nc_ht=scontent-ssn1-1.xx&oh=00_AT9dx38wVLtSitl48yjLn1fePmYzpoPPcacR3oDTOyviLQ&oe=62729187",
  },
  {
    id: "suwonfc",
    username: "수원FC (Suwon FC)",
    profileImgUrl:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/241263193_5993106480763304_6447924619962113569_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=opmy1_zR0D8AX_uMgfy&tn=Af7c0gtskNonnRcz&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_iMCZnOSt8Z7TQBwUGB41pdsEuznNioQFYfuMpXa37Lw&oe=625045FD",
  },
];

let matchedArray = idDataArray;

const paintMatchedArray = () => {
  gnbSearchResultList.innerHTML = "";

  matchedArray.map((el) => {
    const matchedLi = document.createElement("li");
    matchedLi.className = "gnb-search-result-item modal-item";

    const matchedLiLeft = document.createElement("div");
    matchedLiLeft.className = "gnb-search-result-item-left";
    const profileImg = document.createElement("img");
    profileImg.src = el.profileImgUrl;
    profileImg.className = "gnb-search-result-item-img";
    const idUsernameWrapper = document.createElement("div");
    idUsernameWrapper.className = "gnb-search-result-item-profile";
    const id = document.createElement("strong");
    id.textContent = el.id;
    id.className = "gnb-search-result-item-id";
    const username = document.createElement("span");
    username.textContent = el.username;
    username.className = "gnb-search-result-item-username";

    idUsernameWrapper.appendChild(id);
    idUsernameWrapper.appendChild(username);

    matchedLiLeft.appendChild(profileImg);
    matchedLiLeft.appendChild(idUsernameWrapper);

    const matchedLiRight = document.createElement("div");
    matchedLiRight.className = "gnb-search-result-item-right";
    const xButton = document.createElement("i");
    xButton.className = "fa-solid fa-x";
    matchedLiRight.appendChild(xButton);

    matchedLi.appendChild(matchedLiLeft);
    matchedLi.appendChild(matchedLiRight);

    gnbSearchResultList.appendChild(matchedLi);
  });
};

gnbSearchBar.addEventListener("focus", () => {
  gnbSearchResult.classList.add("is-active");
  paintMatchedArray();
});

gnbSearchBar.addEventListener("blur", () => {
  gnbSearchResult.classList.remove("is-active");
});

gnbProfileSettingButton.addEventListener("click", () => {
  gnbProfileSetting.classList.add("is-active");
});

gnbProfileSettingButton.addEventListener("blur", () => {
  gnbProfileSetting.classList.remove("is-active");
});

gnbSearchBar.addEventListener("keyup", (e) => {
  matchedArray = idDataArray.filter((el) =>
    el.id.startsWith(e.target.value.toLowerCase())
  );

  paintMatchedArray();
});
