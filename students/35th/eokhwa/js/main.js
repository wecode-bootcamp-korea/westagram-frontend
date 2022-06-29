//댓글//


let newReple = document.querySelector(".reple_box");
let repleButton = document.querySelector(".write_reple");
let index = 0;
repleButton.addEventListener('click', () => {
    let createEl =document.createElement("p")
    let repleVelue = document.getElementById('reple_input');    
    let newRepleTag =newReple.querySelectorAll("p");    

    newReple.appendChild(createEl)  
   
    newRepleTag[index].innerHTML = `<strong>Wecode</strong>${repleVelue.value}`;

    index ++;
    repleVelue.value =""
})




const moreList = ()=>{
    let story = document.querySelector('.article_container')
    
if(document.querySelector('.article_container').classList.contains('more_active')) {
    story.classList.remove('more_active')
}else{
    story.classList.add('more_active')
}

    


}