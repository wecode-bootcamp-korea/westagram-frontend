//댓글//


let newReple = document.querySelector(".reple_box");
let repleButton = document.querySelector(".write_reple");
let index = 0;


const addComment = ()=>{
    let createEl =document.createElement("p")
    let repleVelue = document.getElementById('reple_input');    
    let newRepleTag =newReple.querySelectorAll("p");    
    let repleLength = repleVelue.value.length;
    
    if(repleLength !== 0){

        newReple.appendChild(createEl)  
   
        newRepleTag[index].innerHTML = `<strong>Wecode</strong>${repleVelue.value}`;
    
        index ++;
        repleVelue.value =""

    }else {

        alert("댓글을 입력하세요")
       
    }


}




const moreList = ()=>{
    let story = document.querySelector('.article_container')
    
if(document.querySelector('.article_container').classList.contains('more_active')) {
    story.classList.remove('more_active')
}else{
    story.classList.add('more_active')
}

    


}


let inputbox = document.querySelector("#reple_input");



inputbox.addEventListener('keyup', (event)=>{
   
    if(event.code === "NumpadEnter" || event.code === "Enter") {
        addComment()
    }
});