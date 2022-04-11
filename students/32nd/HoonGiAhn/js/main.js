"use strict";

const input = document.getElementsByClassName('reply-input')[0];
const submit = document.querySelector(".submit");
const form =document.querySelector('.reply')
function checkInput(event) {
    event.preventDefault();
    if (input.value.length === 0) {
   //     alert("댓글을 입력하세요!");
    } else {
        //console.log(input.value);
        registerComment(input.value);
        
    }
}

function color() {
    console.log(input.value)
    if (input.value) {
        submit.disabled=false;
        submit.style.color="blue";
        submit.style.cursor="pointer";
    } else {
        submit.disabled = true;
        submit.style.color="lightblue";
        submit.style.cursor="auto";
    }
    
}


function registerComment(value) {
    const commentLists = document.getElementsByClassName("commentLists")[0]
    const newCommentList = document.createElement("li");
    
   const newComment = `
   <li class="name-delete">
   <div>
   <span class="name">hoongiahn</span>
        <span>${value}</span>
        </div>
            <div>
             <span class="delete"><i class="fa-solid fa-delete-left"></i></span>
           </div>
          </li>
    `;

    newCommentList.innerHTML = newComment;
    makeDeleteEvent(newCommentList);
     commentLists.appendChild(newCommentList)

     input.value = "";
}

function makeDeleteEvent(newCommentList) {
    const deleteBtn = newCommentList.querySelector(".delete");
    deleteBtn.addEventListener("click", () =>
        deleteComment(deleteBtn, newCommentList)
        );
}

function deleteComment(deleteBtn, newCommentList) {
    deleteBtn.removeEventListener("click", deleteComment);
    newCommentList.remove();
}

const init = () => {
    //submit.addEventListener("click", checkInput);
    //input.addEventListener("keyup", checkInput );
    input.addEventListener("keyup", color)
    form.addEventListener("submit", checkInput)

    submit.addEventListener("click", color)
}

init();