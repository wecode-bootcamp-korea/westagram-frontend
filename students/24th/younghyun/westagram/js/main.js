
// const typingComment = document.querySelector('.typing-comment');
const commentBtn = document.querySelector('.comment-button');
const commentForm =document.querySelector('.comment'); 
const commentValue = document.querySelector('.typing-comment');
const comments = document.querySelector('.typing-comment');
let heartBtn = document.querySelector('.feeds-comment');
const searchEngine = document.querySelector('.search-engine');

commentForm.addEventListener("keyup",()=>{
    let comments = document.querySelector('.typing-comment').value;
    if(comments.length !== 0){
        commentBtn.classList.add('active')
    }else{
        commentBtn.classList.remove('active');
    }
});



commentValue.addEventListener("keypress",(e) => {
    if(e.keyCode === 13){
        if(comments.value.length !== 0){
        uploadComment();
        }
    }
});

commentBtn.addEventListener("click",()=>{
    if(comments.value.length !== 0){
        uploadComment();
    }
});

function uploadComment(){
    let feedComments = document.querySelector('.feeds-comment');
    let allComment = document.createElement('div');
    let commentDiv = document.createElement('div');
    let makeUserSpan = document.createElement('span');
    let makeCommentSpan = document.createElement('span');
    let makeTrash = document.createElement('button');
    let makeHeart = document.createElement('button');

    
    feedComments.appendChild(allComment);
    allComment.appendChild(commentDiv);
    commentDiv.appendChild(makeUserSpan);
    commentDiv.appendChild(makeCommentSpan);
    allComment.appendChild(makeTrash);
    allComment.appendChild(makeHeart);

    commentDiv.className ="commentDiv";
    makeUserSpan.className ="comment-id";
    makeCommentSpan.className ="comment-writing";
    makeUserSpan.innerText = "0hyun0hyun";
    makeCommentSpan.innerText = comments.value;
    makeTrash.innerHTML = '<i class="far fa-times-circle"></i>';
    makeHeart.innerHTML = '<i class="far fa-heart"></i>';
    // console.log(commentDiv);
    comments.value = "";
    // console.log(heartSvg);

   

    makeHeart.addEventListener("click", (event)=> {
        if(event.target.className == "far fa-heart"){
            event.target.className = "fas fa-heart";
        } else if(event.target.className == "fas fa-heart"){
            event.target.className = "far fa-heart";            
        }

    });

    makeTrash.addEventListener("click", (event) => {
        console.log(event.target.parentNode.parentNode);
        event.target.parentNode.parentNode.remove();
    });
};

// 계정 데이터 배열
const userArray = [
    {id: "young93",
    nickname: "김영현",
    picture: "img/jenny.jpeg"},
    {id: "wecode_bootcamp",
    nickname: ">wecode | 위코드",
    picture: "img/jenny.jpeg"},
    {id: "younghyun",
    nickname: "young hyun kim",
    picture: "img/jenny.jpeg"},
    {id: "younghyunkim",
    nickname: "영현kim입니다",
    picture: "img/jenny.jpeg"},
    {id: "yongju0506",
    nickname: "용주용주",
    picture: "img/jenny.jpeg"},
    {id: "yumi_sepo",
    nickname: " ",
    picture: "img/jenny.jpeg"},
    {id: "wecoder_24",
    nickname: "위코더24기",
    picture: "img/jenny.jpeg"},
    {id: "withme",
    nickname: "나와함께",
    picture: "https://#"},
    {id: "wy___ynd",
    nickname: "전용준",
    picture: "https://#"},
    {id: "yanggeng88",
    nickname: "junyong",
    picture: "https://#"},
    {id: "wnn_99",
    nickname: "우승💪",
    picture: "https://#"},
    ];

// input에 글자가 입력되면 박스가 켜짐
// 철자가 하나가 나오면 for문으로 id인덱스 값에 맞는 filter

window.addEventListener('load', addProfile);

const searchBar = document.querySelector('.search-bar');

//console.log(searchBar);


searchBar.addEventListener('keyup',()=> {
    let searchValue = searchBar.value;
    let result = [];

    console.log(userArray[0].id.slice(0,1));

    for(let i=0; i<userArray.length; i++){
        console.log(userArray.length);
        if (userArray[i].id.slice(0,searchValue.length).includes(searchValue)){
            result.push(userArray[i]);
            addProfile(result);

            console.log(result);
        } };
    // userArray.filter(element=> {
    //     if (element.id.includes(searchValue)){
    //         return element;
    //         console.log(element);
    //     }
    // } );
    //console.log(result);
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
        
        searchEngine.appendChild(searchContents); 
    });

};

// console.log(userArray[0].id);

