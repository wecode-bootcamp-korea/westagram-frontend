let comInp = document.querySelector('.feed-input input');
let comBtn = document.querySelector('.btn-post');
let comList = document.querySelector('.comment-area');
let btnDel = document.querySelector('.comment-area li .btn-delete')
// let userId = "user";

// 댓글등록
function addComment(userId){
    const text = comInp.value;
    const addLi = document.createElement('li')
    comList.appendChild(addLi).innerHTML = `<span class="comment-id">${userId}</span><span class="comment-content">${text}</span>
                                            <div class="btn-wrap">
                                                <button type="button" class="btn-like">좋아요</button>
                                                <button type="button" class="btn-delete">삭제</button>
                                            </div>`;
}

function btnClick(e){
    if(comInp.value){
        addComment();
        comInp.value = "";
        comBtn.disabled = true;
    }else{
        e.preventDefault();
    }
};

function btnEnter(e){
    if(comInp.value){
        comBtn.disabled = false;
        if(e.key === 'Enter'){
            addComment();
            comInp.value = "";
            comBtn.disabled = true;
        }
    }else{
        comBtn.disabled = true;
    }
};


// 좋아요
function btnLike(e){
    if(e.target.classList.contains('btn-like') && e.target.classList.contains('on')){
        e.target.classList.remove('on');
    }else if(e.target.classList.contains('btn-like') && !(e.target.classList.contains('on'))){
        e.target.classList.add('on');
    }
};

// 삭제
function btnDelete(e){
    if((e.target.className === "btn-delete")){
        var msg = confirm("삭제할까요?")
        if(msg === true){
            e.target.parentNode.parentNode.remove();
        }
    }
}

comBtn.addEventListener('click', btnClick)
comInp.addEventListener('keyup', btnEnter)
document.addEventListener('click', btnLike)
document.addEventListener('click', btnDelete)

