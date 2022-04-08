const textbox = document.querySelector(".toaddcomment"); //input box
const submitbutton = document.querySelector(".add"); //게시버튼

const userul=document.querySelector('.userlist')
const commentleft = document.querySelector('.comment1');
const commentright = document.querySelector('.comment2');


submitbutton.addEventListener('click', function() {
    if(textbox.value && textbox.value.length>0 && textbox.value.trim().length>0){
    let newcomment1 = document.createElement("li");
    newcomment1.innerHTML=textbox.value;
    commentright.appendChild(newcomment1);
    let newcomment2 = document.createElement("li");
    newcomment2.innerText = "beom";
    commentleft.appendChild(newcomment2);
    textbox.value=""; 
}})

textbox.addEventListener('keypress',function(e) {
    if(textbox.value && textbox.value.length>0 && textbox.value.trim().length>0){
    if (e.keyCode == 13){
        let newcomment1 = document.createElement("li");
        newcomment1.innerHTML = textbox.value;
        commentright.appendChild(newcomment1);
        let newcomment2 = document.createElement("li");
        newcomment2.innerText = "beom";
        commentleft.appendChild(newcomment2);
        textbox.value="";
    }}})