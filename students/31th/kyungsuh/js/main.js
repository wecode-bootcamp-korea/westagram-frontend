const input = document.querySelector(".inpComment")
const btnSave = document.querySelector(".btnSave")
const commentBox = document.querySelector(".commentBox")
const form = document.querySelector('form');

// 댓글 기능 구현 
const listMaker = (text) => {
    const div = document.createElement('div');
    // div.textContent = text;
    commentBox.appendChild(div);
    commentBox.innerHTML += `
    <div class="innerBox">
    <div class="comment">${input.value}</div>
    <img class="heartIcon" src="src/heart.png" alt="">`
    div.classList.add('comment');

    // 댓글 좋아요 기능 
    const heartIcon = document.querySelectorAll(".heartIcon")
    console.log(heartIcon)
    for(const icon of heartIcon) {
        icon.addEventListener("click", () => {
            icon.src="src/heart-solid.svg"            
        })
    }

    // 좋아요 취소 기능 구현 

}

// 엔터 버튼으로 댓글 다는 기능 구현 
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    listMaker(input.value); 
    input.value="";  
});

// 게시 버튼 활성화 
function onCommentBtn() {
    const value = input.value
    if(value) {
        btnSave.classList.add("on")
    }
}

input.addEventListener('keyup',onCommentBtn)

