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
  // wonik: {},
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
    searchBarInfoImg.style.display = "";
    searchBarInfoFirst.innerHTML = "검색어를 입력해주세요";
  }
}

searchBar.addEventListener("click", function () {
  searchBarInfo.style.display = "flex";
  searchBar.addEventListener("keyup", checkValue);
});
