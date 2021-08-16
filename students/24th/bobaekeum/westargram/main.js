// 메인페이지 댓글 기능
let addTextElement = document.querySelector('.post');
let textElement = document.querySelector('.typingText');
let commentBtn = document.querySelector('.post');


textElement.addEventListener('keyup', function() {
    if(textElement != 0 ){
        commentBtn.style.color="rgb(0,150,252)";
    }else if(textElement=0){
        commentBtn.style.color='rgb(201, 224, 249)';
    }
})

textElement.addEventListener('keydown', (e)=>{
    if(e.keyCode === 13){
        let div = document.createElement('div');
        let spanId = document.createElement('span');
        let spanText = document.createElement('span');
        let othersComments = document.querySelector(".othersComments")

        div.classList.add('thatgle');
        spanId.classList.add('uName');
        spanText.classList.add("othersComment")
        spanId.textContent = 'nugunga';
        spanText.textContent= textElement.value;
        
        div.appendChild(spanId);
        div.appendChild(spanText);
        othersComments.appendChild(div);
        textElement.value="";  
    }
        
    })

    textElement.addEventListener('click', ()=>{
        if(textElement.value){
            let div = document.createElement('div');
            let spanId = document.createElement('span');
            let spanText = document.createElement('span');
            let othersComments = document.querySelector(".othersComments")
    
            div.classList.add('thatgle');
            spanId.classList.add('uName');
            spanText.classList.add("othersComment")
            spanId.textContent = 'nugunga';
            spanText.textContent= textElement.value;
            
            div.appendChild(spanId);
            div.appendChild(spanText);
            othersComments.appendChild(div);
            textElement.value="";    
        }    
    })
    