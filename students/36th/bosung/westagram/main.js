// 클릭 및 Enter로 댓글 달기
let post = document.getElementById("post");
let commentBoxValue = document.querySelector(".commentPlz");

post.addEventListener('click',()=>{
    let commentBoxValue = document.querySelector(".commentPlz")
    if(commentBoxValue.value !== ""){
        commentEnterClick()     
  }
})

commentBoxValue.addEventListener('keyup', (key) => {
    let commentBoxValue = document.querySelector(".commentPlz");
    if(key.key === 'Enter'&& commentBoxValue.value !== ""){
        commentEnterClick()
    }
})

function commentEnterClick(){
    let commentAdd = document.querySelector(".commentBottom")
    let commentBoxValue = document.querySelector(".commentPlz");
    
        commentAdd.innerHTML += `<div class="feedMiddleComment">
        <p><span class="commentId">haydemMoon127</span> ${commentBoxValue.value}</p></div>`
        commentBoxValue.value = "";
}

// 버튼 활성화 및 색 바꿔주는 콜백 함수 이것도 합치기 가능 ? 
window.addEventListener('keyup', ()=>{

    const comment = document.querySelector('.commentPlz').value;
    const thisIsButton = document.querySelector('#post');

    if(comment.length > 0){
        thisIsButton.disabled = false;
        thisIsButton.style.backgroundColor = "#0095F6";
     };

    if(comment.length === 0){
        thisIsButton.disabled = true;
        thisIsButton.style.backgroundColor = "#B2DFFC";
    };
})

window.addEventListener('click', ()=>{

    const comment = document.querySelector('.commentPlz').value;
    const thisIsButton = document.querySelector('#post');

    if(comment.length > 0){
        thisIsButton.disabled = false;
        thisIsButton.style.backgroundColor = "#0095F6";
     };

    if(comment.length === 0){
        thisIsButton.disabled = true;
        thisIsButton.style.backgroundColor = "#B2DFFC";
    };
})

///기존 연습했던거 다시 리뷰

/*
window.addEventListener('keyup', function() {

    const idvalue = document.getElementById('id').value;
    const passwordvalue = document.getElementById('password').value;
    const thisIsButton = document.getElementById('loginButton');

    if(idvalue.length === 0 || passwordvalue.length === 0){
        thisIsButton.disabled = true;
        console.log('a')
        thisIsButton.style.backgroundColor = "#B2DFFC";
    };
    
    if(idvalue.length > 0 && passwordvalue.length > 0){
       thisIsButton.disabled = false;
       thisIsButton.style.backgroundColor = "#0095F6";
    };
});

let post= document.querySelectorall('.commentPlz')[0].addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let commentBoxValue= document.querySelector(".commentPlz").value;
        console.log(commentBoxValue)
           let li = document.createElement("li");
           let text = document.createTextNode(commentBoxValue);
           li.appendChild(text);
           document.getElementById("unordered").appendChild(li);
    }
});

let post= document.getElementById("post");

post.addEventListener("click", function(){
    let commentBoxValue= document.querySelector(".commentPlz").value;
    let li = document.createElement("li");
    let text = document.createTextNode(commentBoxValue);
    let commentWithId = `hayedenmoon127 + $[text]`
    li.appendChild(commentWithId);
    document.getElementById("unordered").appendChild(li);
});
/*    post.addEventListener("click", function(){

    let commentBoxValue = document.querySelector(".commentPlz");

    commentAdd.innerHTML +=`<div class="feedMiddleComment">
        <p><span class="commentId">haydemMoon127</span> ${commentBoxValue.value}</p>
    </div>`
    commentBoxValue.value = "";
});


//let enterComment = document.querySelector('.commentPlz');


let post = document.getElementById("post");
let commentBoxValue = document.querySelector(".commentPlz");

post.addEventListener('click',commentEnterClick)

commentBoxValue.addEventListener('keyup', (key) => {
    if (key.key === 'Enter'&& commentBoxValue.value !== "") {
        commentEnterClick()
    }
})



post.addEventListener('click',()=>{
    let commentAdd = document.querySelector(".commentBottom")
    let commentBoxValue = document.querySelector(".commentPlz")
    if(commentBoxValue.value !== ""){

            commentAdd.innerHTML += `<div class="feedMiddleComment">
        <p><span class="commentId">haydemMoon127</span> ${commentBoxValue.value}</p>
          </div>`
        commentBoxValue.value = "";
    }
})

commentBoxValue.addEventListener('keyup', (key) => {
    let commentAdd = document.querySelector(".commentBottom")
    let commentBoxValue = document.querySelector(".commentPlz");
    if(key.key === 'Enter'&& commentBoxValue.value !== ""){
        
        commentAdd.innerHTML += `<div class="feedMiddleComment">
        <p><span class="commentId">haydemMoon127</span> ${commentBoxValue.value}</p>
         </div>`
        commentBoxValue.value = "";
    }
})*/