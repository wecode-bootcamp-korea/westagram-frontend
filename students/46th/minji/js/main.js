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
function createElementFunc(tag, attr, name, id, input) {
    const rtTag = document.createElement(tag);
    rtTag.setAttribute(attr, name);
    
    if(tag === "img"){
        rtTag.src = input;
        rtTag.setAttribute("id", id);
    }else {
        rtTag.innerText = input;
    }

    return rtTag;
    
}

function chatEvent() { 
    const chatinput = document.getElementById('chatinput').value;
    const li = createElementFunc("li" ,"class", "chat", null, chatinput);
    const span = createElementFunc("span" ,"class", "bord-word", null, "neceosecius ");
    
    const ul = document.querySelector('ul');
    ul.appendChild(li);
    li.prepend(span);
    chatinput.value = null;

}

// 좋아요 버튼 
function Heart() {
    const heartBtn = document.getElementById('heartBtn');
    const nolike = document.getElementById("nolike");
    const yeslike = document.getElementById("yeslike");

    if(nolike){
        nolike.remove();
        const likeimg = createElementFunc("img", "class", "likeimg", "yeslike", "./images/red_heart.png");
        heartBtn.appendChild(likeimg);
    }else{
        yeslike.remove();
        const likeimg = createElementFunc("img", "class", "likeimg", "nolike","./images/heart.png");
        heartBtn.appendChild(likeimg);
    }
    
}