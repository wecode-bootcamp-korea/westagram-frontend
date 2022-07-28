const chatting = document.querySelector('.chatting');
const input = document.querySelector(".chatInput");
const chatList =document.querySelector('.chat');


const CHAT_KEY ="chattingList" // localstorage에 저장할 때 사용 할 key
let chattingList = []; //localstorage에 저장할 때 사용할 value 내용이 계속 추가됨.

// JSON.stringfy() 함수 설명
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
function savechattingList(){
    localStorage.setItem(CHAT_KEY, JSON.stringify(chattingList))
}
// 삭제 구현
function deleteToDo(event){
    const delLi = event.target.parentElement;
    delLi.remove();
    chattingList = chattingList.filter((toDo) => toDo.id !== parseInt(delLi.id));
    savechattingList();
}
// 댓글 추가 구현
function paintToDo(newTodoObj){
    const showdiv = document.createElement("div");
    showdiv.className = "create"
    showdiv.id = newTodoObj.id;
    const showSpan = document.createElement("p");
    showSpan.className = "createSpan"
    showSpan.innerText = "juno97 : " + newTodoObj.text;
    const showButton = document.createElement("button");
    showButton.className = "createBtn"
    showButton.innerText ="삭제"
    showButton.addEventListener("click", deleteToDo);
    showdiv.appendChild(showSpan);
    showdiv.appendChild(showButton);
    chatList.appendChild(showdiv);
}

function handlechattingListubmit(event){
    event.preventDefault();
    const newTodo = input.value;
    input.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    chattingList.push(newTodoObj);
    paintToDo(newTodoObj);
    savechattingList();
    const top = chatList.scrollHeight;
    chatList.scrollTop = top;
}

chatting.addEventListener("submit",handlechattingListubmit);

// 재부팅 시 localstorage key 값으로 value를 가져와서  
// 모든 value에 접근하여 paintToDo 실행
const savedchattingList = localStorage.getItem(CHAT_KEY);
if (savedchattingList) {
    const parsedchattingList = JSON.parse(savedchattingList);
    chattingList = parsedchattingList;
    parsedchattingList.forEach(paintToDo);
}