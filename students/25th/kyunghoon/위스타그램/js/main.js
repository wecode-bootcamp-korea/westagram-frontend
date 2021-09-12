const commentBtn = document.getElementsByClassName('submitbtn')[0]
const commentList = document.getElementsByClassName('comments')[0]
const commentInput = document.getElementById('feedComment')

commentInput.addEventListener('keypress',function(e){
    if(commentInput.value){
        if(e.which === 13){
            let newComment = document.createElement('li')
            newComment.innerHTML = `<span><span class = "user-id">messi</span></span>` + this.value
            commentList.appendChild(newComment);
            this.value = "";
        }
    }
})

commentBtn.addEventListener('click',function(){
    if(commentInput.value){
        let newComment = document.createElement('li')
        newComment.innerHTML = `<span><span class = "user-id">messi</span></span>` + commentInput.value
        commentList.appendChild(newComment);
        commentInput.value = "";
    }
})

commentInput.addEventListener('keyup',function(event){
    if(commentInput.value){
        commentBtn.disabled = false;
    }else{
        commentBtn.disalbed = true;
    }
})