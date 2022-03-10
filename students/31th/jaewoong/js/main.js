const delay = 100;
let timer = null;
const HIDDEN = "hidden"
const INVISIBLE = 'invisible'
//로그인할때 받은 userID 받아오기
const insertUserid = document.querySelector('.userid');
const userid=localStorage.getItem("ID");
insertUserid.innerHTML=userid;
//const replyText=localStorage.getItem(userid)[1];

//html요소 좌표찾기

const findLocationTop=(object)=>{
    return object.getBoundingClientRect().top+"px";
}
const findLocationRight=(object)=>{
    return object.getBoundingClientRect().right+"px";
}
const findLocationBottom=(object)=>{
    return object.getBoundingClientRect().bottom+"px";
}
const findLocationLeft=(object)=>{
    return object.getBoundingClientRect().left+"px";
}

//section 좌측좌표 service-symbol좌표로 맞춰주기
//personal-container 우측좌표 header-func표로 맞춰주고 화면크기 일정사이즈 미만 축소시 invisible처리
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

//게시글 좋아요버튼 클릭이벤트
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

////댓글입력 이벤트
const replyComponent = document.querySelector('.reply-component');
const insertReply=document.querySelector('.insert-reply');


//localStorage에 댓글 저장하고 input창 비우기
const setText=()=>{
    replyText.push(insertReply.value);
    localStorage.setItem(userid,replyText);
    insertReply.value="";
}
//localStorage에서 댓글 불러와서 댓글창 채우기
const getText=()=>{
    for(let i=0; i<replyText.length;i++){
        console.log("2")
        console.log(replyText[i])
    }
}//
const writeReply=(e)=>{
    e.preventDefault();
    setText();
}
replyComponent.addEventListener('submit',writeReply);
