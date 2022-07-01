let objectOfSearch = {
  wecode_bootcamp: {
    id: "wecode_bootcamp",
    nickname: "Wecode | 위코드",
    img: '<img src="./guide/tobe/3.png" alt="" />',
  },
  wecode_founder: {
    id: "wecode_founder",
    nickname: "송은우 (Eun Woo Song)",
    img: '<img src="./guide/tobe/recommend3.jpg" alt="" />',
  },
  wjddms4107: {
    id: "wjddms4107",
    nickname: "노정은 (Noh Jeong Eun)",
    img: '<img src="./guide/tobe/wjddms4107.png" alt="" />',
  },
  pjyong01: {
    id: "pjyong01",
    nickname: "박정용 (Park Jeong Yong)",
    img: '<img src="./guide/tobe/pjyong01.png" alt="" />',
  },
  "gongwon35.b": {
    id: "gongwon35.b",
    nickname: "박성은 (Park Seong Eun)",
    img: '<img src="./guide/tobe/gongwon35.b.png" alt="" />',
  },
  minjee4281: {
    id: "minjee428",
    nickname: "손민지 (Son Min Jee)",
    img: '<img src="./guide/tobe/minjee4281.png" alt="" />',
  },
  schk9611: {
    id: "schk9611",
    nickname: "손찬규 (Son Chan Kyu)",
    img: '<img src="./guide/tobe/schk9611.png" alt="" />',
  },
  willy624777: {
    id: "willy624777",
    nickname: "이원재 (Lee Won Jae)",
    img: '<img src="./guide/tobe/willy624777.png" alt="" />',
  },
  ljhun9012: {
    id: "ljhun9012",
    nickname: "이정훈 (Lee Jeong Hoon)",
    img: '<img src="./guide/tobe/ljhun9012.png" alt="" />',
  },
  kangteuck: {
    id: "kangteuck",
    nickname: "이혜진 (Lee Hye Jin)",
    img: '<img src="./guide/tobe/kangteuck.png" alt="" />',
  },
  yelihi19: {
    id: "yelihi19",
    nickname: "최원익 (Choi Won Ik)",
    img: '<img src="./guide/tobe/yelihi19.png" alt="" />',
  },
};

let searchBar = document.querySelector(".search-bar");
let searchBarInfo = document.querySelector(".search-info");
let searchBarInfoImg = document.querySelector(".search-info-imgbox");
let searchBarInfoFirst = document.querySelector(".search-info-first");
let searchIcon = document.querySelector(".search-icon");
let infobox = document.querySelector(".info-box");
let idAndNickName = document.querySelector(".search-info-idandnick");

function checkValue() {
  if (searchBar.value) {
    Object.keys(objectOfSearch).map((key) => {
      if (key.includes(searchBar.value)) {
        infobox.style.display = "none";
        searchBarInfo.style.alignItems = "flex-start";

        let newSearchImgBox = document.createElement("div");
        newSearchImgBox.className = "info-box";
        searchBarInfo.appendChild(newSearchImgBox);

        let newImgBox = document.createElement("div");
        newImgBox.className = "search-info-imgbox";
        newImgBox.innerHTML = objectOfSearch[key].img;
        newSearchImgBox.appendChild(newImgBox);

        let newIdAndNick = document.createElement("div");
        newIdAndNick.className = "search-info-idandnick";
        newSearchImgBox.appendChild(newIdAndNick);

        let newId = document.createElement("div");
        newId.className = "search-info-id";
        newId.innerHTML = objectOfSearch[key].id;
        newIdAndNick.appendChild(newId);

        let newNickName = document.createElement("div");
        newNickName.className = "search-info-nickname";
        newNickName.innerHTML = objectOfSearch[key].nickname;
        newIdAndNick.appendChild(newNickName);

        searchBar.addEventListener("keyup", function () {
          newSearchImgBox.remove();
        });
      } else {
        searchBarInfoImg.style.display = "none";
        searchBarInfoFirst.innerHTML = "검색 결과 일치하는 결과가 없습니다.";
      }
    });
  } else {
    infobox.style.display = "flex";
    searchBarInfoImg.style.display = "";
    searchBarInfoFirst.innerHTML = "검색어를 입력해주세요";
  }
}

searchBar.addEventListener("click", function () {
  searchBarInfo.style.display = "flex";
  searchBar.addEventListener("keyup", checkValue);
});
