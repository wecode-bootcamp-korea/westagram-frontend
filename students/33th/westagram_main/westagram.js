let inputArea =document.querySelector('.comment_area')
let inputBtn = document.querySelector('.input_btn')
let commentList =[]

inputBtn.addEventListener('click',inputComment)
inputArea.addEventListener('keyup',(event)=>{
    if(event.keyCode === 13){
        inputComment(event)
    }
})


function inputComment() {
    let comment = {
        id:randomID(),
        commentContent:inputArea.value,
        isComplete:false,
    }
    if(comment.commentContent == ''){
        return;
    }
    commentList.push(comment)
    inputArea.value =''
    console.log(commentList)
    render()
}

function render() {
    resultHTML =''
    for(let i = 0;  i <  commentList.length; i++){
        resultHTML += `<div class="comment_board">
            <div class="comment">${commentList[i].commentContent}</div>
            <div class="comment_icon">
            <i class="fa-regular fa-heart ft_log likeBtn"></i>
            <i class="fa-solid fa-trash-can"></i>
            </div>
        </div>`
    }

    document.querySelector('.comment_up').innerHTML = resultHTML;

}





function randomID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

