const searchInput = document.getElementById('searchInput');

// 검색창 결과 모달
let results = document.getElementById("res");

var matchingNames = [];

var idsWithImages = [
  ["georgekim", "./img/profile_hat.jpg"],
  ["georgekim_official", "./img/profile_dark.jpg"],
  ["google_korea", "./img/google.jpeg"],
  ["general_assembly_official", "./img/GA.png"],
  ["notion_so_official", "./img/notion.jpeg"],
  ["slack_official", "./img/slack_hash_256.png"],
  ["wecode", "./img/bwLogo.png"],
  ["wecode_korea", "./img/wecode_trans.jpeg"],
  ["wecode_united_states", "./img/cowork.jpeg"],
]

searchInput.addEventListener('keyup', () => {
  searchIdWithImg();

  deletePrevItems();

  renderIdsWithImages();
  
});

function searchIdWithImg() {
  if (searchInput.value !== "") {
    results.classList.remove("hideResults");
  } else {
    results.classList.add("hideResults");
  }

  idsWithImages.map((name) => {
    // 내가 인풋창에 인풋한 값이랑 idlist 목록에 있는 스트링 요소의 substring이 같은 게 있을 때
    if(name[0].indexOf(searchInput.value) !== -1) {
      matchingNames.push(name);
    }
  }) 
};


function deletePrevItems() {
  const targetLocation = document.getElementById('res');
  while(targetLocation.firstChild) {
    targetLocation.removeChild(targetLocation.firstChild);
  }
}

function renderIdsWithImages() {

  matchingNames.forEach((match) => {
    //검색 결과 엘레멘트들의 래퍼
    const matchedItem = document.createElement('div');
    matchedItem.classList.add('searchResultWrapper');
    //매치 결과의 프로필 이미지
    const matchedProfileImg = document.createElement('div');
    matchedProfileImg.classList.add('searchResultImg');
    matchedProfileImg.style.color = "red";
    matchedProfileImg.style.backgroundImage = `url('${match[1]}')`;
    matchedItem.appendChild(matchedProfileImg);

    //매치 결과의 프로필 이름
    const matchedUserName = document.createElement('div');
    matchedUserName.classList.add('searchResultId');
    matchedUserName.textContent = match[0];
    matchedItem.appendChild(matchedUserName);

    results.appendChild(matchedItem);
  })
  matchingNames = []; 
}









