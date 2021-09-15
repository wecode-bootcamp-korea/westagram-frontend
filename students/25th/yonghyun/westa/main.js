const WriteBtn = document.getElementById('writeBtn');
const EnterBtn = document.getElementById('writeComment');
const addR = document.getElementById('addR');

function addMessage() {
    if(EnterBtn.value){
    const makeP = document.createElement('li');
    const message = document.getElementById('writeComment').value;
    const firstP = `<a href="" class="re_id">wecode_bootcamp</a>
    <span class="re_p">`;
    const lastP = `</span>
    <span class="deletespan">
    <button class="deleteBtn"><i class="fas fa-ellipsis-h"></i></button>
    </span>
    <span class="delete">x</span><button class="re_heart"><i class="far fa-heart"></i></button>`

    makeP.innerHTML = `${firstP}${message}${lastP}`;
    addR.appendChild(makeP);
    reset();   
    }
    
}

function keyEnter() {
    if(window.event.keyCode==13){
        addMessage();
    }
}

WriteBtn.addEventListener('click',addMessage);
EnterBtn.addEventListener('keydown',keyEnter);


function reset() {
    const message = document.getElementById('writeComment');
    message.value = null;
}

function heartChange() {
    const heartClick = document.querySelector('.likeBtn');
    const emptyH = document.querySelector('#emptyheart');
    const redH = document.querySelector('#redheart');
    
        emptyH.style.color = 'transparent';
        redH.style.color = 'red';
}

const deleteIcon = document.querySelector('.delete')
const manyLine = document.querySelector('.feedComment')

function eraseLine() {
    const thisLine = manyLine.querySelector('li');
    thisLine.remove();
}

deleteIcon.addEventListener('click', eraseLine);

// const clickE = document.querySelector('.erase');
// const asd = document.getElementsByClassName('re_p');

// function removeP() {
//     asd.remove();
// }

// clickE.addEventListener('click', removeP);

// const makeBtn = document.querySelector('.erase');
// const comment = document.querySelector('.deleteLine');

// makeBtn.addEventListener("click", (event) => {
       
//     const btn = event.target; 
//     console.log(btn);  //span erase
    
//     const deleteAll = btn.parentNode; 
//     console.log(deleteAll); //p asdf
//     // comment.removeChild(deleteAll); 
// })

// function deletesome(){
//     const btn = document.querySelector('.erase'); 
//     const comment = document.querySelector('.deleteLine');
//     // console.log(btn);  //span erase
    
//     const deleteAll = btn.parentNode; 
//     console.log(deleteAll); //p asdf
//     // comment.removeChild(deleteAll); 
// }
