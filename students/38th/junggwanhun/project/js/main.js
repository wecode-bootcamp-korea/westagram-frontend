const $mainFooterInput = document.querySelector(".mainFooterInput");
const $buttonClick = document.querySelector(".buttonClick");
const $bottomBoxDownComment = document.querySelector(".bottomBoxDownComment");
const $commentId =document.querySelector(".commentId");
const $commentComment =document.querySelector(".commentComment");
const $commentBox = document.querySelectorAll(".commentBox");
const $commentHeart = document.querySelectorAll(".commentHeart");
const $heartChange = document.querySelector(".heartChange");
const $search = document.querySelector(".search");
const $lens = document.querySelector(".fa-magnifying-glass");
const $number = document.querySelector(".number");
const $heart = document.querySelector(".heart");
const $deleteKey = document.querySelectorAll(".deleteKey");
const $navMe = document.querySelector(".navMe");
const $navMeBox = document.querySelector(".navMeBox");

$navMe.addEventListener("click",()=>{

    if($navMeBox.style.display === ""){
    $navMeBox.style.display  = "flex";}
    else{
        $navMeBox.style.display  = "";    
    }
})

$buttonClick.addEventListener("click",()=>{
    let result = $mainFooterInput.value;
    let div = document.createElement("div");
    $bottomBoxDownComment.appendChild(div);
    div.classList.add('commentBox');
    div.innerHTML=`
    <div class="commentId">Dog</div>
    <div class="commentComment">${result}</div>
    <div class="commentHeartBox"><img class="commentHeart" src="/project/style/heart.png"></div>
    <div class="deleteKey">삭제</div>
    `
    $mainFooterInput.focus();
    $mainFooterInput.value = "";
});

$mainFooterInput.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
        let result = $mainFooterInput.value;
    let div = document.createElement("div");
    $bottomBoxDownComment.appendChild(div);
    div.classList.add('commentBox');
    div.innerHTML=`
    <div class="commentId">Dog</div>
    <div class="commentComment">${result}</div>
    <div class="commentHeartBox"><img class="commentHeart" src="/project/style/heart.png"></div>
    <div class="deleteKey">삭제</div>
    `
    $mainFooterInput.focus();
    $mainFooterInput.value = "";
    }
});


$search.addEventListener("keyup",()=>{
    if($search.value !== "") {
        $lens.style.display = "none";
    }else {
        $lens.style.display = "inline-block";
    }
    
})

$deleteKey.forEach((del)=>{
    del.addEventListener('click', ()=>{
        del.parentElement.remove();
    })
})

$commentHeart.forEach((heart)=>{
    heart.addEventListener("click",(e)=>{
        if((""+(e.target.getAttribute('src'))).indexOf("red")>-1) {
            e.target.setAttribute('src', '/project/style/heart.png');
            } else if((""+(e.target.getAttribute('src'))).indexOf("red")<0){
            e.target.setAttribute('src', '/project/style/redheart.png');
            }  
    })
})