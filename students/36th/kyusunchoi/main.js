const commentInput = document.querySelector(".commentInput");
const commentPost = document.querySelector(".postButton");
const comment = document.querySelector(".comment");
const userId = document.querySelector(".useId");




commentInput.addEventListener("keyup",(event)=>{

    if(event.code === "Enter" && commentInput.value !== ""){
        

        let newCommentLine = document.createElement("p");
        let lastComment = comment.children[1];

        newCommentLine.innerHTML =`${userId.textContent} ${commentInput.value}`;

        
        comment.prepend(newCommentLine);

        commentInput.value = "";

        lastComment.remove();

        

    }

})


const clickPost = document.querySelector(".postButton");

clickPost.addEventListener("click", () => {

    if(commentInput.value !== ""){
        
        let newCommentLine = document.createElement("p");
        let lastComment = comment.children[1];

        newCommentLine.innerHTML =`${userId.textContent} ${commentInput.value}`;

        
        comment.prepend(newCommentLine);

        commentInput.value = "";

        lastComment.remove();

}
 })