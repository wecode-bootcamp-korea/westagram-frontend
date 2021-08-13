let mainInput = document.querySelector('#main_input_1');
let qLayout1 = document.querySelector('.qa_layout_1');
let qLayout2 = document.querySelector('.qa_push_line');
let spanTag = document.createElement("span");
let form = document.querySelector("#main_input");
let textbutton = document.querySelector("#text_push");
let farHeart = document.querySelector(".fa-heart");
let inputSearch = document.querySelector("#input_search");
let searchBox = document.querySelector("#all");
let change = true;

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

inputSearch.addEventListener('click', ()=>{
    if(true){
        searchBox.style.display = "block";
        
    }
})

inputSearch.addEventListener('focusout', ()=>{
    searchBox.style.display = "none"
})


farHeart.addEventListener('click', ()=>{
    if(farHeart.className === "far fa-heart"){
        farHeart.classList.replace("far", "fas");
    }else if(farHeart.className === "fas fa-heart"){
        farHeart.classList.replace("fas", "far");
    }
})

mainInput.addEventListener('keydown', (e)=>{
    if(e.keyCode === 13){
        let divTag = document.createElement("div");
        let spanTag = document.createElement("span");
        let spanTag2 = document.createElement("span");
        divTag.classList.add('qa_layout_2')
        spanTag.classList.add('qa_name')
        spanTag.textContent = "k_seung_chan"
        spanTag2.classList.add('qa_hello')
        spanTag2.textContent = mainInput.value
        divTag.appendChild(spanTag)
        divTag.appendChild(spanTag2)
        divTag.append(spanTag2)
        qLayout2.append(divTag)
        mainInput.value = "";
    }
});

textbutton.addEventListener('click', ()=>{
    if(mainInput.value){
        let divTag = document.createElement("div");
        let spanTag = document.createElement("span");
        let spanTag2 = document.createElement("span");
        divTag.classList.add('qa_layout_2')
        spanTag.classList.add('qa_name')
        spanTag.textContent = "k_seung_chan"
        spanTag2.classList.add('qa_hello');
        spanTag2.textContent = mainInput.value;
        divTag.appendChild(spanTag);
        divTag.appendChild(spanTag2);
        divTag.append(spanTag2);
        qLayout2.append(divTag);
        mainInput.value = "";
    }
});

