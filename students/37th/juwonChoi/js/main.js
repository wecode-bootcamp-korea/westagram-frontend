//comment
    //1. 댓글 박스안의 조작할 DOM 을 담는다
    //2. 새로운 댓글을 생성할 요소를 생성 createElement 
    //3. 댓글로 작성한 내용을 새로운 요소에 어떻게 담을지 생각한다 (innerHTML 또는 innerText 등)
    //4. 내용이 담긴 요소를 댓글박스의 마지막 자식요소로 추가한다 (appendChild)
    //5. 인풋창을 초기화한다.

const $commentBtn = document.querySelector('.commentPost');
const $commentInput = document.querySelector('.commentInput');
const makeComment = () => {
    let $inputValue = document.querySelector('.commentInput').value;
    if($inputValue.length !== 0){
        const newDiv = document.createElement('div');
        const $commentBox = document.querySelector('.commentBox');
        newDiv.className = "commentInner";
        newDiv.innerHTML = `<span class='commentId'>nerdcloud___</span> <span class='comment'>${$inputValue}</span><img class="commentDelete" src="style/images/close.png"><img class="commentHeart" src="style/images/heart.png">`
        $commentBox.appendChild(newDiv);
        document.querySelector('.commentInput').value ='';
        $commentBtn.style.opacity = '50%'
    }
}

const makeCommentEnter = (e) => {
     if (e.key === 'Enter'){
        makeComment();
    }
}

const btnActive = () => {
    if($commentInput.value.length !== 0){
        $commentBtn.style.opacity = '100%';
    } else {
        $commentBtn.style.opacity = '50%';
    }
}

$commentBtn.addEventListener('click', makeComment); 
$commentInput.addEventListener('keyup', makeCommentEnter );
$commentInput.addEventListener('keyup', btnActive)
$commentInput.addEventListener('focus', ()=>{
    $commentInput.placeholder = ''
})
$commentInput.addEventListener('focusout', ()=>{
    $commentInput.placeholder = 'Add a comment...'
})



//likeButton
    //1. 이벤트가 발생했을때 이벤트의 해당 요소를 선택하는 방법을 찾는다.
    //2. 이벤트 함수를 구현한다. ( If (하트 x->o ) else (o->x)
    //3. setAttribute getAttribute 함수를 이용하여 이벤트 핸들러 생성.

    //deleteButton
    //1.이벤트가 발생했을때, 댓글 하나 전체를 담고 있는 박스를 선택하는 방법을 찾는다
        //댓글이 생성되는 댓글까지 추가하려면 위와 같이 박스에 핸들러가 바인딩 되어야 하고,
        //우리가 찾아야 하는 요소는 이벤트를 발생시킨 요소의 '부모' 태그.
        //parentNode 를 이용해보자. 
    //3.노드 삭제 프로토타입 메서드인 remove()룰 이용하자;


const $commentBox = document.querySelector('.commentBox')

$commentBox.addEventListener('click', (e)=>{
    const clickedNode = e.target
    let isItColor = clickedNode.getAttribute("src")
    
    if (isItColor === "style/images/heart.png"){
        clickedNode.setAttribute("src","style/images/heartColor.png")
        } else if(isItColor === "style/images/heartColor.png"){
        clickedNode.setAttribute("src","style/images/heart.png")
    };
    
    if (clickedNode.className === "commentDelete"){
        clickedNode.parentNode.remove();
    }
})

const $feedBtnBox = document.querySelector('.feedBtnBox')

$feedBtnBox.addEventListener('click', (e)=>{
    const clickedNode = e.target
    let isItColor = clickedNode.getAttribute("src")
    
    if (isItColor === "style/images/heart.png"){
        clickedNode.setAttribute("src","style/images/heartColor.png")
        } else if(isItColor === "style/images/heartColor.png"){
        clickedNode.setAttribute("src","style/images/heart.png")
    };
    
    if (isItColor === "style/images/bookmark.png"){
        clickedNode.setAttribute("src","style/images/bookmarkColor.png")
    } else if(isItColor === "style/images/bookmarkColor.png") {
        clickedNode.setAttribute("src","style/images/bookmark.png")
    }
})

//검색창 만들기
    //1. 각각 아이디 정보 배열 데이터를 선언한다.
    //2. focus , focusout 상태를 구분한다.
    //3. 인풋창의 입력값이, 배열요소들안에 있는지 구분한다.
        //ex) wecode 라고 입력하면 배열요소들을 검색하여 인덱스를 반환한다. 
        //배열의 요소는 각각의 인덱스,이미지,닉네임,이름(설명)이 들어가있다.
        //실제 페이지는 한번에 인덱스로 동적으로 추가되겠지만, 여기서는 이미지는 미리 추가해놓고 닉네임정보만 받아서 추가하는 거로 하겠다.
    //4. 해당 정보가 들어있는 요소의 인덱스로 데이터를 recentSearch 박스안에 담는함수를 만든다.
    //5. 인풋에 키업이벤트 발생시 해당 박스의 display: flex,    value의 length 가 0일때 display:none 을 구현한다.


    //불리언값을 반환하는 배열을 만들고 그것이 트루값일때 display:block 아닐때 display:none;
    //그렇다면 박스값들의 DOM값을 유사 배열로 가져와서 인덱스로 사용해야함.

    //**질문사항**/
    //1.데이터를 가져올 때 인덱스가 있는 상태에서 가져오는걸 우리가 그냥 보여주는것인가 아니면, 
    //  랜덤한 순서로 되어있는 데이터값을 우리가 어떤 조건들을 기준으로 순서대로 보여주는것인가?
    //2.esc키 입력 한번에 포커스 아웃 이벤트가 발생하게끔 할 수 없을까?

    //이방법은 틀렸다. appendchild 방법을 구현할 것.
    
    
const $searchInput = document.querySelector('.searchInput');
const recentSearch = document.querySelector('.recentSearch');
$searchInput.addEventListener('focus',()=>{
    $searchInput.style.backgroundImage = "none";
    $searchInput.placeholder ="Search";
    recentSearch.style.display = "flex";
})

$searchInput.addEventListener('focusout',()=>{
    $searchInput.style.backgroundImage = "url(style/images/search-interface-symbol.png)";
    $searchInput.placeholder ="       Search"
    $searchInput.value = ''
    recentSearch.style.display = "none";

    const recentProfile = document.querySelectorAll('.recentProfile');
    for (let i=0; i<recentProfile.length; i++){
        recentProfile[i].style.display = "flex"
    }
})


const userArr =["wecode_bootcamp", "wecewewe" ,"wecode_founder", "woloveyou" ,"wecode_korea"];
const recentNickArr = document.querySelectorAll('.recentNickName');
const fillNick = (arr)=>{
    for(let i=0; i<arr.length; i++){
        recentNickArr[i].innerHTML = userArr[i];
    }
}

fillNick(userArr)

const findRecent = () =>{
    const inputValue = document.querySelector('.searchInput').value;
    const recentArr = userArr.map(item => item.includes(inputValue))
    const recentProfile = document.querySelectorAll('.recentProfile');
    const recentTextBox = document.querySelector('.recentTextBox');
    for (let i=0; i<recentArr.length; i++){
        if(recentArr[i]){
            recentProfile[i].style.display = "flex"
            recentTextBox.style.display = "flex"
        } else {
            recentTextBox.style.display = "none"
            recentProfile[i].style.display = "none"
        }
    }
}
            
$searchInput.addEventListener('keyup', findRecent);



//profileMenu 




const navProfilePic = document.querySelector('#profile');
const navMenuBox = document.querySelector('.navMenuBox');
const navBox = getComputedStyle(navMenuBox);

// navProfilePic.addEventListener('click', ()=>{
//     console.log('nav')
//     // navMenuBox.style.display = "flex";
// });

document.addEventListener('click', (e)=>{
    const display = navBox.getPropertyValue('display');
    const homeBtn = document.querySelector('#homeBtn');
    const target = e.target;
    if(target === navProfilePic) {
        if(display === 'none'){
            navMenuBox.style.display = 'flex';
            homeBtn.setAttribute('src', 'style/images/homeEmpty.png')
        } else {
            navMenuBox.style.display = 'none';
            homeBtn.setAttribute('src', 'style/images/home (1).png')
        }
    
    } else {
        navMenuBox.style.display = 'none';
        homeBtn.setAttribute('src', 'style/images/home (1).png')
    }
})




//스토리 만들기


const story = document.querySelectorAll('.storyImage');
story.forEach(x => x.addEventListener('click', ()=> {location.href="http://127.0.0.1:5500/students/37th/juwonChoi/story.html"}))


    
