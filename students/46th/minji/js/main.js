// 댓글 버튼 활성화
function validate() {
    const chatinput = document.getElementById('chatinput').value;
    if(!!(chatinput)){
        btnActive();
    }
  }

function btnActive() {   
    const inputBtn = document.getElementById('inputBtn');
    inputBtn.disabled = false;
    inputBtn.classList.remove("disableBtn");
    inputBtn.classList.add("ableBtn");
}

//태그 생성 공통 함수
function createElementFunc(tag, select, name, input) {
    const rtTag = document.createElement(tag);
    rtTag.setAttribute(select, name);
    rtTag.innerText = input;
    return rtTag;
}

function chatEvent() { 
    const chatinput = document.getElementById('chatinput').value;
    const li = createElementFunc("li" ,"class", "chat", chatinput);
    const span = createElementFunc("span" ,"class", "bord-word", "neceosecius ");
    
    const ul = document.querySelector('ul');
    ul.appendChild(li);
    li.prepend(span);
    chatinput.value = null;

}