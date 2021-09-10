const comment = document.querySelector("#comment"); //form
const input = document.querySelector("#comment input");
const commentList = document.querySelector('.commentList');
const btn = document.querySelector(".commentBtn");
const listItem = document.querySelector("li");


function addComment(event) {

    event.preventDefault();
    const li = document.createElement("li");
    const span = document.createElement("span");
    const commentUserId = document.createElement("span");

    commentUserId.innerText = "Heyho92";
    commentUserId.classList.add('commentUser');

    span.innerText = input.value;

    commentList.appendChild(li);
    li.appendChild(commentUserId);
    li.appendChild(span);
    // 만들고 클래스만들고 구조화 

    input.value = "";

}

btn.addEventListener("click", addComment);
input.addEventListener("");


