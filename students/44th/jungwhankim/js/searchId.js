const searchInput = document.getElementById('searchInput');

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

let matchingNames = [];

searchInput.addEventListener('keyup', searchIdList);

function searchIdList() {
  // console.log(searchInput.value);

  idList.map((name) => {
    if(searchInput.value.includes(name)) {
      // matchingNames.push(name);    
      console.log(name);
      matchingNames.push(name);
    }
  })
  console.log(matchingNames);
};



