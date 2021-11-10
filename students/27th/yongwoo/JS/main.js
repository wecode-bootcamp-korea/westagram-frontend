const commentInput = document.querySelector('.commentWrap input');
const addComment = document.querySelector('.textWrap .comment');
const commetBtn = document.querySelector('.commetBtn');

commentInput.addEventListener('keypress', function(value){
    let myName = '94_yongyong_lee';
    let addCommentUnoderList = document.createElement('ul'); 
    let addCommentList = document.createElement('li');
    let boldNameWrap = document.createElement('h4');
    
    if(value.code === "Enter"){
        boldNameWrap.innerText = myName;
        addCommentList.innerText = commentInput.value;
        addComment.appendChild(addCommentUnoderList);
        addCommentUnoderList.appendChild(boldNameWrap);
        addCommentUnoderList.appendChild(addCommentList);
        
        boldNameWrap.style.marginRight = "5px";
        addCommentUnoderList.style.display ="flex";
        
        console.log(commentInput.value);
        return commentInput.value = "";
    };
})


function addCommentListBtn(){
    let value = commentInput.value;
    console.log(value);
}

commetBtn.addEventListener('click',addCommentListBtn)
