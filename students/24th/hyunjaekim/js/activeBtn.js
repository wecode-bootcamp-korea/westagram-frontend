"use strict";

const commentForm = document.querySelector(".commentForm");
 
commentForm.addEventListener("keyup",() => {
    const commentInput = document.querySelector(".commentInput").value;
    const commentBtn = document.querySelector(".commentPost");

    commentInput.length > 0 
        ? commentBtn.classList.remove("inactive") 
        : commentBtn.classList.add("inactive");
    
})