let repleItem = document.querySelector("reple"); // 댓글 wrap
let repleInput = document.getElementsByClassName("reple-input")[0]; // 입력요소
let repleBtn = document.getElementsByClassName("reple-button")[0]; // 입력 버튼
function Btn(){
    if(repleInput.value.length > 0) {
        repleBtn.disabled = false;
        repleBtn.style.color = '#000000';
    }else {
        repleBtn.disabled = true;
        repleBtn.style.color = 'gray'
    }
}
repleInput.addEventListener('keyup',Btn)

repleBtn.addEventListener('click', function(e){
let reple = repleInput.value; // 입력요소에 입력된 값
let repleContentWrap = document.createElement('div')
let repleContentID = document.createElement('p')
let repleContent = document.createElement('p')


repleContentID.className = 'ptagID'
repleContentID.innerHTML = 'hyun._.gus'
repleContent.innerHTML = reple 
// repleContentWrap.innerHTML = repleContentID + repleContent
let newReple = document.getElementsByClassName('feedDesc')[0].appendChild(repleContentWrap)
newReple.appendChild(repleContentID)
newReple.appendChild(repleContent)


console.log(reple)
})

function enterkey() {
	if (window.event.keyCode == 13) {
    	let reple = repleInput.value; // 입력요소에 입력된 값
let repleContentWrap = document.createElement('div')
let repleContentID = document.createElement('p')
let repleContent = document.createElement('p')


repleContentID.className = 'ptagID'
repleContentID.innerHTML = 'hyun._.gus'
repleContent.innerHTML = reple 
// repleContentWrap.innerHTML = repleContentID + repleContent
let newReple = document.getElementsByClassName('feedDesc')[0].appendChild(repleContentWrap)
newReple.appendChild(repleContentID)
newReple.appendChild(repleContent)
    }
}