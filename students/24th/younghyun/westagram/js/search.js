const searchEngine = document.querySelector('.search-engine');
const isParent = document.querySelector('.parent');
const searchMenu = document.querySelector('.search-all');
const searchBar = document.querySelector('.search-bar');

// const searchBtn = document.querySelector('.search-bar');

// 검색창 클릭 이벤트 등록

function toggleMenu(){
    searchMenu.classList.remove('disappear');
}

function hideMenu(){
    searchMenu.classList.add('disappear');
}

searchBar.addEventListener('click',() => {
    toggleMenu();
});

searchBar.addEventListener("click", (e)  => {
    toggleMenu();
    e.stopPropagation();
});


window.addEventListener("click", (e) => {
    if(!searchMenu.contains(e.target)) {
        hideMenu();
    }
}); 

// window.addEventListener('click',(e) => {
//     if(!searchMenu.contains(e.currentTarget)){
//         hideMenu();
//     }
// });

// 계정 데이터 배열
const userArray = [
    {id: "young93",
    nickname: "김영현💪",
    picture: "img/111.jpeg"},
    {id: "wecode_bootcamp",
    nickname: ">wecode | 위코드",
    picture: "img/124.png"},
    {id: "younghyun",
    nickname: "young hyun kim",
    picture: "img/mach.jpeg"},
    {id: "younghyunkim",
    nickname: "영현kim입니다",
    picture: "img/paris.jpeg"},
    {id: "yongju0506",
    nickname: "용주용주",
    picture: "img/jung.jpeg"},
    {id: "yumi_sepo",
    nickname: " ",
    picture: "img/jenny.jpeg"},
    {id: "wecoder_24",
    nickname: "위코더24기",
    picture: "img/jenny.jpeg"},
    {id: "withme",
    nickname: "나와함께",
    picture: "img/local.jpeg"},
    {id: "wy___ynd",
    nickname: "전용준",
    picture: "img/go.jpeg"},
    {id: "yanggeng88",
    nickname: "junyong",
    picture: "img/woziin.jpeg"},
    {id: "ying_ying0809",
    nickname: "닝닝",
    picture: "img/111.jpeg"},
    {id: "yadlsfo_eng",
    nickname: "일대백일대박",
    picture: "img/eyesmag.jpeg"},
    {id: "wnn_99",
    nickname: "우승💪",
    picture: "img/124.png"},
    ];



searchBar.addEventListener('keyup',()=> {
    let searchValue = searchBar.value;
    let result = [];
    let searchContents = document.createElement('div');
    searchContents.className = "search-contents";
    // 리셋하기
    if(isParent.lastChild){
        while (isParent.lastChild) {
        isParent.removeChild(isParent.lastChild);
     }
    };
    
    // searchValue값이 빈 문자열이 아닐때 실행
    if(searchValue !== ""){
        for(let i = 0; i < userArray.length; i ++) {
            let same = userArray[i].id.indexOf(searchValue);
            if(same === 0) {
                result.push(userArray[i]);
            }
        }
        addProfile(result);
    }
})

function addProfile(result){
    result.forEach(userInfo => {
        let searchContents = document.createElement('div');
        searchContents.className = "search-contents";

        searchContents.innerHTML = `
        <div class="gradient">
                            <img src="${userInfo.picture}" alt="스토리 프로필 사진">
                        </div>
                        <div>
                            <p class="user-id">${userInfo.id}</p>
                            <p class="user-name">${userInfo.nickname}</p>
                        </div>`;
                        isParent.appendChild(searchContents);

    });
};

