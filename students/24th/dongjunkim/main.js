const commentsContainer = document.getElementsByClassName('lowest-container')[0];


const addCommentBtn = document.getElementById('add-comment');
const addCommentInput = document.getElementById('add-comment-content');

const profileName = document.getElementById('login-profile').children[0].innerText;

addCommentBtn.addEventListener('click',function(){

    const comment = document.createElement('div');
    const commentName = document.createElement('span');    
    const commentContent = document.createElement('span');    
    
    commentName.classList.add('bold');
    commentName.innerText = profileName;

    commentContent.innerText = ' '+ addCommentInput.value;

    if(addCommentInput.value.length===0){
        console.log('내용을 입력해주세요');
    }else{
        commentsContainer.appendChild(comment);

        comment.appendChild(commentName);
        comment.appendChild(commentContent);

        addCommentInput.value = '';    
    }
})


addCommentInput.addEventListener('keyup',function(event){

    if(event.key === "Enter"){
    
        console.log(event.key);

        if(addCommentInput.value.length!==0){

            const comment = document.createElement('div');
            const commentName = document.createElement('span');    
            const commentContent = document.createElement('span');    
            
            commentName.classList.add('bold');
            commentName.innerText = profileName;
        
            commentContent.innerText = ' '+ addCommentInput.value;

            commentsContainer.appendChild(comment);
    
            comment.appendChild(commentName);
            comment.appendChild(commentContent);

            addCommentInput.value = '';    

        }
    }


});


/*
게시 누르거나, input에 focus된 상태에서 enter치면
<div><span class="bold">이름</span>내용</div>
*/