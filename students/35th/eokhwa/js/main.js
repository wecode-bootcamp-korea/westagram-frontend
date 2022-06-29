let newReple = document.querySelector(".reple_box");
let repleButton = document.querySelector(".write_reple");
let inputbox = document.querySelector("#reple_input");
let index = 0;

//뎃글 입력여부//
const addComment = ()=>{
    let repleVelue = document.getElementById('reple_input');        
    let repleLength = repleVelue.value.length;    
    (repleLength !== 0)? commntUp() : alert("댓글을 입력하세요");   
}

//댓글 생성//
const commntUp = ()=>{
    let createEl =document.createElement("p")
    let newRepleTag =newReple.querySelectorAll("p");   
    let repleVelue = document.getElementById('reple_input');
    newReple.appendChild(createEl);   
    newRepleTag[index].innerHTML = `<strong>Wecode</strong>${repleVelue.value}`;
    index ++;
    repleVelue.value ="";

}


//오른쪽 더보기//
const moreList = ()=>{
    let story = document.querySelector('.article_container')
    let checkClass = document.querySelector('.article_container').classList.contains('more_active')
    if(checkClass) {
        story.classList.remove('more_active')
    }else{
        story.classList.add('more_active')
    }
}





//엔터입력 확인//
inputbox.addEventListener('keyup', (event)=>{
   
    if(event.code === "NumpadEnter" || event.code === "Enter") {
        addComment()
    }
});




//아이콘 클릭 .//

let iconBox = document.querySelector(".icon_left");
let iconIndex =  iconBox.querySelectorAll("span");
let likeCount = 45;
let viewCount = document.querySelector(".count")

iconIndex[0].addEventListener('click', ()=>{
    
    let checkIconOn = iconIndex[0].classList.contains('on')
    if(checkIconOn) {
        iconIndex[0].classList.remove('on')
        viewCount.innerHTML =`WeCode님 외 ${likeCount}명이 좋아합니다.`
        
        likeCount ++;
        
    }else{
        iconIndex[0].classList.add('on')
        viewCount.innerHTML =`WeCode님 외 ${likeCount}명이 좋아합니다.`
        likeCount --;
        
    }

})



