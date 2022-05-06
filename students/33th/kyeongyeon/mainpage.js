const commentBox = document.querySelector(".comments"), //input 창, querySelector는 우리가 필요한걸 HTML에서 얻어옴
commentInput = commentBox.querySelector("input"),
commentList = document.querySelector(".comments_box");

const COMMENTS_LS = 'writeComments';

function paintComment(text){
    const li = document.createElement("li"); //html에 li창 만들기
    const delBtn  = document.createElement("button");
    delBtn.innerHTML = "❌";
    const span = document.createElement("span");
    span.innerText = text;   //submit function에서 가지고 온 값
    li.appendChild(span);  //부모 Element 값을 넣음, span을 li에 넣고
    li.appendChild(delBtn); //버튼을 li에 넣고
    commentList.appendChild(li);
}

function handleSubmit(event){     //handleSubmit에서 이벤트를 가져옴
    event.preventDefault();
    const currentValue = commentInput.value;
    paintComment(currentValue);
    commentInput.value = ""; //댓글 초기화
}

function loadComments (){
    const writeComments = localStorage.getItem(COMMENTS_LS);
    if(writeComments !== null){     //만약 comments가 null이랑 같지 않다면
    } 
}

function init(){
    loadComments();
    commentBox.addEventListener("submit", handleSubmit)   //이벤트 리스너들 추가하고, 서브밋하고
}
init();