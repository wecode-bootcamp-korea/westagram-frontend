// 댓글 내용 입력 후 Enter press 또는 게시 버튼 클릭 시 댓글 추가 기능
const commentForm = document.querySelector('.comment_wrap');
const commentInput = document.querySelector('.comment_wrap input');
const commentUl = document.querySelector('.coment_new');



function paintCommnet(newComment){
    const li = document.createElement("li");
    const p = document.createElement("p");
    const btn = document.createElement("button");
    const img = document.createElement('img');
    const strong = document.createElement('strong');
    const span = document.createElement('span');
    
    li.classList.add("coment_new_box")
    li.appendChild(strong);
    strong.innerText = "p__jooyoung";
    li.appendChild(p);
    p.innerText = newComment;
    
    li.appendChild(btn);
    btn.appendChild(img);
    img.setAttribute('src', 'images/heart.png');
    img.style.color = 'black';
    
    li.appendChild(span);
    span.innerText = "삭제";
    
    
    commentUl.appendChild(li);
    img.addEventListener('click', haertToggle);
    span.addEventListener('click', deleteComment);
}

commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newCommentValue = commentInput.value;
    commentInput.value = "";
    paintCommnet(newCommentValue)
})


function haertToggle(e){
    const heart = e.target;
    console.log(e.target);
    
    if(heart.style.color === 'black'){
        console.log(heart);
        heart.src = "images/heartfull.png";
        heart.style.color = 'red';
    } else {
        heart.src = "images/heart.png";
        heart.style.color = 'black';
    }
}

function deleteComment(e){
    const li = e.target.parentElement;
    li.remove();
}