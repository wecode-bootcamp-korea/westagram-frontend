// "use strict";

// [Mission4] 댓글 내용 입력 후 Enter press, 혹은 게시 버튼 클릭 시 댓글 추가 기능

let inputComments = document.querySelector(".comments_input"); // 댓글 input
let submitBtn = document.querySelector(".posting_box"); // 게시 등록 버튼

  function commentsBox() {
    const box = document.querySelector(".main_left_box_comment"); // 댓글 추가하면 들어갈 공간의 div태그 가져옴

    const comments = document.createElement("div"); // 부모요소 역할을 할 div 태그 할당

    const userId = document.createElement("span"); // 사용자의 id가 찍힐 span 태그 할당
    const commentsText = document.createElement("span"); // 사용자의 댓글이 찍힐 span 태그 할당
    const likesBtn = document.createElement("button"); // 댓글 오른쪽에 찍힐 작은 하트에 button 태그 할당

    // .classList.add() 메소드를 사용해서 class를 추가
    comments.classList.add("comments_title");
    userId.classList.add("user_id");
    commentsText.classList.add("comments_contents");
    likesBtn.classList.add("comments_like_btn");

    // .innerHTML 와 .innerText 를 사용해서 div 안의 내용 읽어오기 
    userId.innerHTML = '<span class="user_id">아이디</span>'; // 닉네임 이름
    commentsText.innerText = inputComments.value; // 댓글 내용
    likesBtn.innerHTML = '<i class="fa-regular fa-heart"></i>'; // 하트 아이콘

    // 자식요소를 부모요소의 순서대로 넣어주는 .appendChild() 메소드로 구조 잡기 
    comments.appendChild(userId); 
    comments.appendChild(commentsText);
    comments.appendChild(likesBtn);

    box.appendChild(comments);

  }

// 게시 버튼 이벤트 구현
submitBtn.addEventListener("click", (event) => {

  commentsBox();
  inputComments.value = "";

});

// Enter 키로 댓글 추가 이벤트 구현
// keydown, keyup 댓글이 중복으로 달리는 오류가 있었는데 keypress 쓰니까 되는데 왜죠..
inputComments.addEventListener("keypress", (event) => {

  if (event.code === "Enter") {
    // event.preventDefault();
    commentsBox();
    inputComments.value = "";
  }
  
});