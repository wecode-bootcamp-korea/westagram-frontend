// <div class = "article__commentsShow">...</div>
var commentsShow = document.querySelector(".article__commentsShow")

// <input class = "article__commentsInput" type="text" placeholder="댓글 달기">
var commentsInput = document.querySelector(".article__commentsInput")


/*
실수1) 여기다가 var comment = commentsInput.value를 입력하면
comment에는 commentsInput.value의 초깃값인 '' 빈문자열이 들어가 있다. 
입력한 댓글 내용을 추가하려면 event가 발생했을 때의 value로 --> addPost()로 옮기기

// 입력한 댓글 내용
var comment = commentsInput.value
console.log(comment)
*/

// <span class = "post">게시</span>
var post = document.querySelector(".post")

// '게시'에 마우스 올리면 '포인터'로 커서 바꾸기
post.addEventListener("mouseover",()=>post.style.cursor = "pointer")

post.addEventListener("click",addPost) // '게시' 누르면 addPost()함수 실행
function addPost(){
    // comment = post를 "click" 했을 때의 commentsInput.value 
    let comment = commentsInput.value 
    
    let newP = document.createElement("p");
    
    // newP.innerText = comment; // 아래 코드 한번에 쓰기
    let newComment = document.createTextNode(comment);
    newP.appendChild(newComment);

    // <div class = "article__commentsShow">...</div> 에 <p> 추가하기
    commentsShow.appendChild(newP)

    // 실수2) 여기서 comment = "" 하면 안된다... 그럼 그냥 comment변수에 ""이 저장되는거지
    // commentsInput.value값이 "" 이 되는 게 아니다
    commentsInput.value  = "" // 댓글란 내용 지우기
    commentsInput.focus()

}

// Enter키 눌러서 댓글 입력하기
// Get the input field
// var commentsInput = document.querySelector(".article__commentsInput")

// Execute a function when the user presses a key on the keyboard
commentsInput.addEventListener("keypress", function(event) {
  console.log(event) // event에는 KeyboardEvent가 자동으로 들어가 있다.
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    post.click();
  }
});
// 여기까지가 Enter키 눌러서 댓글 입력하는 코드
/* 새로 배운 내용
addEventListener("이벤트명",function(event)) 하면 event 매개변수에는 
이벤트명이 자동으로 들어간다. 
function(event,a,b) 처럼 매개변수가 2개 이상이면 오류발생하는듯...

addEventListener("이벤트명",함수이름)
function 함수이름(event){
  console.log(event)
}
하면 콘솔에 이벤트 이름 나온다.
  */