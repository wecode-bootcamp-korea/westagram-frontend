const likeButton = document.body.querySelector(".button-heart");
likeButton.addEventListener("click", () => {
  likeButton.classList.toggle("liked");
  likeButton.querySelector("i").classList.toggle("fa-regular");
  likeButton.querySelector("i").classList.toggle("fa-solid");
});

const bookmarkButton = document.body.querySelector(".button-bookmark");
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmarked");
  bookmarkButton.querySelector("i").classList.toggle("fa-regular");
  bookmarkButton.querySelector("i").classList.toggle("fa-solid");
});

const postCommentForm = document.body.querySelector(".post-comment");
const postCommentButton = document.body.querySelector(".post-comment-button");
const postCommentInput = document.body.querySelector(".post-comment-input");
const postCommentList = document.body.querySelector(".post-comment-list");
postCommentInput.addEventListener("keyup", () => {
  postCommentButton.disabled = postCommentInput.value.slice().trim()
    ? false
    : true;
});

const createCommentLi = (id, comment) => {
  const postCommentItem = document.createElement("li");
  postCommentItem.className = "post-comment-item";

  postCommentItem.innerHTML = `<div class="post-comment-item-left">
  <a>
    <strong class="user-id">${id}</strong>
  </a>
  <span class="post-comment-content">${comment}</span>
</div>
<div class="post-comment-item-right">
  <button class="button-heart">
    <i class="fa-regular fa-heart" aria-hidden ></i>
  </button>
  <button class="button-delete">
    <strong class="button-delete-strong">삭제</strong>
  </button>
</div>`;

  return postCommentItem;
};

postCommentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!postCommentInput.value.slice().trim()) {
    return;
  }

  const newComment = createCommentLi("garuda352", postCommentInput.value);
  postCommentInput.value = "";
  postCommentButton.disabled = true;
  postCommentList.appendChild(newComment);
});

postCommentList.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-heart")) {
    e.target.parentNode.classList.toggle("liked");
    e.target.classList.toggle("fa-regular");
    e.target.classList.toggle("fa-solid");
  } else if (e.target.classList.contains("button-delete-strong")) {
    e.target.closest(".post-comment-item").remove();
  }
});

const gnbSearchBar = document.body.querySelector(".gnb-search");
const gnbSearchResult = document.body.querySelector(".gnb-search-result");
const gnbSearchResultList = document.body.querySelector(
  ".gnb-search-result-list"
);

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

const filterMatchedArray = (searchingString) => {
  matchedArray = idDataArray.filter((el) =>
    el.id.startsWith(searchingString.toLowerCase())
  );
};

const paintMatchedArray = () => {
  gnbSearchResultList.innerHTML = "";

  matchedArray.map((el) => {
    const matchedLi = document.createElement("li");
    matchedLi.className = "gnb-search-result-item modal-item";

    matchedLi.innerHTML = `<a href="#">
        <div class="gnb-search-result-item-left">
          <img alt="Profile image of ${el.username}" src="${el.profileImgUrl}" class="gnb-search-result-item-img"/>
          <div>
            <strong class="gnb-search-result-item-id">${el.id}</strong>
            <span class="gnb-search-result-item-id">${el.username}</span>
          </div>
        </div>
        <div class="gnb-search-result-item-right">
          <i class="fa-solid fa-x" aria-hidden></i>
        </div>
      </a>`;

    gnbSearchResultList.appendChild(matchedLi);
  });
};

gnbSearchBar.addEventListener("keyup", (e) => {
  filterMatchedArray(e.target.value);
  paintMatchedArray();
});

gnbSearchBar.addEventListener("focus", () => {
  gnbSearchResult.classList.add("is-active");
  paintMatchedArray();
});

gnbSearchBar.addEventListener("blur", () => {
  gnbSearchResult.classList.remove("is-active");
});

const gnbProfileSettingButton = document.body.querySelector(".button-profile");
const gnbProfileSetting = document.body.querySelector(
  ".gnb-profile-setting-modal"
);

gnbProfileSettingButton.addEventListener("click", () => {
  gnbProfileSetting.classList.add("is-active");
});

gnbProfileSettingButton.addEventListener("blur", () => {
  gnbProfileSetting.classList.remove("is-active");
});
