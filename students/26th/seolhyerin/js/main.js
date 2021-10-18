"use strict";

const commentInput=document.getElementById("comment_input");
const commentButtonOn=document.getElementById("comment_submit");

function buttonOn(){
  if(commentInput.value.length>0){
    commentButtonOn.disabled = false;
  }else{
    commentButtonOn.disabled = true;
}
}
commentInput.addEventListener("input",buttonOn);

function checkInput(){
    if(commentInput.value.length>0){
        registerComment(commentInput.value);
    }
}
function registerComment(value){
const commentLists=document.getElementById("commentLists");
const newCommentList=document.createElement("li");
const newComment= `<span><span class="name"><b>shurc.onu</b>&nbsp</span>${value}</span><span class="delete">x</span>`;


newCommentList.innerHTML=newComment;
deleteComment(newCommentList);
commentLists.appendChild(newCommentList);

commentInput.value="";
}

function deleteComment(newCommentList){
    const deleteBtn= newCommentList.querySelector(".delete");
    deleteBtn.addEventListener("click", () =>{
        newCommentList.remove();
    })

}

const init = () =>{
    commentButtonOn.addEventListener("click",checkInput);
}

init();


// 1. 댓글을 입력
// 2. 조건이 맞으면 게시 버튼 활성화
// 3. 게시버튼 클릭했을 때, 새로운 li 추가되면서 원래 입력했던 댓글 초기화
// 4. 댓글 게시 성공
// 5. x누르면 댓글 지워지기

