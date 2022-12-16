// 댓글 input 창에 엔터치거나 "게시" 누르면 댓글 추가되도록
// createElement로 요소 생성해서, input에 입력한 값이 추가 되어야합니다.

// const 댓글 (keyup)
const commentEenter = document.querySelector(".do_comment");
// const 댓글 (click)
// const comment_click = document.querySelector(".post");

const click = document.querySelector(".post");
click.onclick = function () {
  console.log("heii");
};
//
// function addElement() {
//   const newDiv = document.createElement(".comment_wrapper");
//
//   const newContent = document.createTextNode(".comment_box");
//
//   newDiv.appendChild(newContent);
//
//   const currentDiv = document.querySelector(".comment_wrapper");
//   document.body.insertBefore(newDiv, currentDiv);
// };
