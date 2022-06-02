'use strict';

const text = document.querySelector("textarea");
const btn = document.querySelector(".comment_post");
const postdiv = document.querySelector(".feeds_ul");
const img = document.createElement("img");




function addComment() {
    const comment = document.createElement("li");
   if(text.value !== "" ) {
       comment.innerHTML = '<span><strong>bbbb_0221</strong>'+ text.value+ '</span>';
        postdiv.appendChild(comment);
        img.src = './image/heart.png';
    postdiv.appendChild(img);
       text.value="";
   }
}
btn.addEventListener("click", addComment);

function enterkey() {
    const comment = document.createElement("span");
    if (window.event.keyCode == 13) {
         if(text.value !== "" ) {
       comment.innerHTML ='<span><strong>bbbb_0221</strong>'+ text.value+ '</span>';
        postdiv.appendChild(comment);
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
/*if(text.value > 0 ) {
    const comment = document.createElement("span");
    comment.innerHTML = `hi`;
    upText.appendChild(comment);
    console.log("click");
} */