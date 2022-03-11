const delay = 100;
let timer = null;
const HIDDEN = "hidden"
const INVISIBLE = 'invisible'
//로그인할때 받은 userID 받아오기
const insertUserid = document.querySelector('.userid');
const userid=localStorage.getItem("ID");
insertUserid.innerHTML=userid;

/////화면뷰 조정에 따른 레이아웃 변경기능/////

//section 좌측좌표 service-symbol좌표로 맞춰주기
//personal-container 우측좌표 header-func표로 맞춰주고 화면크기 일정사이즈 미만 축소시 invisible처리
const findLocationLeft=(object)=>{
    return object.getBoundingClientRect().left+"px";
}
const serviceSymbol = document.querySelector('.service-symbol');
const section = document.querySelector('section');
const personalContainer = document.querySelector('.personal-container');

//화면 첫 로그인시 최초 적용
section.style.marginLeft =findLocationLeft(serviceSymbol)
//실시간 이벤트
window.addEventListener('resize',function(){
    clearTimeout(timer);
    timer=setTimeout(() => {
        section.style.marginLeft =findLocationLeft(serviceSymbol);
        personalContainer.getBoundingClientRect().right <1800? personalContainer.classList.add(INVISIBLE) : personalContainer.classList.remove(INVISIBLE)
    }, delay);
});

/////게시글 좋아요버튼 클릭이벤트/////
const blankHeart=document.getElementsByClassName('blank-heart')[0];
const redHeart=document.getElementsByClassName('red-heart')[0];


blankHeart.addEventListener('click',()=>{ 
    blankHeart.classList.add("hidden")
    redHeart.classList.remove("hidden")
})
redHeart.addEventListener('click',()=>{ 
    redHeart.classList.add("hidden")
    blankHeart.classList.remove("hidden")
})

/////댓글입력 이벤트/////
const postInteractionParts= document.querySelector(".post-interaction-parts");
const replyContainer = document.getElementsByClassName("reply-container");
const replyComponent = document.querySelector('.reply-component');


const insertReply=document.querySelector('.insert-reply');

//댓글입력함수
const appendReply=(e)=>{
    e.preventDefault();

    const listOrder = replyContainer[0].children.length;

    const replyContents = document.createElement("li"); 
    replyContents.setAttribute("id", "reply"+listOrder);
    replyContents.setAttribute("class", "reply-line");
    
    const viewReply =document.createElement("div");
    viewReply.setAttribute("class","view-reply");

    const replyWriterId = document.createElement("span")
    replyWriterId.setAttribute("class", "small-bold-font");
    replyWriterId.innerText = userid;

    const replyText = document.createElement("span");
    replyText.setAttribute("class","reply-text");
    replyText.innerText=insertReply.value;
    
    const replyFunc = document.createElement("div");
    replyFunc.setAttribute("class", "reply-func");

    const deleteReplyIcon = document.createElement('img');
    deleteReplyIcon.setAttribute("class",`delete-icon reply-icon`);
    deleteReplyIcon.setAttribute("src","img/redcross.png");

    const likeRedHeart = document.createElement('img');
    likeRedHeart.setAttribute("class",'already-like-icon reply-icon hidden');
    likeRedHeart.setAttribute("src","img/redheart.png");

    const unlikeBlankHeart = document.createElement('img');
    unlikeBlankHeart.setAttribute("class",'unlike-icon reply-icon');
    unlikeBlankHeart.setAttribute("src","img/heart_logo.png");

    replyContainer[0].appendChild(replyContents);
    replyContents.appendChild(viewReply);
    replyContents.appendChild(replyFunc);
    viewReply.appendChild(replyWriterId);
    viewReply.appendChild(replyText);
    replyFunc.appendChild(deleteReplyIcon);
    replyFunc.appendChild(likeRedHeart);
    replyFunc.appendChild(unlikeBlankHeart);

    insertReply.value="";
}

//댓글삭제 및 좋아요 함수
const replyInteraction=(e)=>{
    if(e.target.classList.contains("delete-icon")){
        const replyContents= e.target.parentElement.parentElement;
        replyContents.remove();
    }else if(e.target.classList.contains("unlike-icon")){
        e.target.previousSibling.classList.remove("hidden")
        e.target.classList.add("hidden")
    }else if(e.target.classList.contains("already-like-icon")){
        e.target.nextSibling.classList.remove("hidden");
        e.target.classList.add("hidden")
    }
}
replyComponent.addEventListener('submit',appendReply);
postInteractionParts.addEventListener('click',replyInteraction);

/////프로필 누르면 창 나오게하기/////
const body = document.querySelector("body");
const myThumbnail = document.getElementsByClassName("my-thumbnail")[0];
const profileWindow = document.getElementsByClassName("profile-window")[0];
const showProfileBox=()=>{
    profileWindow.classList.remove("invisible")
}
const closeProfileBox=()=>{
    profileWindow.classList.add("invisible")
}
const profileBoxHandler=(e)=>{
    e.target==myThumbnail?profileWindow.classList.remove("invisible"):profileWindow.classList.add("invisible")
}

///프로필 마우스 오버시 음영///
paintBtnBackground=(e)=>{
    e.target.classList.add("paint-btn-background")
}
removeBtnBackground=(e)=>{
    e.target.classList.remove("paint-btn-background")
}
body.addEventListener('click', profileBoxHandler);
profileWindow.addEventListener('mouseover', paintBtnBackground);
profileWindow.addEventListener('mouseout',removeBtnBackground);
