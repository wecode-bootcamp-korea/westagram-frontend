// const heartButton = document.querySelector(".heart-button");

// heartButton.addEventListener('click',function(){
//     heartButton.classList.toggle('liked');
// })

//input창 변수
const commentInput=document.getElementsByClassName("comment-text")[0];
//button 변수
const commentBtn=document.getElementsByClassName('comment-btn')[0];
//
const commentSection=document.querySelector('.feeds-comment');

//click 이벤트 자체를 매개변수로 받아 replyComment함수호출
//이후 텍스트 창 value는 공백되면서 초기화
commentBtn.addEventListener("click",(e) => {
    comment();
    commentInput.value = "";
});
//input창 입력후 엔터치면 replyComment 함수호출
//이후 텍스트 창 value는 공백되면서 초기화
commentInput.addEventListener("keypress",(e) => {
    if(e.code == "Enter"){
        comment();
        commentInput.value = "";
    }
});

//replyComment함수
function comment(){
    let comment =document.createElement('div');
    let commentId=document.createElement('span');
    let commentContent = document.createElement('p');
    
    comment.classList.add('comment');
    commentId.classList.add('comment-id');
    commentContent.classList.add('comment-content');
    
    commentId.innerText ="happySmile0101";
    commentContent.innerText=commentInput.value;
    
    comment.appendChild(commentId);
    comment.appendChild(commentContent);

    commentSection.appendChild(comment); 

}