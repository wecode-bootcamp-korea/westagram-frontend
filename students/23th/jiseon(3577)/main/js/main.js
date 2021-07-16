const comment = document.querySelector(".comment");
const commentBtn = document.querySelector(".commentBtn");
const commentViewBox = document.querySelector(".commentViewBox");


comment.addEventListener("keydown",plusComment);
commentBtn.addEventListener("click",plusComment);


function plusComment(e){
  if((e.keyCode === 13)||(e.target === commentBtn)){
    let username = "BuZzzzz";
    const value = comment.value;
    const span = document.createElement("span");
    span.innerText = username;
    span.classList.add("boldFont");
    const li = document.createElement("li");
    const div = document.createElement("div");
    // li.appendChild(span);
    li.innerText = value;
    li.classList.add("commentStyle");
    div.appendChild(span);
    div.appendChild(li);
    div.classList.add("commentFlex");
    commentViewBox.appendChild(div);
    comment.value = " ";

    // span.innerText = username;
    // li.innerText = value;
    
    // li.classList.add("commentStyle");
    // span.classList.add("boldFont");
    // comment.value = " ";
    
}
}






// li.style.font = "12px Open Sans";
//     li.style.color = "#aaabac";
//     li.style.margin = "6px";
//     li.innerText = comment.value;
//     comment.value = " ";
//     console.log(comment.dir);