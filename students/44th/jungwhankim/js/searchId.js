const searchInput = document.getElementById('searchInput');

// 검색창 결과 모달
let results = document.getElementById("res");

let idList = [
  'georgekim',
  'georgekim_official',
  'georgekim_fake',
  'jungwhankim',
  'jungwhankim_official',
  'jungwhankim_fake',
  'wecode',
  'wecode_korea',
  'wecode_united_states',
];

var matchingNames = [];

searchInput.addEventListener('keyup', () => {
  searchIdList();
  renderMatches();
});

function searchIdList() {
  if (searchInput.value !== "") {
    results.classList.remove("hideResults");
  } else {
    results.classList.add("hideResults");
  }

  idList.map((name) => {
    // 내가 인풋창에 인풋한 값이랑 idlist 목록에 있는 스트링 요소의 substring이 같은 게 있을 때
    if(name.indexOf(searchInput.value) !== -1) {
      matchingNames.push(name);
    }
  })
};

function renderMatches() {
  for(i = 0; i < matchingNames.length; i++) {
    const matchingItem = document.createElement('div');
    matchingItem.textContent = matchingItem[i];

    results.appendChild(matchingItem);
  }
  const matched = matchingNames
  console.log(matchingNames);
  matchingNames = [];
  return matched
}








