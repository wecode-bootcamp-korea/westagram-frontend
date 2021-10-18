const commentIn = document.querySelector(".commentIn");
const commentOut = document.querySelector(".commentOut");
const first = document.querySelector(".firstComment");


commentIn.addEventListener('keydown',function () {
    if (event.keyCode==13){
        event.preventDefault(); //기본 이벤트 발생을 막아주는 메소드
        const comment = document.createElement("p");
        const comment99 = commentIn.value;
        comment.innerHTML=comment99;
        commentOut.appendChild(comment);
        
    }

})