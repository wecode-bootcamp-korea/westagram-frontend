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
    const addIconWrap = document.createElement('a');
    const addIcon = document.createElement('i');

    addCommentWrap.setAttribute('class', 'comment-list-add');
    addUser.setAttribute('class', 'comment-user');
    addDescription.setAttribute('class', 'user-comment');
    addIconWrap.setAttribute('class', 'icon-mini-heart');
    addIcon.setAttribute('class', 'far fa-heart');

    addCommentWrap.appendChild(addUser);
    addCommentWrap.appendChild(addDescription);
    addCommentWrap.appendChild(addIconWrap);
    addIconWrap.appendChild(addIcon);
    addLocation.appendChild(addCommentWrap);

    addUser.innerHTML = 'raccoons';
    addDescription.innerHTML = commnetArea.value;
    commnetArea.value = null;

    postingBtn.style.opacity = '0.5';
    postingBtn.style.cursor = 'default';

    // [자체 추가] 댓글 추가 시 모두 보기 갯수 증가
    const commnetCounting = function(){
        const counting = document.getElementsByClassName('comment-list')[0].children.length;
        const conutTxt = document.getElementsByClassName('comment-counting')[0];
        conutTxt.innerHTML = counting;
    };

    commnetCounting();
}

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
    let targetElement = event.target; // 클릭 했을 때 클릭 되는 요소

    do{
        if(targetElement == profilePopBtn){
            profilePopUpWrap.style.display = "block"
            return;
        }
        targetElement = targetElement.parentNode;
    }while (targetElement);

    profilePopUpWrap.style.display = "none"
});