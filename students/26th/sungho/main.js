const commentIn = document.querySelector(".commentIn");
const commentOut = document.querySelector(".commentOut");
const commentWrite = document.querySelector(".commentWrite")

commentIn.addEventListener('keydown',function () {
    if (event.keyCode==13){
        event.preventDefault(); 
        const comment = document.createElement("li");
        const commentValue = commentIn.value;
        comment.innerHTML= `<span><strong>성호님&nbsp&nbsp&nbsp&nbsp</strong></span>` + commentValue;
        const button = document.createElement('button');
        button.innerHTML = "x"
        comment.appendChild(button);
        deletebutton(button, comment);
        commentWrite.appendChild(comment);
    }
})

function deletebutton(button, comment) {
    button.addEventListener('click', () => {
        comment.remove();
    })
}