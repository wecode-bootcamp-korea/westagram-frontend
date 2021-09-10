const text = document.getElementById("textarea");
const upload = document.getElementsByClassName('text-up-btn')[0];
const push = document.getElementsByClassName('article-text3')[0];
// const comment = document.getElementsByClassName('commentText')[0];



text.addEventListener('keydown',function(e){
    if(e.keyCode === 13){
        pushComment();
        // text.value="";
    }
})





function pushComment() {
    let x = text.value;
    let y = document.createElement("div")
    y.classList.add('commentText');
    y.innerHTML = x;
    text.value = "";
    push.appendChild(y);
  }