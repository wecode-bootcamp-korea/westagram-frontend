let commentInput = document.getElementsByClassName('main_comment_text')[0]
const iconboxHeart = document.getElementsByClassName('iconbox_heart')[0]; 






// function changeRed () {  -- 작업 에정  -- 
//  iconboxHeart.classList.add("iconbox_red")

// }
// iconboxHeart.addEventListener("onclick", changeRed) // 버튼이 클릭됐을 때 클래스가 새로 생겨야 하는데
// // 그냥 생성되있다.


function submit() {
  // 1. 댓글 박스에 문자가 입력되지 않은 경우, 입력되지 않도록 하기
  const box = document.getElementsByClassName("main-icon-like-text-write_comment")[0]; // 댓글 박스 (경로)

  const comments = document.createElement("div");
  const userName = document.createElement("span");
  const mainText = document.createElement("p");
  const mainIcon = document.createElement("img");


  comments.classList.add("main-icon-like-text-write_commentbox");
  userName.classList.add("userName");
  mainText.classList.add("main-icon-like-text-write-subtext");
  mainIcon.classList.add("smallHeart_img");

  mainIcon.setAttribute("src", "/students/25th/sangcheol/Westargram/img/heart.png");

  userName.innerText = "Sangcheol"
  mainText.innerText = commentInput.value;

  //구조화 

  // comments 할당
  comments.appendChild(userName);
  comments.appendChild(mainText);
  comments.appendChild(mainIcon);
  
  // comments -> HTML
  box.appendChild(comments);

}



commentInput.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
   submit()
   commentInput.value = "" 
   if(commentInput === "") {
    
   }
  }
      
})

