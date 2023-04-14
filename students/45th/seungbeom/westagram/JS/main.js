const commentInput = document.getElementById("comment-input");
const commentButton = document.getElementById("comment-button");
const commentButtonDelete = document.getElementsByClassName("delete-button")[0]; 
const commentBlockFirst = document.getElementsByClassName("appendChild-add")[0];
const commentButtonLike = document.getElementsByClassName("like-button")[0];
const commentImgHeart = document.getElementsByClassName("heart-commentIcon")[0];




const searchIdData = [
    {num : "1", id : "red", subId : "red | red"},
    {num : "2", id : "redred", subId : "redred | redred"},
    {num : "3", id : "orange", subId : "orange | orange"},
    {num : "4", id : "orangeorange", subId : "orangeorange | orangeorange"},
    {num : "5", id : "orangeorangeorange", subId : "orangeorangeorange | orangeorangeorange"},
    {num : "6", id : "yellow", subId : "yellow | yellow"},
    {num : "7", id : "green", subId : "green | green"},
    {num : "8", id : "blue", subId : "blue | blue"},
    {num : "9", id : "navy", subId : "navy | navy"},
    {num : "10", id : "purple", subId : "purple | purple"},  
];

const search = document.getElementsByClassName("search")[0];
search.addEventListener("keyup", function(e){
        if(e.keyCode === 13){
            watch();
        }
    });

function watch(){
    let value = search.value;
    let result1 = searchIdData.filter(data => data.id.includes(value));
    let map1 = result1.map(x => 
        `<div id="modal">
        <span id="num">${x.num}</span>
        <span>
            <p id="id">${x.id}</p>
            <p id="subId">${x.subId}</p>
        </span></div>`);
    // for(let i=0; i<result1.length; i++){
    // let result = `<div id="modal">
    // <span id="num">${result1[1].num}</span>
    // <span>
    //     <p id="id">${result1[i].id}</p>
    //     <p id="subId">${result1[i].subId}</p>
    // </span>`;
    document.getElementById("test").innerHTML = map1
    console.log(document.getElementById("test"))
    if(search.value === ""){
        document.getElementById("test").setAttribute("style", "display:none");
    }else{
        document.getElementById("test").setAttribute("style", "display:block")
    }
    }



// const search = document.getElementsByClassName("search")[0];
// search.addEventListener("keyup", function(e){
//     if(e.keyCode === 13){
//         searching();
//     }
// });
 
// function searching(){
//     let value = search.value;
//     let result = searchIdData.filter(data => data.id.includes(value));
//     console.log("필터 값 반환 확인", result);
// }


// const result = searchIdData.filter(data => data.id == "ed");

{/* <section class="user-area">
                    <img src="image/main/wecode.png"/>
                    <span class="userName">
                        <div>wecode_bootcamp</div>
                        <div class="userName-sub">WeCode | 위코드</div>
                    </span>
                </section> */}




commentInput.addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        addElement();
}});
commentButton.addEventListener("click", addElement);
commentButtonDelete.addEventListener("click", ()=>deleteComment(commentBlockFirst));
commentButtonLike.addEventListener("click", ()=>likeComment(commentImgHeart));

function addElement(){
    let commentBlock = document.createElement("div");
    let commentDiv = document.createElement("div");
    let commentSpan = document.createElement("span")
    let commentSpanIcon = document.createElement("span");
    let commentButtonDelete = document.createElement("button");
    let commentImgDelete = document.createElement("img");
    let commentButtonLike = document.createElement("button");
    let commentImgHeart = document.createElement("img");
    let commentTimeDiv = document.createElement("div");

    let commentSpanContent = document.createTextNode(`${commentInput.value}`);
    let spacing = document.createTextNode(' ');
    let commentTimeDivContent = document.createTextNode('42분 전');

    commentBlock.setAttribute('class', 'appendChild-add');
    commentSpanIcon.setAttribute('class', 'deleteAndLike');
    commentButtonDelete.setAttribute('class', 'delete-button');
    commentImgDelete.setAttribute('class', 'delete-commentIcon');
    commentImgDelete.setAttribute('src', 'image/main/feed/deleteicon.png');
    commentButtonLike.setAttribute('class', 'like-button');
    commentImgHeart.setAttribute('class', 'heart-commentIcon');
    commentImgHeart.setAttribute('src', 'image/navIcon/heart.png');
    commentTimeDiv.setAttribute('class', 'comment-time');

    commentSpan.appendChild(commentSpanContent);
    commentDiv.appendChild(commentSpan);

    commentButtonDelete.appendChild(commentImgDelete);
    commentButtonLike.appendChild(commentImgHeart);
    commentSpanIcon.appendChild(commentButtonDelete);
    commentSpanIcon.appendChild(spacing);
    commentSpanIcon.appendChild(commentButtonLike);
    commentDiv.appendChild(commentSpanIcon);

    commentTimeDiv.appendChild(commentTimeDivContent);

    commentBlock.appendChild(commentDiv);
    commentBlock.appendChild(commentTimeDiv);

    document.getElementById("comment-next").appendChild(commentBlock);

    commentButtonDelete.addEventListener("click", ()=>deleteComment(commentBlock));
    commentButtonLike.addEventListener("click", ()=>likeComment(commentImgHeart));
}

function deleteComment(commentBlock){
    commentBlock.remove();
}

function likeComment(commentImgHeart){
    if(commentImgHeart.getAttribute("src") === "image/navIcon/heart.png"){
        commentImgHeart.setAttribute("src", "image/main/feed/heartred.png");
    }else{
        commentImgHeart.setAttribute("src", "image/navIcon/heart.png");
    }
}
