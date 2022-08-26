const reply = document.querySelector(".mainReplyCreate")
const replyBtn = document.querySelector(".replyBtn")
const commentsContainer = document.querySelector(".mainReplyUl")
const heartBtn =document.querySelectorAll(".like")
const heart = document.getElementsByClassName("fa-solid")
let profile = document.querySelector(".profile");
let modal = document.querySelector(".modal");

replyBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(reply.value.length > 0){
    addComment(reply.value);
    reply.value = "";
    }else{
        alert("내용을 입력해주세요")
    }

})

// -------------------------------------리플생성------------------------------------------------
const addComment = (reply) => {
    const news = document.createElement("li");
    news.innerHTML = `<b>jie_yoon</b>&nbsp&nbsp${reply}<button class="like" onclick="liked(event)";><i class="fa-solid fa-heart"></i></button><button onclick="deleteBtnHandler(event)" class="deleteBtn" >삭제하기</button>`
    commentsContainer.append(news);
    news.className ="replyList"
};

// -------------------------------------모달창생성------------------------------------------------
let modalBtn = document.getElementById("modalBtn")
    modalBtn.addEventListener("click",()=>{
    profile.style.display = "flex";
})
const search = document.getElementsByClassName("search")[0]
    search.addEventListener("click",()=>{
    modal.style.display = "flex";
})
// -------------------------------------모달창제거------------------------------------------------
let body = document.body
let header = document.getElementById("header")
body.addEventListener("click",(e)=>{
    console.dir(e.target)
    if(e.target.parentNode.parentNode !== header ){
        profile.style.display = "none";
        modal.style.display = "none";
    }

})
// if(modal.style.display === "flex" && profile.style.display === "flex"){
//     if(e.target.parentNode.parentNode == header ||
//          e.target.parentNode.parentNode.parentNode == header ||
//          e.target.parentNode.parentNode.parentNode.parentNode == header ){
//         profile.style.display = "none";
//         modal.style.display = "none";
// -----------------------------------------하트색바꿈토글--------------------------------------------

let liked = (event) =>{
    const redHeart = event.target;
    redHeart.classList.toggle("active")
    
    if(redHeart.classList.contains("active")){
        redHeart.style.color = "red";
    }
    else{
        redHeart.style.color = "white";
    }
}


// ------------------------------------삭제버튼-------------------------------------------------
function deleteBtnHandler(event) {
    let button = event.target;
    let deleteAll = button.parentNode;
    commentsContainer.removeChild(deleteAll)
}


// ---------------------------------------검색창구현----------------------------------------------
function filter() {
    const search = document.getElementsByClassName("search")[0].value.toLowerCase();
    const friends = document.getElementsByClassName("friends");

    for (let i = 0; i < friends.length; i++) {
        friendsName = friends[i].getElementsByClassName("friendsName");
        friendsWecode = friends[i].getElementsByClassName("friendsWecode");
        if (friendsName[0].innerHTML.toLowerCase().includes(search) || friendsWecode[0].innerHTML.toLowerCase().includes(search)) {
            friends[i].style.display = "flex"
        } else { friends[i].style.display = "none" }
    }
console.log(search)
}

// -------------------------------------------------------------------------------------



// document.body.addEventListener("click", (event)=>console.dir(event.target))