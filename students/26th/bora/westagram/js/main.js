//main.js

const input = document.querySelector('.chatBox');
const msg = document.querySelector('.msg');
const btn = document.querySelector('.uploadBtn');

//1. 게시 버튼 활성화
const writeChat = e => {
    btn.style.opacity = 0.4;

    if(input){    
        btn.style.opacity = 1;
    } else {
        btn.style.opacity = 0.4;
    }
}
input.addEventListener("input",writeChat);

//2. chatBox에 입력해서 게시버튼 클릭하면 요소가 추가되게 하기
const addChat = e => {
    e.preventDefault();

    const newCommentId = document.createElement('p');
    newCommentId.classList.add('userId');
    newCommentId.innerHTML = `bori9412`;
    
    const newCommentTxt = document.createElement('p');
    newCommentTxt.classList.add('msg');
    newCommentTxt.innerHTML = input.value;
    
    document.querySelector('.new').appendChild(newCommentId);
    document.querySelector('.new').appendChild(newCommentTxt);

    //삭제버튼 추가하기

}

btn.addEventListener("click", addChat);
