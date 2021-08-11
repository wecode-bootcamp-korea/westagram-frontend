"use strict";
let replies = document.querySelector(".replies"); // ul
let postBtn = document.querySelector(".commentPost"); // submit btn
let currentValue = commentInput.value;  //  입력 값

const commentInput = document.querySelector(".commentInput"); //  input

function onAdd() {
    createItem(currentValue);
    currentValue = "";
}

function createItem(text) {
    const reply = document.createElement("li");
    reply.setAttribute("class", "reply");
    reply.innerHTML = 
        `<div class="replyDetail">
            <a href="#" class="userID">hyun___jjae</a>
            <a href="#" class="comment">${text}</a>
        </div>
        <span class="icon heartBtn small_icon"></span>`  

    // 화면에 보이게
    replies.appendChild(reply);
}


function init() {
    postBtn.addEventListener("click", () => {
        
    });
    commentInput.addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            if(currentValue > 0) {
                onAdd();
            }
        }
    });
};

init();
