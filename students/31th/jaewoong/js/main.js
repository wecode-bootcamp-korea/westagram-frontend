'use strict';

const userid=localStorage.getItem("ID");
const HIDDEN = "hidden"
const INVISIBLE = 'invisible'

const insertUserid = document.querySelector('.userid');
insertUserid.innerHTML=userid;

const serviceSymbolContainer = document.querySelector('.serviceSymbolContainer');
const section = document.querySelector('section');
const personalContainer = document.querySelector('.personalContainer');

const blankHeart=document.getElementsByClassName('blankHeart')[0];
const redHeart=document.getElementsByClassName('redHeart')[0];

const postInteractionParts= document.querySelector(".postInteractionParts");
const replyContainer = document.getElementsByClassName("replyContainer");
const replyComponent = document.querySelector('.replyComponent');
const insertReply=document.querySelector('.insertReply');

const body = document.querySelector("body");
const myThumbnail = document.getElementsByClassName("myThumbnail")[0];
const profileWindow = document.getElementsByClassName("profileWindow")[0];

//화면조정에 따라 section위치 조정
const sectionLocationHandler=()=>{
section.style.marginLeft =serviceSymbolContainer.getBoundingClientRect().left+"px";
}

//화면조정값에 따라 aside의 추천창(persornalContainer) 제거
const personalContainerHandler=()=>{
  personalContainer.getBoundingClientRect().right <1800
  ? personalContainer.classList.add(INVISIBLE)
  : personalContainer.classList.remove(INVISIBLE)    
}

//댓글입력  //하드코딩으로 풀어서 썼는데 이거 묶어서 써봅시다...
const appendReply=(e)=>{
  e.preventDefault();
  
  const listOrder = replyContainer[0].children.length;
  
  const replyContents = document.createElement("li"); 
  replyContents.setAttribute("id", "reply"+listOrder);
  replyContents.setAttribute("class", "replyLine");
  
  const viewReply =document.createElement("div");
  viewReply.setAttribute("class","viewReply");
  const replyWriterId = document.createElement("span")
  replyWriterId.setAttribute("class", "smallBoldFont");
  replyWriterId.innerText = userid;
  const replyText = document.createElement("span");
  replyText.setAttribute("class","replyText");
  replyText.innerText=insertReply.value;
  
  const replyFunc = document.createElement("div");
  replyFunc.setAttribute("class", "replyFunc");
  const deleteReplyIcon = document.createElement('img');
  deleteReplyIcon.setAttribute("class",'deleteIcon replyIcon');
  deleteReplyIcon.setAttribute("src","img/redcross.png");
  const likeRedHeart = document.createElement('img');
  likeRedHeart.setAttribute("class",'alreadyLikeIcon replyIcon hidden');
  likeRedHeart.setAttribute("src","img/redheart.png");
  const unlikeBlankHeart = document.createElement('img');
  unlikeBlankHeart.setAttribute("class",'unlikeIcon replyIcon');
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

//댓글좋아요
const likeReply=(e)=>{
  if(e.target.classList.contains("unlikeIcon")){
    e.target.previousSibling.classList.remove("hidden")
    e.target.classList.add("hidden")
  }else if(e.target.classList.contains("alreadyLikeIcon")){
    e.target.nextSibling.classList.remove("hidden");
    e.target.classList.add("hidden")
  }
}

//댓글삭제
const deleteReply=(e)=>{
  if(e.target.classList.contains("deleteIcon")){
    const repliedContents= e.target.parentElement.parentElement
    repliedContents.remove();
  }
}

//프로필아이콘 누르면 프로필창 표시//
const showProfileBox=()=>{
    profileWindow.classList.remove("invisible")
}
const closeProfileBox=()=>{
    profileWindow.classList.add("invisible")
}

//클릭시 프로필창 제거
const profileBoxHandler=(e)=>{
  if(profileWindow.classList.contains("invisible")){
    if(e.target==myThumbnail)
      profileWindow.classList.remove("invisible");
    else
      profileWindow.classList.add("invisible")
  }else 
    profileWindow.classList.add("invisible")
}

//프로필창 마우스 오버시 음영//
const paintBtnBackground=(e)=>{
  e.target.classList.add("paintBtnBackground")
}
const removeBtnBackground=(e)=>{
  e.target.classList.remove("paintBtnBackground")
}


const init=()=>{
  section.style.marginLeft =serviceSymbolContainer.getBoundingClientRect().left+"px";
  window.addEventListener('resize',personalContainerHandler);
  window.addEventListener('resize',sectionLocationHandler);
  replyComponent.addEventListener('submit',appendReply);
  postInteractionParts.addEventListener('click',likeReply);
  postInteractionParts.addEventListener('click',deleteReply);
  profileWindow.addEventListener('mouseover',paintBtnBackground);
  profileWindow.addEventListener('mouseout',removeBtnBackground);
  body.addEventListener('click', profileBoxHandler);
}
init();