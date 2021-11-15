function emptyComment() {
    alert("댓글을 입력하세요!!");
}


function submitComment(){
    if(newCommnet) {
        const dateEL = docment.createElement('div');
        const contentEL.classList.add('addComment');
        DataTransferItemList.innerText = newcomment;

        const commentEL = documnet.createElement('div');
        commentEL.classList.add('commentRow'); 
        commentEL.appendChild(contentEL);
    
        document.getElementById('comments').appendChild(commentEL);
        newcommentEl.value="";} 
        
        else {
            warnEmpty();
        }
}