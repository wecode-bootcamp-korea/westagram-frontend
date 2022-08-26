const body = document.body;

const articleComment = document.getElementById("article_comment");
const articleCommentInput = document.getElementById("article_comment_input");
const articleCommentGesi = document.getElementById("article_comment_gesi");
const navInput = document.getElementById("navInput");
const searchList = document.getElementById("searchList");
const searchTriangle = document.getElementById("searchTriangle");
const searchBox = document.getElementById("searchBox");
const profileIcon = document.getElementById("profileIcon");

const profileBox = document.getElementById("profileBox");
// profileBox.style.z-index = -1;

const currentUser = "noon_noo";

const userList = [
    {
        imgURL: "./user.png",
        id: 'wecode1',
        description: 'wecode 111'
    },
    {
        imgURL: "./user.png",
        id: 'wecode2',
        description: 'wecode 222'
    },
    {
        imgURL: "./user.png",
        id: 'wecode3',
        description: 'wecode 333'
    },
    {
        imgURL: "./user.png",
        id: 'wecode4',
        description: 'wecode 444'
    },
    {
        imgURL: "./user.png",
        id: 'wecode5',
        description: 'wecode 555'
    },
    {
        imgURL: "./user.png",
        id: 'wecode6',
        description: 'wecode 666'
    },
    {
        imgURL: "./user.png",
        id: 'wecode7',
        description: 'wecode 777'
    },
    {
        imgURL: "./user.png",
        id: 'wecode8',
        description: 'wecode 888'
    },
    {
        imgURL: "./user.png",
        id: 'wecode9',
        description: 'wecode 999'
    }
];

const articles = {};
articles.article0 = {
    id: "noon_noo_nan_na",
    like: 1,
    comment: [],
};

function deleteHandler(event) {
    // console.log(event.path);
    const articleNum = event.path[3].id;
    const commentNum = event.path[1].id;

    const isDelete = confirm("지울겨?");
    if(isDelete){
        event.path[1].remove();
        articles[articleNum].comment.splice(commentNum,1);
        // console.dir(event);

        const commentCount = articleComment.childElementCount;
        for(let i=0 ; i<commentCount ; i++){
            event.path[2].children[i].id = i;
        }

    }
}

function commentHandlerEnter(event) {
    event.preventDefault()

    const commentCount = articleComment.childElementCount;

    const content = event.target[0].value;
    event.target[0].value = "";

    const comment = document.createElement("div");
    comment.innerHTML = `<div id="content" class="content" onclick='deleteHandler(event)'>${content}</div>`;
    comment.id = commentCount;

    const likeBtn = document.createElement("div");
    likeBtn.innerText = "♡";
    likeBtn.id = "likeBtn";
    likeBtn.className = "likeBtn";
    likeBtn.onclick = likeBtnHandler;
    comment.appendChild(likeBtn);

    const articleId = event.path[2].id;

    const commentObj = {
        writer: currentUser,
        comment: content,
        like: false,
    }
    articles[articleId].comment.push(commentObj);

    articleComment.appendChild(comment);
}


function commentHandlerGesi(event) {
    // console.log(articleComment.childElementCount);

    const commentCount = articleComment.childElementCount;

    const content = event.path[1].firstElementChild[0].value;
    event.path[1].firstElementChild[0].value = "";
    
    const comment = document.createElement("div");
    comment.innerHTML = `<div id="content" class="content" onclick='deleteHandler(event)'>${content}</div>`;
    comment.id = commentCount;

    const likeBtn = document.createElement("div");
    likeBtn.innerText = "♡";
    likeBtn.id = "likeBtn";
    likeBtn.className = "likeBtn";
    likeBtn.onclick = likeBtnHandler;
    comment.appendChild(likeBtn);

    const articleId = event.path[2].id;

    const commentObj = {
        writer: currentUser,
        comment: content,
        like: false,
    }
    articles[articleId].comment.push(commentObj);

    articleComment.appendChild(comment);
}

function likeBtnHandler(event) {
    // console.log(event);
    const articleNum = event.path[3].id;
    const commentNum = event.path[1].id;

    // console.log(articles[articleNum].comment[commentNum]);
    
    const like = articles[articleNum].comment[commentNum].like;

    if(like === false) {
        event.path[0].innerText = "♥️";
        event.path[0].style.color = "red";
        articles[articleNum].comment[commentNum].like = true;
    } else {
        event.path[0].innerText = "♡";
        event.path[0].style.color = "black";
        articles[articleNum].comment[commentNum].like = false;
    }
}

function searchBarHandler(event) {
    const searchInputText = event.target.value;

    if(event.target.value !== ""){
        searchBox.style.display = "flex";

        const userListCopied = userList;

        const userFilterd = userListCopied.filter(value => {
            return value.id.indexOf(searchInputText) !== -1;
        })

        if(userFilterd.length === 0) {
            searchList.innerHTML = `<div class="noPerson">그런 사람은 엄슴니당</div>`;
        } else {
            searchList.innerHTML = "";
            const userFilterdForNewTag = userFilterd.map(value => `<div class="filterdUser"> <img src=${value.imgURL}> <div class="filteredUserText"> <div class="id">${value.id}</div><div class="description">${value.description}</div> </div> </div>`)
            // console.log("userFilterdForNewTag : ", userFilterdForNewTag);
            const searchedUser = document.createElement("div");
            searchedUser.innerHTML = userFilterdForNewTag;
            searchedUser.className = "listBox";
            searchList.appendChild(searchedUser);
        }

    } else {
        searchBox.style.display = "";
        searchList.innerHTML = "";
    }
}

function profileBoxHandler(event) {
    const className = profileBox.className;
    // (className === "profileBox_hidden") ? profileBox.className = "profileBox" profileBox.style.zIndex = 800 :  profileBox.className = profileBox_hidden
    // console.log
    if(className === "profileBox_hidden") {
        profileBox.className = "profileBox";
    }

    console.log(profileBox.style.zIndex);
}

function profileBoxDeleter(event) {
    console.log(event.target.classList);

    const isModal = event.target.classList;

    console.log(isModal.value.indexOf("modal") === -1);

    if(isModal.value.indexOf("modal") === -1){
        event.target.className !== "profileBox" ? profileBox.className = "profileBox_hidden" : {}
        // 위의 사람 아이콘도 model에 포함되지 않기 때문에  event.target.className !== "profileBox" 이게 없으면 아예 창이 안열림
        // event.target.className !== "profileBox" ? profileBox.style.display = "none" : {}
    }  
}

articleCommentInput.addEventListener("submit", commentHandlerEnter);
articleCommentGesi.addEventListener("click", commentHandlerGesi);
navInput.addEventListener("input", searchBarHandler);
profileIcon.addEventListener("click", profileBoxHandler);
body.addEventListener("click", profileBoxDeleter);