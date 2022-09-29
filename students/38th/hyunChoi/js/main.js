// /*  1. 버튼 활성화 - 색상? (disable)
//     2. 버튼 비활성화
//     3. comment 게시
//     4. enter key(?)
//     5. input에 입력된 comment 지우기
// */
let commentItem = document.querySelector("comment"); // 댓글 wrap
let commentInput = document.getElementsByClassName("commentInput")[0]; // 입력요소
let commentButton = document.getElementsByClassName("commentButton")[0]; // 입력 버튼

function buttonON(){ // 1. 버튼 활성화
    commentButton.disabled = false;
    commentButton.style.color = '#000000';
}

function buttonOFF(){// 2. 버튼 비활성화
    commentButton.disabled = true;
    commentButton.style.color = 'gray';
}

function commentSubmit(){ // 3. comment 게시
    let comment = commentInput.value;
    let commentWrap = document.createElement('div')
    let commentID = document.createElement('p')
    let commentContent= document.createElement('p')


    commentID.className = 'ptagID'
    commentID.innerHTML = 'hyun._.gus'
    commentContent.innerHTML = comment
    let newComment = document.getElementsByClassName('feedDesc')[0].appendChild(commentWrap)
    newComment.appendChild(commentID)
    newComment.appendChild(commentContent)
}

// function keyIsEnterKey(event){ // 4. enterKey (?)
//     if(event.target.keyCode !== 13){
//         return
//     }else{

//     }
// }

function initInputComment(){ // 5. input에 입력된 comment 지우기
    commentInput.value = ""
}

// commentInput의 value에 따른 commentButton 활성화 이벤트
commentInput.addEventListener('keyup',function(){
    if(commentInput.value.length > 0){
        buttonON()
    }else{
        buttonOFF()
    }
})

// commentButton을 클릭하면 commentInput의 value가 게시되는 이벤트
commentButton.addEventListener('click',function(){
    commentSubmit() //  comment 게시
    initInputComment() // input 내용 삭제
})

commentInput.addEventListener('keypress',function(event){
    console.log(event.keyCode)
    // if(event.keyCode !== 13){
    //     return
    // }else {
    //     commentSubmit(event)
    //     initInputComment(event)
    // }
    if(event.keyCode == 13){
        commentSubmit()
        initInputComment()
    }
})