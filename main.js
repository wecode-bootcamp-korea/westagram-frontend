let cmntBox = document.querySelector('.commentbox');//댓글입력창
let inputCmnt = document.querySelector('.inputcomment'); //게시button
let smileFace = document.querySelector('.smileface');

function turnBlue(){
if(cmntBox.value.length>0){
    inputCmnt.style.color= '#0095f6'; 
    smileFace.classList.replace('fa-face-smile','fa-face-kiss');
    inputCmnt.removeAttribute('disabled');
    inputCmnt.style.cursor='pointer';
}else{
    inputCmnt.style.color= '#c0dffd'; 
    smileFace.classList.replace('fa-face-kiss','fa-face-smile');
    inputCmnt.setAttribute('disabled','');
    inputCmnt.style.cursor='default';
}
}
cmntBox.addEventListener('keyup', turnBlue);
// 게시글 입력시 활성화

let writes = document.querySelector('.writes');//ul
let write = document.querySelector('.write');//li

const cmntAdd = ()=> {
const text= "yuzu_like "+cmntBox.value;

const item= document.createElement('li');
item.setAttribute('class','item');

const itemText = document.createElement('span');
itemText.setAttribute('class','itemText');
itemText.innerHTML= text;

item.appendChild(itemText);
writes.appendChild(item);

cmntBox.value= '';
};

inputCmnt.addEventListener('click',()=>{cmntAdd();})
inputCmnt.addEventListener('click',turnBlue);
cmntBox.addEventListener('keypress',function(e){
if (e.key==='Enter'){
    cmntAdd();
}
} )


// 댓글입력창

let heart= document.querySelector('.press');

function turnRed(){
if(heart.style.color=='red'){
    heart.classList.replace('fa-solid','fa-regular');
    heart.style.color='black'
}else{
heart.classList.replace('fa-regular','fa-solid');
heart.style.color='red';
}
}
heart.addEventListener('click', turnRed);

// 하트누르기!

