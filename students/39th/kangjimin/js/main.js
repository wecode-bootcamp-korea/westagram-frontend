// 댓글 input 창에 엔터치거나 "게시" 누르면
// 댓글 추가되도록 createElement로 요소 생성해서,
// input에 입력된 값이 추가되어야 함

const comment = document.querySelector('.comment');
const loadBtn = document.querySelector('.loadBtn');
const removeBtn = document.querySelector('.x');
const commentList = document.querySelector('.comments');

function remove(){
    commentList.removeChild(this.parentNode);
}

function upload(writing){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const btn = document.createElement('button');
    span.className='id';
    span.innerText = 'canon_mj';
    p.innerText = writing;
    img.src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png';
    btn.innerText = 'X';
    li.appendChild(span);
    li.appendChild(p);
    li.appendChild(btn);
    li.appendChild(img); 
    commentList.appendChild(li);


    const removeBtns = document.querySelectorAll('.comments>li button');
    removeBtns.forEach(removeBtn=>removeBtn.addEventListener('click',remove));
}

function enter(e){
    if(e.keyCode===13){
        upload(this.value);
        comment.value=null;
    }  
}

function mouseClick(){
    upload(comment.value);
    comment.value=null;
}

comment.addEventListener('keydown',enter);
loadBtn.addEventListener('click', mouseClick);
