const input = document.getElementsByClassName("input")[0];
const uploadButton = document.getElementsByClassName("uploadButton")[0];

// 댓글창 가져오기
// 게시 버튼 가져오기
// 댓글창 값 가져오기
// 댓글창 값이 추가될 공간 만들기
// 댓글창 값이 어디에 추가될지 정하기
// 댓글창에서 엔터를 누르는 이벤트를 하면 추가되는 것으로 이벤트 만들기

// 게시버튼 클릭하면, 댓글이 추가되는 이벤트 만들기.

function addElement(e) {
    
    const box = document.createElement('div');
    
    box.className = 'addedMessage';
    const p = document.createElement('p');
    const space = document.getElementsByClassName("feedMessage")[0];

    if (e.key === "Enter") {
        p.innerHTML = input.value;
        
        box.appendChild(p);
        space.appendChild(box);
        input.value = "";
    }
}

input.addEventListener('keypress',addElement);

function clickEvent() {
    const box = document.createElement('div');

    box.className = 'addedMessage';
    const p = document.createElement('p');
    const space = document.getElementsByClassName("feedMessage")[0];
    p.innerHTML = input.value;
    box.appendChild(p);
    space.appendChild(box);
    input.value = "";
}

uploadButton.addEventListener('click',clickEvent);