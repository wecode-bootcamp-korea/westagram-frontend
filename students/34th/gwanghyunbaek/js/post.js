'use strict';

const text = document.querySelector("textarea");
const btn = document.querySelector(".comment_post");
const postUl = document.querySelector(".feeds_ul");
const img = document.createElement("img");
img.src = './image/heart.png';

function addComment() {
    const comment = document.createElement("li");
   
   if(text.value !== "" ) {
        comment.innerHTML = `<div><strong>bbbb_0221</strong> ${text.value}</div>`;
        postUl.appendChild(comment);
        comment.appendChild(img);
        text.value="";
   }
   function x(e) {
    let result = e.target;
     console.log(result);
    let red = 'http://127.0.0.1:5500/students/34th/gwanghyunbaek/image/heart.png';
        result.src = (result.src === red) ? './image/heart1.png' : red;
    }
        img.addEventListener("click",x);
}
btn.addEventListener("click", addComment);

function enterkey() {
    const comment = document.createElement("li");
    if (window.event.keyCode == 13) {
         if(text.value !== "" ) {
            comment.innerHTML = `<div><strong>bbbb_0221</strong> ${text.value}</div>`;
            postUl.appendChild(comment);
            comment.appendChild(img);
            text.value="";
          }
}
}
text.addEventListener("keyup",btnStyle);

function btnStyle() {
    if(text.value !=="" ) {
        btn.style.color = "#0c9af6";
        btn.disabled = false;
    } else if(text.value === ""){
        btn.style.color = "skyblue";
        btn.disabled = true;
    }
}


// 




/*if(text.value > 0 ) {
    const comment = document.createElement("span");
    comment.innerHTML = `hi`;
    upText.appendChild(comment);
    console.log("click");
} */