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
    id: "minjee4281",
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
// 객체에 이미지 정보랑 아이디랑 닉네임을 모아두었음.

let searchBar = document.querySelector(".search-bar");
// 제일상단 검색창
let searchBarInfo = document.querySelector(".search-info");
// 정보가 담길 말풍선
let searchBarInfoImg = document.querySelector(".search-info-imgbox");
// 돋보기 아이콘을 따로 모아줌
let searchBarInfoFirst = document.querySelector(".search-info-first");
// 검색어를 입력해주세요 와 검색 결과가 없을 경우 텍스트를 담는 상자
let infoBox = document.querySelector(".info-box");
// 돋보기와 텍스트를 한번에 담는 상자

function checkValue() {
  let searchBarValue = searchBar.value.toLowerCase();
  // 입력받은 벨류값을 소문자로 전환.
  if (searchBarValue) {
    // 검색창에 벨류가 있을떄 실행
    const result = Object.keys(objectOfSearch).find((key) =>
      key.includes(searchBarValue)
    );
    // result는 객체의 키값이 검색벨류값과 같은 첫번째 키를 반환.
    if (result) {
      // 키값이 존재할때 실행
      Object.keys(objectOfSearch).map((key) => {
        if (key.includes(searchBarValue)) {
          // 키값이 검색창의 벨류를 갖고있을떄 실행
          infoBox.style.display = "none";
          // 돋보기와 텍스트를 없앰
          let newSearchImgBox = document.createElement("div");
          newSearchImgBox.className = "info-box";
          searchBarInfo.appendChild(newSearchImgBox);
          // 벨류의 값에 맞는 객체의 이미지,아이디.닉네임을 담을 상자를 만들어줌
          let newImgBox = document.createElement("div");
          newImgBox.className = "search-info-imgbox";
          newImgBox.innerHTML = objectOfSearch[key].img;
          newSearchImgBox.appendChild(newImgBox);
          // 이미지가 들어갈 이미지 박스를 생성해줌
          let newIdAndNick = document.createElement("div");
          newIdAndNick.className = "search-info-idandnick";
          newSearchImgBox.appendChild(newIdAndNick);
          // 아이디와 닉네임이 들어갈 상자를 만듬
          let newId = document.createElement("div");
          newId.className = "search-info-id";
          newId.innerHTML = objectOfSearch[key].id;
          newIdAndNick.appendChild(newId);
          // 아이디를 만들고 바로위 상자에 넣어줌
          let newNickName = document.createElement("div");
          newNickName.className = "search-info-nickname";
          newNickName.innerHTML = objectOfSearch[key].nickname;
          newIdAndNick.appendChild(newNickName);
          // 닉네임을 만들고 위에위에 상자를 넣어줌.
          searchBar.addEventListener("keyup", function () {
            // 한번더 키 입력시
            newSearchImgBox.remove();
            // 위에 만들어준 결과를 없애주고 다시 함수가 실행됨
          });
        }
      });
    } else {
      // 키값이 존재하지않을때 실행
      infoBox.style.display = "";
      // 검색 결과 없음창 출력
      searchBarInfoImg.style.display = "none";
      // 돋보기 이미지를 없애줌
      searchBarInfoFirst.innerHTML = "검색 결과 일치하는 결과가 없습니다.";
      // 텍스트를 검색결과 없음으로 수정
    }
  } else {
    // 검색 벨류가 하나도 없을경우
    infoBox.style.display = "flex";
    //
    searchBarInfoImg.style.display = "";
    // 돋보기 화면이 다시 보이도록 설정해줌
    searchBarInfoFirst.innerHTML = "검색어를 입력해주세요";
    // 텍스트를 검색어를 입력해주세요로 수정
  }
}

searchBar.addEventListener("click", function () {
  // 검색창을 클릭했을떄
  searchBarInfo.style.display = "flex";
  // 검색 말풍선이 나오도록 설정
  searchBar.addEventListener("keyup", checkValue);
  // 검색창에 키를 입력했을떄 상단에 정의한 함수 실행
});
