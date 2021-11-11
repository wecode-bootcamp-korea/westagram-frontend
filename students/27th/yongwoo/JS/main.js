const commentInput = document.querySelector('.commentWrap input');
const addComment = document.querySelector('.textWrap .comment');
const commetBtn = document.querySelector('.commetBtn');
const commentStart = document.querySelector('.commentStart');
const heart = document.querySelector('.heart');
const heartColor = document.querySelector('.heartColor');
const trashBtn = document.querySelector('.trash');


commentInput.addEventListener('keypress', function(value){
    let myName = '94_yongyong_lee';
    let addCommentUnoderList = document.createElement('ul'); 
    let addCommentList = document.createElement('li');
    let boldNameWrap = document.createElement('h4');
    
    if(value.code === "Enter"){
        boldNameWrap.innerText = myName;
        addCommentList.innerText = commentInput.value;
        commentStart.appendChild(addCommentUnoderList);
        addCommentUnoderList.appendChild(boldNameWrap);
        addCommentUnoderList.appendChild(addCommentList);
        
        addCommentUnoderList.style.display ="flex";     
        boldNameWrap.style.marginRight = "5px";
        return commentInput.value = "";
    };
})

function addCommentListBtn(){
    let myName = '94_yongyong_lee';
    let addCommentUnoderList = document.createElement('ul'); 
    let addCommentList = document.createElement('li');
    let boldNameWrap = document.createElement('h4');

    boldNameWrap.innerText = myName;
    addCommentList.innerText = commentInput.value;
    commentStart.appendChild(addCommentUnoderList);
    addCommentUnoderList.appendChild(boldNameWrap);
    addCommentUnoderList.appendChild(addCommentList);
    
    boldNameWrap.style.marginRight = "5px";
    addCommentUnoderList.style.display ="flex";
    return commentInput.value = "";
}

function redHeartColorChange(){
    heartColor.style.display = "inline-block";
    heart.style.display = "none";
}

function blackHeartColorChange(){
    heart.style.display = "inline-block";
    heartColor.style.display = "none";
}

function changeButtonColor(value){
    if(value.length !== 1){
        commetBtn.style.color = "#0095f6";
    }
    if(value.code === "Enter"){
        return commetBtn.style.color ="#BFE0FD";
    }
}
function buttonColorReset(){
    return commetBtn.style.color ="#BFE0FD";
}
        
heart.addEventListener('click',redHeartColorChange);
heartColor.addEventListener('click',blackHeartColorChange);
commetBtn.addEventListener('click',addCommentListBtn);
commetBtn.addEventListener('click',buttonColorReset);
commentInput.addEventListener('keydown',changeButtonColor);
