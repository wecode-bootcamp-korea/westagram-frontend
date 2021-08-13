// 계정 데이터 배열
const userArray = [
  { id: "young93", nickname: "기면재", picture: "assets/images/wecode.png" },
  { id: "wecode_bootcamp", nickname: ">wecode | 위코드", picture: "assets/images/wecode.png" },
  { id: "younghyun", nickname: "young hyun kim", picture: "assets/images/wecode.png" },
  { id: "younghyunkim", nickname: "영현kim입니다", picture: "assets/images/wecode.png" },
  { id: "yongju0506", nickname: "용주용주", picture: "assets/images/wecode.png" },
  { id: "yumi_sepo", nickname: " ", picture: "assets/images/wecode.png" },
  { id: "wecoder_24", nickname: "위코더24기", picture: "assets/images/wecode.png" },
  { id: "withme", nickname: "나와함께", picture: "assets/images/wecode.png" },
  { id: "wy___ynd", nickname: "전용준", picture: "assets/images/wecode.png" },
  { id: "yanggeng88", nickname: "junyong", picture: "assets/images/wecode.png" },
  { id: "wnn_99", nickname: "우승💪", picture: "assets/images/wecode.png" },
];

// 예전 검색어 프리뷰 데이터
const previewData = [
  { id: "jini03", nickname: "주철진", picture: "assets/images/wecode.png" },
  { id: "wecode_bootcamp", nickname: ">wecode | 위코드", picture: "assets/images/wecode.png" },
];

const searchWrapper = document.querySelector(".searchWrapper");
const searchInput = document.querySelector(".searchInput");
const searchSquare = document.querySelector(".search-squre");
const searchResultContainer = document.querySelector(".searchResultContainer");
const searchPlaceholder = document.querySelector(".searchPlaceholder");

function createProfile(result) {
  result.forEach((userInfo) => {
    let searchContents = document.createElement("div");
    searchContents.className = "searchResultBox";

    searchContents.innerHTML = `
          <div class="profileWrapper medium">
                              <img src="${userInfo.picture}" alt="스토리 프로필 사진" class="profileImg medium">
                          </div>
                          <div class="searchDetail">
                              <strong class="userID">${userInfo.id}</strong>
                              <p class="profileDesc">${userInfo.nickname}</p>
                          </div>`;
    searchWrapper.appendChild(searchContents);
  });
}

function resetSearchResult() {
  // 리셋하기
  if (searchWrapper.lastChild) {
    while (searchWrapper.lastChild) {
      searchWrapper.removeChild(searchWrapper.lastChild);
    }
  }
}

function findMatches() {
  let searchValue = searchInput.value;
  let result = [];
  let searchContents = document.createElement("div");
  searchContents.className = "search-contents";

  // 리셋하기
  resetSearchResult();

  // 검색하기
  if (searchValue !== "") {
    userArray.forEach((e) => {
      let matched = e.id.indexOf(searchValue);
      if (matched === 0) {
        result.push(e);
      }
    });
    createProfile(result);
  }
  // 검색창 공란일 때 보여줄 기본 data 호출
  if (searchValue === "") {
    createProfile(previewData);
  }
}

function init() {
  searchInput.addEventListener("keyup", findMatches);
  searchInput.addEventListener("focus", () => {
    searchResultContainer.classList.remove("disappear");
    searchInput.placeholder = "Search";
    searchPlaceholder.classList.add("disappear");

    let inputValue = searchInput.value;
    // 공란인 상태에서 포커스 되었을 떄
    if (inputValue === "") {
      resetSearchResult();
      createProfile(previewData);
    }
  });
  searchInput.addEventListener("focusout", () => {
    searchResultContainer.classList.add("disappear");
    searchInput.placeholder = "";
    searchPlaceholder.classList.remove("disappear");
  });
}

init();
