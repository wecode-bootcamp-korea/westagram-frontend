// "use strict";

// const comment = document.getElementById("comment")
// const commentSubmit = document.getElementById("commentSubmit")
// const commentBox = document.querySelector(".newComment")



// function newCommentBtn (e) {
//   // console.log(e)
//   e.preventDefault();
//   // html에 button 기본값 비활성화
//   // button이 form 내에 있으면 default behavior이 submit이다. 하지만 form 내에 없으면 별다른 behavior가 없음.
//   if (comment.value.length>0){
//       return commentSubmit.style.color="#6eacf5";
//   } else if (comment.value.length === 0) {
//     return commentSubmit.style.color="";
//   }
// }

// let arr = [];
// function newComments () {
//   commentBox.innerHTML += comment.value + `<br>`
//   return comment.value = "";
// }


// comment.addEventListener("keyup",newCommentBtn)
// commentSubmit.addEventListener("click",newComments)
// commentSubmit.addEventListener("click",newCommentBtn)

// 댓글생성영역 newComment / 입력 commentInput / 게시 commentSubmit

// const commentInput = document.getElementById("commentInput")

// const newComment = document.querySelector(".newComment")

//input에 아이디 가져옴
const commentInput = document.getElementById("commentInput")
//버튼의 아이디를 가져옴
const commentSubmit = document.getElementById("commentSubmit")
//댓글을 생성할 부모영역을 가져옴
const newComment = document.querySelector(".newComment")


let newCommentAdd = (e) => {
  e.preventDefault();
  let newComments = commentInput.value
  //commentInput에 입력되는 값을 newComments라고 할거에요.
  console.log(newComments)
  // commentInput 입력된 값의 길이가 0보다 크다면?
  if (commentInput.value.length > 0) {
    // commentSubmit의 컬러를 하늘색으로 바꿔줄게요. 
    commentSubmit.style.color = "#6eacf5"
    // console.log(commentText)
    commentSubmit.addEventListener("click",()=>{
    let commentText = document.createElement("p");
      commentText.innerHTML = `${newComments}`; 
      newComment.appendChild(commentText);
    }) 
    //  if(commentSubmit.addEventListener("click",commentText)) {
    // }
    //   //돔에 p태그를 만들어요.${newComments}이 값이 담긴
    //   //어디에? newComment(댓글생성영역으로 지정한 클래스 안에 자식요소로)
  }
  //  commentInput.value = "";
  // 생성한 이후에는 commentInput의 값을 원복
  // } else if (commentInput.value.length === 0) {
  //   // commentInput 입력된 값의 길이가 0이면?
  //   commentInput.value = "";//placeholder상태
  //   commentSubmit.style.color = "";//이전 컬러 상태
  // }
}
commentInput.addEventListener("keyup", newCommentAdd)
commentSubmit.addEventListener("click", newCommentAdd)