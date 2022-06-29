const inputComments = document.querySelector(".input-comments");
const inputBtn = document.querySelector(".comments-btn");

const comments = document.querySelector(".comments");
const commentsBox = document.querySelector(".comments-comment");
const comment = document.querySelector('.comment');
const userName = document.querySelector('.comment_user-name');
const content = document.querySelector('.comment_content');



function writeComments() {
    // 게시버튼 활성화
    if(inputComments.value.length>0){
        inputBtn.classList.add('onBtn');  
    }else {
        inputBtn.classList.remove('onBtn');
    }
    
    comments.classList.add("commentsBox");

    function makeCommentBox (){
        //
    }

    function inputValueToContent() { 
        //input 내용을 content 안에 넣어준다
        content.innerText = inputComments.value;
        console.log(content)
    }
    inputValueToContent()

    }

// inputComments.addEventListener('keyup', writeComments)



