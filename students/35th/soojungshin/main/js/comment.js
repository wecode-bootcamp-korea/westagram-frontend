"use strict";


//다시 작성

const commentInput = document.getElementById("commentInput")
//input에 아이디 가져옴
const commentSubmit = document.getElementById("commentSubmit")
//버튼의 아이디를 가져옴


const newCommentAdd = (e) => {
  e.preventDefault();
  const newComments = commentInput.value
  //commentInput에 입력되는 값을 newComments라고 할거에요.
  if (commentInput.value.length > 0) {
    //  commentInput 입력된 값의 길이가 0보다 크다면?
    const newComment = document.querySelector(".newComment")
    // 댓글을 생성할 부모영역을 가져오고
    const commentText = document.createElement("p");
    // 새로운 p를 만들거야!
    commentText.innerHTML = `<span class="userName">user name</span> <span>${newComments}</span>`;
    // p태그 안에 저 문장을 그대로 넣어주세요.
    newComment.appendChild(commentText);
    // newComment의 자식요소로 p태그를 생성되게 할거에요
    commentInput.value = "";
    // 입력된 후 값을 빈 값으로 원복해주세요.
  }

}

const commentSubmitBtn = (e) => {
  if (commentInput.value.length > 0) {
    return commentSubmit.style.color = "#6eacf5"
    // commentSubmit의 컬러를 하늘색으로 바꿔줄게요. 
  } else if (commentInput.value.length === 0) {
    commentSubmit.style.color = ""
    // commentSubmit의 컬러 원복 해주세요.

  }
}


commentSubmit.addEventListener("click", newCommentAdd)
commentInput.addEventListener("keyup", commentSubmitBtn)









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

