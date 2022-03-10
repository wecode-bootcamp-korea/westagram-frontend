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
const replyComponent = document.querySelector('.reply-component');
const insertReply=document.querySelector('.insert-reply');

//댓글입력함수
appendReply=()=>{
    const replyContainer = document.getElementsByClassName("reply-container");
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
    deleteReplyIcon.setAttribute("class",`reply${listOrder} reply-icon`);
    deleteReplyIcon.setAttribute("src","img/redcross.png");

    const likeRedHeart = document.createElement('img');
    likeRedHeart.setAttribute("class",`reply${listOrder} reply-icon hidden`);
    likeRedHeart.setAttribute("src","img/redheart.png");

    const unlikeBlankHeart = document.createElement('img');
    unlikeBlankHeart.setAttribute("class",`reply${listOrder} reply-icon`);
    unlikeBlankHeart.setAttribute("src","img/heart_logo.png");

    replyContainer[0].appendChild(replyContents);
    replyContents.appendChild(viewReply);
    replyContents.appendChild(replyFunc);
    viewReply.appendChild(replyWriterId);
    viewReply.appendChild(replyText);
    replyFunc.appendChild(deleteReplyIcon);
    replyFunc.appendChild(likeRedHeart);
    replyFunc.appendChild(unlikeBlankHeart);
}

//댓글삭제함수(이벤트 위임 : 상위노드에서 하위노드를 제어한다

//댓글입력함수
const writeReply=(e)=>{
    e.preventDefault();
    appendReply();
    insertReply.value="";
}
replyComponent.addEventListener('submit',writeReply);


