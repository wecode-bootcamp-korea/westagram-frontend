const inputComment = document.querySelector("#comment");
const upload = document.querySelector("button");
const commentDiv = document.querySelector('.comment-div');

function uploadBtn() {
    const commentValue = inputComment.value;

    if (commentValue.length > 0) {
        upload.style.cursor = "pointer";
        upload.style.color = "#0095f6";
    } else {
        upload.style.cursor = "default";
        upload.style.color = "#C0DFFD";
    }
};

inputComment.addEventListener('keyup', uploadBtn);

function onAdd(){
    const result = inputComment.value;

    if(result) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="comment-msg">
            <a class="id" href="">82people</a>
            <span>${result}</span>
            <div class="new-comment"></div>
            </div>
        </div>
        `
        commentDiv.appendChild(div);
        inputComment.value ='';
        inputComment.focus();
    }
}

upload.addEventListener('click', ()=>{
    onAdd();
})

inputComment.addEventListener('keypress', (e)=>{
    if (e.key === 'Enter') {
        onAdd();
    }
})