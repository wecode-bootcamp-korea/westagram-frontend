'use strict';
// 1) 내가 넣을 기능을 우선 돔에서 불러와야지 id,class 잘 확인하기!
const commentInput = document.etElementsByClassName('input-commnet');
const submitBtn = document.getElementsByClassName('submit-comment');

// 2) 
function userInput(){
    if(!commentInput.value.length){ //댓글창에 value가 없다면! 길이가 없는게 값이 없는거겠지!
       alert("댓글을 입력하세요!");
    }else{
      registerComment(commentInput.value);  //있다면? 실행시킬꺼야 commentInput을!
    }
}

// 3) 입력값이 있을 때 registerComment를 실행하게 할꺼야 어떻게 실행해야할지 작성해야지!
function registerComment(value){
    // 4) 입력값이 실행되기 위해 어떤 것이 필요하지? 리스트로 올라가고, 이름-내용-아이콘 떠야해
    // 4-1) 입력값이 올라가서 생기게 될 리스트 공간을 만들어야해
    const commentList = document.getElementById("commentList");
    // 4-2) 새로운 리스트 공간에 올라가 리스트를 줘야해
    const newCommentList = document.createElement("li");
    // 4-3) 입력값의 정해진 틀이 있어  이름 - 내용 - 아이콘이 같이 떠야 하는 변수 작성해야해
    const newComment = `<span class="point-span userID">saeYoung-26WE</span><span>${value}</span><img class="comment-heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="하트">`;

// 5) newComment를 innerHtml을 통해서 newCommentList에 추가를 해준거야.
 newCommentList.innerHTML = newComment; 
//  deleteComment(newCommentList);
//  commentList.appendChild(newComment); // 6 ) appendChild 메소드를 사용해서 ( ) 안에 있는 애를 commentList에 자식으로 추가되가는 거야
 commentList.appendChild(newCommentList);

 commentInput.value= ""; // 7) 빈문자열 -> 댓글초기화! 입력을 한 후에 다시 초기화되는거지! 그 전에 상태로!
}

// function deleteComment(newCommentList){
//     const deleteBtn = newCommentList.querySelector(".delete");
//     deleteBtn.addEventListener("click",()=>newCommentList.remove());
// }


// commentInput.addEventListener('keyup',function(){
//     if (commentInput.value) {
//         submitBtn.disabled = false;
//     }
//     else {
//         submitBtn.disabled = true;
//     }
// })

submitBtn.addEventListener('click', function(){
    if (commentInput.value) {
        let newComment = document.createElement('li')
        newComment.innerHTML = `<span><span class="point-span userID">whynot_8282</span>` + commentInput.value + `</span><img class="comment-heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="하트">`;
        // newCommentList.appendChild(newComment);
        commentList.appendChild(newCommentList);
        commentInput.value = "";
    }
})

submitBtn.addEventListener("click", userInput);
