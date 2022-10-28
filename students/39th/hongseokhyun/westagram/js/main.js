

// const inputId = document.querySelector("#ID");
// const inputPassword = document.querySelector("#password");
// const button = document.querySelector(".login_btn");

// // function loginBtn(){
//     // const idValue = inputId.value;
//     // const passwordValue = inputPassword.value;


// //     if(idValue.includes('@') && passwordValue.length >5){
// //         button.disabled = false;
// //         button.style.cursor = "pointer";
// //         button.style.opacity = '1'; 
// //     }else {
// //         button.disabled = true;
// //         button.style.cursor = "default";
// //         button.style.opacity = '0.4';
// //     }
// // };

// const loginBtn = () => {
//     const idValue = inputId.value;
//     const passwordValue = inputPassword.value;
//     idValue.includes('@') && passwordValue.length >5
//     // ? button.disabled = false
//     // : button.disabled = true
//     ? button.removeAttribute('disabled')
//     : button.setAttribute('disabled','')
// }
// // }

// inputId.addEventListener('keyup', loginBtn);
// inputPassword.addEventListener('keyup', loginBtn);
// // button.addEventListener('click', successLogin);

/*const 연습 = (idValue.includes('@') && passwordValue.length >5) 
연습 ? 

연습 :
*/


const inputBar = document.querySelector("#comment-input");
const rootDiv = document.querySelector("#comments");
const btn = document.querySelector("#submit");
const mainCommentCount = document.querySelector('#count');

function generateTime(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const wDate = date.getDate();
    const time = year+'.'+month+'.'+wDate;
    return time;
}

function generateUserName(){
    let alphabet = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890~!@#$^&-_';
    var makeUsername = '';
    for(let i=0; i<13;i++){
        let index = Math.floor(Math.random(10) * alphabet.length);
        makeUsername += alphabet[index];        
    }
    return makeUsername;    
}



function deleteComments(event){    
    const btn = event.target;    
    const list = btn.parentNode.parentNode;//commentList
    rootDiv.removeChild(list);
    //메인댓글 카운트 줄이기.
    if(mainCommentCount.innerHTML <='0'){
        mainCommentCount.innerHTML = 0;
    }else{
        mainCommentCount.innerHTML--;
    }
}

function showComment(comment){
    const userName = document.createElement('div');
    const inputValue = document.createElement('div');
    const showTime = document.createElement('div');
    const countSpan = document.createElement('span')
    const commentList = document.createElement('div');
    const delBtn = document.createElement('img');
    
    delBtn.src ="image/heart.png";
    delBtn.className ="deleteComment";
    delBtn.style.width = "20px"
    
    commentList.className = "eachComment";
    commentList.style.display = "flex";
    commentList.style.borderBottom = "none";
    commentList.style.flexDirection = "space-between"
    commentList.style.width = "444px"
    userName.className="name";
    inputValue.className="inputValue";
    inputValue.style.width = "180x"
    showTime.className="time";
    userName.innerHTML = generateUserName();    
    inputValue.innerText = comment;
    showTime.innerHTML = generateTime();
    countSpan.innerHTML=0;   
    commentList.appendChild(userName);
    userName.appendChild(inputValue);
    commentList.appendChild(showTime);
    userName.appendChild(delBtn);
    rootDiv.prepend(commentList);
    delBtn.addEventListener("click",deleteComments);
    console.dir(rootDiv);

}

function pressBtn(){ 
    const currentVal = inputBar.value;
    
    if(!currentVal.length){
    alert("댓글을 입력해주세요!!");
    }else{
    showComment(currentVal);  
    mainCommentCount.innerHTML++;
    inputBar.value ='';
    }
}

btn.onclick = pressBtn;


