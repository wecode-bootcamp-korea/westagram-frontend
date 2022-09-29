const inputText = document.getElementsByClassName('addtext')[0];
const buttonE = document.querySelector('button');
const area = document.getElementsByClassName('user-area-addText')[0];

function commentEvent (e) {
    if ((inputText.value).length >= 1) {
        const elmCreate = area.appendChild(document.createElement('span'));
        const a = "<b>connon_mj </b>"
        elmCreate.innerHTML = a + inputText.value;
        inputText.value = "";
    }
}

buttonE.addEventListener('click', commentEvent);
inputText.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
     commentEvent();   
    }
});