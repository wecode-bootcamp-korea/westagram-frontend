const search = document.querySelector(".nav-search");
const search_input = document.querySelector(".search-input");
const search_img = document.querySelector(".search-img")
const comment_contents = document.querySelector(".comment-contents");
const comment_input = document.querySelector(".comment-input");
const comment_button = document.querySelector('.comment-button');



const handleSearch=()=>{
    
    search_input.style.width="100%";
    search_img.style.display ="none";

    
}
const createComment = ()=>{
    
    let comment = comment_input.value;
    let blank_pattern = /^\s+|\s+$/g;
    if(comment.replace(blank_pattern,'')!==""&&comment!==""){
    let div = document.createElement("div");
    let likeBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    likeBtn.innerHTML="좋아요";
    deleteBtn.innerHTML="삭제";
    div.innerHTML=comment;
    div.append(likeBtn);
    div.append(deleteBtn);
    comment_contents.append(div);
    comment_input.value="";

    const commentDelete = () =>{
        div.remove();
    }
    const commentLike = () => {
        div.remove();
    }

    likeBtn.addEventListener('click' ,commentDelete);
    deleteBtn.addEventListener('click', commentLike);
}
}
const searchReset = ()=>{
    search_input.style.width="50%";
    search_img.style.display ="block";
}
function enterkey() {
    if (window.event.keyCode == 13) {
        createComment();
    }
}


출처: https://cofs.tistory.com/12 [CofS]
search.addEventListener('click', handleSearch);
comment_button.addEventListener('click', createComment);
search_input.addEventListener('focusout',searchReset);





