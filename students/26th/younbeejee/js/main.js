// const comments = document.getElementById("commentInput").value;
// const submit = document.getElementById("submit");

// function checkInput() {
//     if(comments.length>0){
//         return registerComment(comments);
//     } 
// }

// function registerComment(value){
//     const commentLists = document.getElementByID("commentlists");
//     const newCommentLists = document.createElement("li");
//     const newComment = `<span class="name">jyb0924</span><span>${value}</span><span class="delete">X</span>`

//     newCommentLists.innerHTML = newComment;
//     deleteComment(newCommentLists);
//     commentLists.appendChild(newCommentLists);

//     commentInput.value = "";

// }

// function deleteComment(newCommentLists){
//     const deleteBtn = newCommentLists.querySelector(".delete");
//     deleteBtn.addEventListener("click", () => newCommentLists.remove());
// }

// const init = () => {
//     submit.addEventListener("click", checkInput);
// };

// init();


const input = document.querySelector('.input');
const itemAdd = document.querySelector('.itemAdd');
const items = document.querySelector('.items');

const onAdd = () => {
    const text = input.value;
    if(input.value=== '') {
        input.focus();
        return;
    }
 
    const item = document.createElement('li');
    item.setAttribute('class', 'item');

    const itemText = document.createElement('span');
    itemText.setAttribute('class', 'itemText');
    itemText.innerHTML = `<b><span class="name">33dung</span></b>` + " " + text;

    const itemDel = document.createElement('button');
    itemDel.setAttribute('class', 'itemDel');
    itemDel.innerHTML = '<a href="javascript:void(0)">X</a>';
    
    itemDel.addEventListener('click', () => {
        items.removeChild(item);
    })

    item.appendChild(itemText);
    item.appendChild(itemDel);
    items.appendChild(item);
    input.value = '';
    input.focus();
}


itemAdd.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        onAdd();
    }
    return;
});

