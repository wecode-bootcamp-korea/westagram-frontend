'use strict';

const text = document.querySelector("textarea");
const btn = document.querySelector(".comment_post");
const postdiv = document.querySelector("div");


function addComment() {
   if(text.value !== "" ) {
       const comment = document.createElement("span");
       comment.innerHTML = `bbbb_0221 ${text.value}  `;
       postdiv.appendChild(comment);
       text.value="";
   }
}
btn.addEventListener("click", addComment);

function enterkey() {
    if (window.event.keyCode == 13) {
         if(text.value !== "" ) {
       const comment = document.createElement("span");
       comment.innerHTML = `bbbb_0221 ${text.value} ${button} `;
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
    } else {
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