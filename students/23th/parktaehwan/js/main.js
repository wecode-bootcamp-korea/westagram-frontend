const commentBtn = document.getElementsByClassName('commentBtn')[0]
const commentValue = document.getElementsByClassName('commentInput')[0];

function btnOn(){
    if(commentValue.value !== ""){
        commentBtn.removeAttribute('disabled');
        commentBtn.style.color = "#0095F6";
        commentBtn.style.fontWeight= "bold";
        commentBtn.style.cursor="pointer";
    }else{
        commentBtn.setAttribute('disabled','disabled');
        commentBtn.style.color = "#b3dffc";
        commentBtn.style.fontWeight="normal";
        commentBtn.style.cursor="default";
    }
}

commentValue.addEventListener('keyup',btnOn);

function postComment(){
    if(commentValue.value !== ""){
        let newComment = document.createElement('div');
        let newCommentLeft = document.createElement('div');        
        let newCommentHeartBox = document.createElement('div');

        newComment.className = 'comment';
        newCommentLeft.className = 'commentLeft';
        newCommentHeartBox.className = 'commentHeartBox';

        newCommentLeft.innerHTML = `<a href=#>wecode_bootcamp</a> ${commentValue.value}`
        newCommentHeartBox.innerHTML = `<i class="far fa-heart like commentHeart"></i>`

        let newPostComment = document.getElementsByClassName('contentComment newComment')[0];

        newPostComment.appendChild(newComment);
        newComment.appendChild(newCommentLeft);
        newComment.appendChild(newCommentHeartBox);

        commentValue.value = "";
    }
}

commentBtn.addEventListener('click',postComment)

commentValue.addEventListener('keypress', function(e){
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        postComment();
    }
});