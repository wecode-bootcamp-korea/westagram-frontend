const comment = document.querySelector("#comment"); //form
const input = document.querySelector("#comment input");
const commentList = document.querySelector('.commentList');
const btn = document.querySelector("button");
const listItem = document.querySelector("li");





function addComment(event) {

    event.preventDefault();
    const li = document.createElement("li");
    const commentUserId = document.createElement("span");
    const span = document.createElement("span");


    commentUserId.innerText = "Heyho92";
    commentUserId.classList.add('commentUser');

    span.innerText = input.value;

    commentList.appendChild(li);
    li.appendChild(commentUserId);
    li.appendChild(span);
    // 만들고 클래스만들고 구조화 

    input.value = "";
}

function sendBtn() {
    const gesi = input.value;

    if (gesi) {
        btn.classList.remove('commentBtn');
    } else {
        btn.classList.add('commentBtn');
    } console.log(gesi);
}



input.addEventListener("keyup", sendBtn);
btn.addEventListener("click", addComment);



