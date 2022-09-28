const commentInput = document.querySelector(".comment-input");
const commentBtn = document.querySelector(".comment-btn");
const commentBox = document.querySelector("#comment-box");
const blankHeart = document.querySelector(".blank-heart")
const redHeart = document.querySelector(".red-heart");
const commentForm = document.querySelector(".feeds-comment-form");
const commentRedHeart = document.getElementsByClassName("comment-red-heart");
const commentBlankHeart = document.getElementsByClassName("comment-blank-heart");
const commentDelete = document.getElementsByClassName("delete");
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");
const searchResults = document.querySelector(".search-results");
const profileBtn = document.querySelector(".nav-profile-icon");
const profileBox = document.querySelector(".nav-profile-box");
const logoutBtn = document.querySelector(".logout");

const idArr1 = [
    {
        name : "wecoder_frontend",
        imgurl : "img/myprofile.jpg",
        introduce : "frontend developer"
    },
    {
        name : "dog_dogdog",
        imgurl : "img/profile1.jpg"
    },
    {
        name : "human_human",
        imgurl : "img/profile2.jpg"
    },
    {
        name : "sunglass_dog",
        imgurl : "img/profile3.jpg"
    },
    {
        name : "iam_ghost",
        imgurl : "img/profile4.jpg"
    },
    {
        name : "dogdogdog",
        imgurl : "img/profile5.jpg"
    },
    {
        name : "hello_human",
        imgurl : "img/profile6.jpg"
    },
    {
        name : "sunglass_man",
        imgurl : "img/profile7.jpg"
    },
    {
        name : "red_profile",
        imgurl : "img/profile8.jpg"
    },
    {
        name : "raincoat",
        imgurl : "img/profile9.jpg"
    },
    {
        name : "iamnotcat",
        imgurl : "img/profile10.jpg"
    },
    {
        name : "hi_hello_hi",
        imgurl : "img/profile11.jpg"
    },
]



function postComment() {
    if(commentInput.value !== ""){
        const newComment = document.createElement("p");
        const commentWriter = document.createElement("span");
        const commentContents = document.createElement("span");
        const heartIcon = document.createElement("i");
        const redHeart = document.createElement("i");
        const deletebtn = document.createElement("span");
        newComment.classList.add("comment-contents");
        commentWriter.innerHTML = "wecoder_frontend";
        commentWriter.classList.add("black-font");
        commentWriter.style.fontWeight = "bold";
        commentContents.innerHTML = commentInput.value;
        commentContents.classList.add("black-font");
        heartIcon.classList.add("far","fa-heart","gray-font","float-right","blank-heart","comment-blank-heart");
        redHeart.classList.add("fas","fa-heart","float-right","comment-red-heart","display-none");
        deletebtn.classList.add("blue-font","delete");
        deletebtn.innerHTML = "삭제";
        newComment.appendChild(commentWriter);
        newComment.appendChild(commentContents);
        newComment.appendChild(heartIcon);
        newComment.appendChild(redHeart);
        newComment.appendChild(deletebtn);
        commentBox.appendChild(newComment);
        commentInput.value = "";
    }

};

function refreshCommentHeart() {
    for (let i = 0; i < commentRedHeart.length; i++) {
        commentRedHeart[i].addEventListener("click", () => {
            commentRedHeart[i].classList.add("display-none");
        });
    }
    for (let i = 0; i < commentBlankHeart.length; i++) {
        commentBlankHeart[i].addEventListener("click", () => {
            commentRedHeart[i].classList.remove("display-none");
        });
    }
};

refreshCommentHeart();

function refreshCommentDelete() {
    for (let i = 0; i < commentDelete.length; i++) {
        commentDelete[i].addEventListener("click", (e)=>{
            e.target.parentElement.remove();
        })
    }
};

refreshCommentDelete();

commentBtn.addEventListener("click", ()=>{
    postComment();
    refreshCommentHeart();
    refreshCommentDelete();
});

commentForm.addEventListener("keydown", (e)=>{
    if(e.code === "Enter") {
        e.preventDefault();
        if(e.isComposing === false){
            postComment();
            refreshCommentHeart();
            refreshCommentDelete();
        }
    }
});


function heartToggle() {
    redHeart.classList.toggle("display-none");
};

blankHeart.addEventListener("click", ()=>{
    heartToggle();
});


function showSearchResults() {
    let resultArr = [];
    resultArr = idArr1.filter((el)=> el.name.includes(searchInput.value));
    resultArr.forEach((el)=> {
        let searchResultBox = document.createElement("div");
        let searchResultImgWrapper = document.createElement("div");
        let searchResultImg = document.createElement("img");
        let searchResultText = document.createElement("span");
        searchResultImgWrapper.classList.add("profile-img-wrapper");
        searchResultImg.src = el.imgurl;
        searchResultImgWrapper.appendChild(searchResultImg);
        searchResultText.innerHTML = el.name;
        searchResultBox.classList.add("search-result-contents","black-font","bold-font");
        searchResultBox.appendChild(searchResultImgWrapper)
        searchResultBox.appendChild(searchResultText);
        searchResults.appendChild(searchResultBox);
    })
}


searchInput.addEventListener("keyup", (e) => {
    if (searchInput.value === ""){
        searchResults.innerHTML = "";
    } else {
        searchResults.innerHTML = "";
        showSearchResults();
    }
});


searchInput.addEventListener("focus", ()=>{
    searchIcon.style.left = "15px";
    searchInput.placeholder = "";
    searchResults.classList.remove("transparent");
});

searchInput.addEventListener("blur", ()=>{
    searchIcon.style.left = "90px";
    searchInput.placeholder = "검색";
    searchResults.classList.add("transparent");
});

profileBtn.addEventListener("click", ()=>{
    profileBox.classList.toggle("hide-top");
});

logoutBtn.addEventListener("click", ()=>{
    location.href = "login.html";
});

