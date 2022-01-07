const commnetArea = document.getElementsByClassName('posting-area')[0];
const postingBtn = document.getElementsByClassName('posting-button')[0];

// [Mission4] 댓글 내용 입력 후 Enter press, 혹은 게시 버튼 클릭 시 댓글 추가 기능
commnetArea.addEventListener('input', function(){
    if(commnetArea.value.length > 0){
        postingBtn.style.opacity = '1';
        postingBtn.style.cursor = 'pointer';
    }else{
        postingBtn.style.opacity = '0.3';
        postingBtn.style.cursor = 'default';
    }
});

// 게시 버튼 클릭 시 댓글 추가 기능
postingBtn.addEventListener('click', function(){
    if(postingBtn.style.opacity === "1") commentEvent();
})

// 엔터 키 댓글 추가 기능
commnetArea.addEventListener('keyup', function(event){
    if(event.keyCode == 13 && postingBtn.style.opacity === "1") commentEvent();
})

// 게시 버튼 클릭 시, 엔터 키 댓글 추가 기능 (익명 함수 표현식)
const commentEvent = function(){
    const addLocation = document.getElementsByClassName('comment-list')[0];
    const addCommentWrap = document.createElement('li');
    const addUser = document.createElement('a');
    const addDescription = document.createElement('span');
    const addIconWrap = document.createElement('span');
    const addDelete = document.createElement('span');

    addCommentWrap.setAttribute('class', 'comment-list-add');
    addUser.setAttribute('class', 'comment-user');
    addDescription.setAttribute('class', 'user-comment');
    addIconWrap.setAttribute('class', 'icon-mini-heart');
    addDelete.setAttribute('class', 'delete-btn');

    addCommentWrap.appendChild(addUser);
    addCommentWrap.appendChild(addDescription);
    addCommentWrap.appendChild(addIconWrap);
    addLocation.appendChild(addCommentWrap);
    addCommentWrap.appendChild(addDelete);

    addDelete.innerHTML = 'X';
    addUser.innerHTML = 'raccoons';
    addDescription.innerHTML = commnetArea.value;
    commnetArea.value = null;

    postingBtn.style.opacity = '0.5';
    postingBtn.style.cursor = 'default';

    // [자체 추가] 댓글 추가 시 모두 보기 갯수 증가
    commnetCounting();
}

const commnetCounting = function(){
    const counting = document.getElementsByClassName('comment-list')[0].children.length;
    const conutTxt = document.getElementsByClassName('comment-counting')[0];
    conutTxt.innerHTML = counting;
};

// [자체 추가] 더 보기 버튼 클릭 시 설명 글 노출
const moreBtn = document.getElementsByClassName('desc-more-btn')[0];

moreBtn.addEventListener('click', function(){
    const descTxt = document.getElementsByClassName('desc-txt')[0];
    moreBtn.style.display = "none";
    descTxt.style.width = "auto";
    descTxt.style.WebkitBoxOrient = "unset"
})

// [Mission] 추가 구현 사항 - Mission 8 | nav 프로필 사진 클릭 시 메뉴 박스 생성
// why...?? 1. 버튼변수에담기 2.버튼클릭시 이벤트발생 3.style로 값 못가져와서 getComputedStyle 사용 4. 상단값은 되고 여기는 왜..?
document.addEventListener("click", function(event){
    const profilePopUpWrap = document.getElementsByClassName('pop-wrap')[0];
    const profilePopBtn = document.getElementsByClassName("pop-click-btn")[0];
    let clickElement = event.target; // 클릭 했을 때 클릭 되는 요소

    do{
        if(clickElement == profilePopBtn){
            profilePopUpWrap.style.display = "block"
            return;
        }
        clickElement = clickElement.parentNode;
    }while (clickElement);

    profilePopUpWrap.style.display = "none"
});

// [Mission] 추가 구현 사항 - Mission 6 | 댓글 좋아요 / 삭제 기능
const DeleteEvent = document.addEventListener('click', function(e){
    if(e.target.className == 'delete-btn') e.target.parentNode.remove();
    commnetCounting();
})

let num = Number(document.getElementsByClassName('like-counting')[0].innerText);

const LikeEvent = document.addEventListener('click', function(e){
    if(e.target.className == 'icon-mini-heart'){
        e.target.className = 'icon-mini-heart-on';
        num+=1;
    }else if(e.target.className == 'icon-mini-heart-on'){
        e.target.className = 'icon-mini-heart';
        num-=1;
    }
    document.getElementsByClassName('like-counting')[0].innerText = num
})

{/* <i class="fas fa-heart"></i> */}

// [Mission] 추가 구현 사항 - Mission 7 | 아이디 검색 기능
/*
    실제 인스타 nav 검색창에 아이디를 입력 시 검색 기능이 실행됩니다.
    아이디 데이터를 담고 있는 배열을 선언해주세요.
    검색 창에 텍스트 입력 시 배열의 요소 중 해당 텍스트에 일치하는 아이디만 보일 수 있도록 구현해주세요.
    for 문이 아닌 다른 array method를 사용해 구현해주세요.
*/

// 실행o : a.style.opacity = ''
// 1번 : const a = document.getElementsByClassName('클래스명')[0];
// if(a.style.opacity === "1") 함수호출();

// 실행x : b.style.display = ''
// 2번 : const b = document.getElementsByClassName('클래스명')[0];
// if(b.style.display === "none") 함수호출();