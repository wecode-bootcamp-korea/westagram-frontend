const comment = document.querySelector("#comment");
const input = document.querySelector("#comment input");
const commentList = document.getElementsByClassName('commentList')[0];
const btn = document.getElementsByClassName("commentBtn")[0];


function addComment() {
    const li = document.createElement("li")
    const span = document.createElement("span")
    // 만들고
    span.innerText = input.value;
    // 클래스만들고 
    li.appendChild(span);
    // 구조화 
    commentList.appendChild(li);
    // 넣는거
    console.log('a')
}



// function Comment(event) {
//     const newTodo = input.value;
//     addComment(newTodo);
// }


btn.addEventListener("click", addComment());