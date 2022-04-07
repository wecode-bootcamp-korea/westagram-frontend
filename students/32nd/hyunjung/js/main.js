//input창 변수
const commentInput=document.getElementsByClassName("comment-text")[0];
//button 변수
const commentBtn=document.getElementsByClassName('comment-btn')[0];
const commentSection=document.querySelector('.feeds-comment');
const commentLikedBtn = document.querySelector('.comment-like');



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

function comment(){
    let comment =document.createElement('li');
    let commentLeft =document.createElement('div');
    let commentRight = document.createElement('div');
    let commentId=document.createElement('span');
    let commentContent = document.createElement('span');
    let commentLike = document.createElement('button');
    let commentDelete = document.createElement('button');
    
    comment.classList.add('comment');
    commentLeft.classList.add('comment-left');
    commentRight.classList.add('comment-right');
    commentId.classList.add('comment-id');
    commentContent.classList.add('comment-content');
    commentLike.classList.add('comment-like');
    commentDelete.classList.add('comment-delete');
    
    commentId.innerText ="happySmile0101";
    commentContent.innerText=commentInput.value;
    commentLike.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    commentDelete.innerHTML = ` <i class="fa-solid fa-trash-can"></i>`;
    
    commentLeft.appendChild(commentId);
    commentLeft.appendChild(commentContent);
    commentRight.appendChild(commentLike);
    commentRight.appendChild(commentDelete);
    comment.appendChild(commentLeft);
    comment.appendChild(commentRight);

    commentSection.appendChild(comment); 

    commentLike.addEventListener('click', e => {
        console.log(e.target)

        if(e.target.className === "fa-regular fa-heart"){
            e.target.className = "fa-solid fa-heart";
            e.target.style.color = "red";
        }else if( e.target.className ==="fa-solid fa-heart"){
            e.target.className = "fa-regular fa-heart";
            e.target.style.color = 'black';
        } 
    });

    commentDelete.addEventListener('click', e => {
        commentSection.removeChild(comment);
    });

}

