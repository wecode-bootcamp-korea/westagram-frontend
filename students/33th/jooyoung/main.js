// 댓글 내용 입력 후 Enter press 또는 게시 버튼 클릭 시 댓글 추가 기능
const commentForm = document.querySelector('.comment_wrap');
const commentInput = document.querySelector('.comment_wrap input');

function paintCommnet(newComment){
    const li = document.createElement("li");
    const p = document.createElement("p");
    const btn = document.createElement("button");
    li.appendChild(p);
    li.appendChild(btn);
    p.innerText = newComment
    console.log(li)
}

// submit -> enter나 게시버튼을 클릭하는 행위가 다 포함되네
// 사용자 입력값을 서버로 보내는 행위라서 전체 다 포함인가보다..?
commentForm.addEventListener('submit', (event) => {
    // Submit 새로고침 안되게 
    event.preventDefault();
    // input의 value를 복사해두고
    const newCommentValue = commentInput.value;
    // input에 빈값 들어가게
    commentInput.value = "";
    paintCommnet(newCommentValue)
})






// function createDiv() {
//     // 부모 Div 생성
//     const commentParent = document.querySelector('.coment_new')
//     const newDiv = document.createElement('div')
//     commentParent.appendChild(newDiv).classList.add('coment_new_box');

//     // 부모 Div 선택 > 자식 p 생성
//     const newBox = document.querySelector('.coment_new_box');
//     const newP = document.createElement('p')
//     newBox.appendChild(newP);

// }

// function createP(){
//     const newBtn = document.createElement('button')
//     const userCommnet = document.querySelector('.comment_wrap input')
//     const newCreatP = document.querySelector('.coment_new_box p');
//     const newStrong = document.createElement('strong');
//     newDiv
//     newP.appendChild(newStrong).innerText='p__jooyoung';
//     // newCreatP.innerText = userCommnet.value;
// }