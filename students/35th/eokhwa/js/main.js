let newReple = document.querySelector(".reple_box");
let repleButton = document.querySelector(".write_reple");
let inputbox = document.querySelector("#reple_input");
let index = 0;

//뎃글 입력여부//
const addComment = ()=>{
    let repleVelue = document.getElementById('reple_input');        
    let repleLength = repleVelue.value.length;  

    (repleLength)? commntUp() : alert("댓글을 입력하세요");   
}

//댓글 생성//

const commntUp = ()=>{
    let createEl =document.createElement("p");
    let repleVelue = document.getElementById('reple_input');
   
    let write_comment = newReple.appendChild(createEl);
     

    write_comment.innerHTML = `
                                <strong>Wecode</strong>${repleVelue.value} 
                                <span class="pl15 del_button" style="cursor:pointer;padding:20px">삭제</span>
                                `;
    createEl.classList.add("comments");  
    makeDeleteEvent(createEl);
    repleVelue.value ="";
    countReples();
    
}
//삭제 //
const makeDeleteEvent = (createEl) => {
    const deleteBtn = createEl.querySelector(".del_button");
    deleteBtn.addEventListener("click", () => deleteComment(createEl));
};
  
const deleteComment = (createEl) => {
    createEl.remove();
    countReples();
};

//뎃글 카운트 //
function countReples (){
    let commentsNumber =newReple.querySelectorAll(".comments").length;
    newReple.querySelector(".count_comment").innerText = `댓글 ${commentsNumber} 개`;

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
inputbox.addEventListener('keydown', (event)=>{
   
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


//마이인포 sub메뉴 생성//

const clickOn = ()=>{
    let clickIcon = document.querySelector('.arrow')
    let checkClass = document.querySelector('.arrow').classList.contains('on')
    
    if(checkClass) {
        clickIcon.classList.remove('on')
    }else{
        clickIcon.classList.add('on')
    }
}

let memberArr = [
    { name: "김정은", imgUrl: "./img/some01.png" },
    { name: "윤석렬", imgUrl: "./img/some02.png" },
    { name: "문재인", imgUrl: "./img/some03.png" },
    { name: "박근혜", imgUrl: "./img/some04.png" },
    { name: "트럼프", imgUrl: "./img/some02.png" },
    { name: "오바마", imgUrl: "./img/some01.png" },
    { name: "윤석렬", imgUrl: "./img/some02.png" },
    { name: "문재인", imgUrl: "./img/some03.png" },
    { name: "박근혜1", imgUrl: "./img/some04.png" },
    { name: "트럼프1", imgUrl: "./img/some02.png" },
    { name: "오바마1", imgUrl: "./img/some01.png" },
    { name: "김정은1", imgUrl: "./img/some01.png" },
    { name: "윤석렬1", imgUrl: "./img/some02.png" },
    { name: "문재인1", imgUrl: "./img/some03.png" },
    { name: "박근혜2", imgUrl: "./img/some04.png" },
    { name: "트럼프2", imgUrl: "./img/some02.png" },
    { name: "오바마2", imgUrl: "./img/some01.png" },
    { name: "윤석렬2", imgUrl: "./img/some02.png" },
    { name: "문재인2", imgUrl: "./img/some03.png" },
    { name: "박근혜3", imgUrl: "./img/some04.png" },
    { name: "트럼프3", imgUrl: "./img/some02.png" },
    { name: "오바마4", imgUrl: "./img/some01.png" },
     
  ];
  
  const a = document.querySelector('.search_input');
  const b = document.querySelector('.search_target')



  a.addEventListener('keyup', () => {
    let enterKey =a.value;
    
    for (let idx in memberArr) {
        let objInImg = memberArr[idx].imgUrl;     
        let objInName = memberArr[idx].name;
        let newSearchTag = document.createElement("div");
        let removeTarget =b.querySelector(".searchs");
   

   
        if (objInName.search(enterKey) === 0) {
            b.innerHTML +=`
            <div class='searchs'>
                <div class="my_photo">
                    <img src="${objInImg}" alt="썸네일" width="100%">
                </div>
                <div class="my_name">
                    <p>${objInName}</p>
                
                </div>
            </div>    
                `
           
            


        } else {
          
            
        }
      }
   
  });  