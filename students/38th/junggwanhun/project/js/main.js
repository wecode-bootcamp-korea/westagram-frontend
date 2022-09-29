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

let count =3;
$heart.addEventListener("click",(e)=>{
    count++;
    $number.innerHTML = `${count}`

})

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
    <div class="commentHeartBox"><img class="commentHeart" src="/style/heart.png"></div>
    <div class="deleteKey">삭제</div>
    `
    $mainFooterInput.focus();
    $mainFooterInput.value = "";
    $bottomBoxDownComment.scrollTo(0,$bottomBoxDownComment.scrollHeight)
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
    <div class="commentHeartBox"><img class="commentHeart" src="/style/heart.png"></div>
    <div class="deleteKey">삭제</div>
    `
    $mainFooterInput.focus();
    $mainFooterInput.value = "";
    $bottomBoxDownComment.scrollTo(0,$bottomBoxDownComment.scrollHeight)
    }
});


$search.addEventListener("keyup",()=>{
    if($search.value !== "") {
        $lens.style.display = "none";
    }else {
        $lens.style.display = "inline-block";
    }
    
})


$bottomBoxDownComment.addEventListener("click",(e) => {
    if(e.target.tagName === "DIV") {
        let cloSest = e.target.closest(".commentBox");
        cloSest.remove();
    }

    // console.log(cloSest);
    if((""+(e.target.getAttribute('src'))).indexOf("red")>-1) {
        e.target.setAttribute('src', '/style/heart.png');
        } else if((""+(e.target.getAttribute('src'))).indexOf("red")<0){
        e.target.setAttribute('src', '/style/redheart.png');
        } 

})



// $deleteKey.forEach((del)=>{
//     del.addEventListener('click', ()=>{
//         del.parentElement.remove();
//     })
// })

// $commentHeart.forEach((heart)=>{
//     heart.addEventListener("click",(e)=>{
//         if((""+(e.target.getAttribute('src'))).indexOf("red")>-1) {
//             e.target.setAttribute('src', '/style/heart.png');
//             } else if((""+(e.target.getAttribute('src'))).indexOf("red")<0){
//             e.target.setAttribute('src', '/style/redheart.png');
//             }  
//     })
// })