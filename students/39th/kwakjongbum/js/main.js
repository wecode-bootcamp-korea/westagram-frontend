let comInp = document.querySelector('.feed-input input');
let comBtn = document.querySelector('.btn-post');
let comList = document.querySelector('.comment-area');
// let userId = "user";

// 댓글등록
function addComment(userId){
    const text = comInp.value;
    const addLi = document.createElement('li')
    comList.appendChild(addLi).innerHTML = `<span class="comment-id">${userId}</span><span class="comment-content">${text}</span>`;
}

comBtn.addEventListener('click',function(e){
    if(comInp.value){
        addComment();
        comInp.value = "";
        comBtn.disabled = true;
    }else{
        e.preventDefault();
    }
});

comInp.addEventListener('keyup',function(e){
    if(this.value){
        comBtn.disabled = false;
        if(e.key === 'Enter'){
            addComment();
            this.value = "";
            comBtn.disabled = true;
        }
    }else{
        comBtn.disabled = true;
        e.preventDefault();
    }
});
