const inputText = document.getElementsByClassName('addtext')[0];
const buttonE = document.getElementsByClassName('user-text-button')[0];
const area = document.getElementsByClassName('user-area-addText')[0];

function commentEvent(e) {
    if ((inputText.value).length >= 1) {
        const elmCreate = area.appendChild(document.createElement('span'));
        const thisIsCommentAdd = `
        <div class="commentJs">
        <span><b>connon_mj </b>${inputText.value}</span>
        <i class="fa-regular fa-heart"></i>
        </div>
        `
        elmCreate.innerHTML = thisIsCommentAdd;
        inputText.value = "";
    }
}

buttonE.addEventListener('click', commentEvent);
inputText.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        commentEvent();
    }
});

const thisIsIcone = document.getElementsByClassName('user-icone-left')[0];
const thisIsHeart1 = document.getElementsByClassName('fa-regular')[4];
const thisIsHeart2 = document.getElementsByClassName('fa-heart')[0];
const thisIsButton = document.getElementsByClassName('user-icon-button')[0];


function heartAddColor() {
    thisIsHeart1.classList.toggle('fa-solid');
}

thisIsButton.addEventListener('click', heartAddColor);