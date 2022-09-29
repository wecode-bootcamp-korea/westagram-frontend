// let commentItem = document.querySelector("comment"); // 댓글 wrap
// let commentInput = document.getElementsByClassName("commentInput")[0]; // 입력요소
// let commentButton = document.getElementsByClassName("commentButton")[0]; // 입력 버튼
// function Btn(){
//     if(repleInput.value.length > 0) {
//         repleBtn.disabled = false;
//         repleBtn.style.color = '#000000';
//     }else {
//         repleBtn.disabled = true;
//         repleBtn.style.color = 'gray'
//     }
// }
// repleInput.addEventListener('keyup',Btn)

// repleBtn.addEventListener('click', function(e){
// let reple = repleInput.value; // 입력요소에 입력된 값
// let repleContentWrap = document.createElement('div')
// let repleContentID = document.createElement('p')
// let repleContent = document.createElement('p')


// repleContentID.className = 'ptagID'
// repleContentID.innerHTML = 'hyun._.gus'
// repleContent.innerHTML = reple 
// // repleContentWrap.innerHTML = repleContentID + repleContent
// let newReple = document.getElementsByClassName('feedDesc')[0].appendChild(repleContentWrap)
// newReple.appendChild(repleContentID)
// newReple.appendChild(repleContent)


// console.log(reple)
// })

// function enterkey() {
// 	if (window.event.keyCode == 13) {
//     	let reple = repleInput.value; // 입력요소에 입력된 값
// let repleContentWrap = document.createElement('div')
// let repleContentID = document.createElement('p')
// let repleContent = document.createElement('p')


// repleContentID.className = 'ptagID'
// repleContentID.innerHTML = 'hyun._.gus'
// repleContent.innerHTML = reple 
// // repleContentWrap.innerHTML = repleContentID + repleContent
// let newReple = document.getElementsByClassName('feedDesc')[0].appendChild(repleContentWrap)
// newReple.appendChild(repleContentID)
// newReple.appendChild(repleContent)
//     }
// }
// /*  1. 버튼 활성화 - 색상? (disable)
//     2. 버튼 비활성화
//     3. comment 게시
//     4. enter key(?)
//     5. input에 입력된 comment 지우기
// */
let commentItem = document.querySelector("comment"); // 댓글 wrap
let commentInput = document.getElementsByClassName("commentInput")[0]; // 입력요소
let commentButton = document.getElementsByClassName("commentButton")[0]; // 입력 버튼

function buttonON(){
    commentButton.disabled = false;
    commentButton.style.color = '#000000';
}

function buttonOFF(){
    commentButton.disabled = true;
    commentButton.style.color = 'gray';
}

function commentSubmit(){
    let comment = commentInput.value; // 입력요소에 입력된 값
    let commentWrap = document.createElement('div')
    let commentID = document.createElement('p')
    let commentContent= document.createElement('p')


    commentID.className = 'ptagID'
    commentID.innerHTML = 'hyun._.gus'
    commentContent.innerHTML = comment
    let newComment = document.getElementsByClassName('feedDesc')[0].appendChild(commentWrap)
    newComment.appendChild(commentID)
    newComment.appendChild(comment)
}

// function keyIsEnterKey(event){
//     if(event.target.keyCode !== 13){
//         return
//     }else{

//     }
// }

function initInputComment(){
    commentInput.value = ""
}