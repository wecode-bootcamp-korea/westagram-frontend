/*
// Get the input field
var input = document.querySelector(".article__commentsInput");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.querySelector(".article__commentsInput").click();
  }
});
*/


// <div class = "article__commentsShow">...</div>
var commentsShow = document.querySelector(".article__commentsShow")
console.log(commentsShow)
// <input class = "article__commentsInput" type="text" placeholder="댓글 달기">
var commentsInput = document.querySelector(".article__commentsInput")
console.log(commentsInput)

/*
실수) 여기다가 var comment = commentsInput.value를 입력하면
comment에는 commentsInput.value의 초깃값인 '' 빈문자열이 들어가 있다. 
입력한 댓글 내용을 추가하려면 event가 발생했을 때의 value로 --> addPost()로 옮기기

// 입력한 댓글 내용
var comment = commentsInput.value
console.log(comment)
*/

// <span class = "post">게시</span>
var post = document.querySelector(".post")
console.log(post)

// '게시'에 마우스 올리면 '포인터'로 커서 바꾸기
// post.addEventListener("mouseover",()=>post.sytle.cursor = "pointer")
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