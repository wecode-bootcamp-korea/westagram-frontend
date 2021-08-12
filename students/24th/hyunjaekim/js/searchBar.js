// 계정 데이터 배열
const userArray = [
  { id: "young93", nickname: "기면재", picture: "/assets/images/wecode.png" },
  { id: "wecode_bootcamp", nickname: ">wecode | 위코드", picture: "img/jenny.jpeg" },
  { id: "younghyun", nickname: "young hyun kim", picture: "img/jenny.jpeg" },
  { id: "younghyunkim", nickname: "영현kim입니다", picture: "img/jenny.jpeg" },
  { id: "yongju0506", nickname: "용주용주", picture: "img/jenny.jpeg" },
  { id: "yumi_sepo", nickname: " ", picture: "img/jenny.jpeg" },
  { id: "wecoder_24", nickname: "위코더24기", picture: "img/jenny.jpeg" },
  { id: "withme", nickname: "나와함께", picture: "https://#" },
  { id: "wy___ynd", nickname: "전용준", picture: "https://#" },
  { id: "yanggeng88", nickname: "junyong", picture: "https://#" },
  { id: "wnn_99", nickname: "우승💪", picture: "https://#" },
];

const searchWrapper = document.querySelector(".searchWrapper");
const searchInput = document.querySelector(".searchInput");
const searchSquare = document.querySelector(".search-squre");

searchInput.addEventListener("keyup", () => {
  let searchValue = searchInput.value;
  let result = [];
  let searchContents = document.createElement("div");
  searchContents.className = "search-contents";
  // 리셋하기
  if (searchWrapper.lastChild) {
    while (searchWrapper.lastChild) {
      searchWrapper.removeChild(searchWrapper.lastChild);
    }
  }

  if (searchValue !== "") {
    for (let i = 0; i < userArray.length; i++) {
      let same = userArray[i].id.indexOf(searchValue);
      if (same === 0) {
        result.push(userArray[i]);
      }
    }
    addProfile(result);
    //! 문제 구간 (disappear 어떻게 해지하지)
    searchSquare.classList.add("disappear");
  }
});

function addProfile(result) {
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
