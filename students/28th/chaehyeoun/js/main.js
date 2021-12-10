const input=document.querySelector(".comment_box");
const submit=document.querySelector(".comment_btn");

function checkInput(){
    if(!input.value.length){
        alert("댓글을 입력하세요!");
    }
    else{
        registerComment(input.value);
    }
}

function registerComment(value){
    const commentList=document.querySelector(".comment_list");
    const newCommentList=document.createElement("li");
    const newComment=`<span class="insta_id">saram</span><span>${value}</span>`;
    
    console.log(newComment);
    newCommentList.innerHTML=newComment;
    commentList.appendChild(newCommentList);
 
    input.value="";
}
 
const init=()=>{
    submit.addEventListener("click",checkInput);
    
};


init();