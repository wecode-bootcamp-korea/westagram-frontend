



const comment = document.querySelector("#comment"); 
const commentList = document.querySelector('.commentlist');
const input = document.querySelector(".comment-in input");
const listItem = document.querySelector("li");
const btn = document.querySelector("button");




function addComment(event) {

    event.preventDefault();
    const li = document.createElement("li");
    const commentUserId = document.createElement("span");
    const span = document.createElement("span");


    commentUserId.innerHTML = "<strong>eunji12</strong> ";
    commentUserId.classList.add('commentUser');

    span.innerHTML = input.value;

    commentList.appendChild(li);
    li.appendChild(commentUserId); 
    li.appendChild(span);


    input.value = ""; 
}


function sendBtn() {
    const bong = input.value;

    if (bong) {
        btn.classList.remove('commentBtn');
        bong = "";
    } else {
        btn.classList.add('commentBtn');
        bong = "";
    }
}


input.addEventListener("keyup", sendBtn); 
btn.addEventListener("click", addComment);
btn.addEventListener("click", sendBtn);	 


