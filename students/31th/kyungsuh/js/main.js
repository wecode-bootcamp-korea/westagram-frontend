const input = document.querySelector(".inpComment")
console.log(input)
const btnSave = document.querySelector(".btnSave")
console.log(btnSave)
const commentBox = document.querySelector(".commentBox")
console.log(commentBox)
const form = document.querySelector('form');

const listMaker = (text) => {
    const div = document.createElement('div');
    // div.textContent = text;
    commentBox.appendChild(div);
    commentBox.innerHTML += `

    <div class="innerBox">
    <div class="comment">${input.value}</div>
    <img src="src/heart.png" alt="">
</div>`
    div.classList.add('comment');
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    listMaker(input.value); 
    input.value="";  
});

commentBox.addEventListener('click', (e) => {
    e.preventDefault(); 
    listMaker(input.value); 
    // input.value=""; 
})