const commentInput = document.getElementById("comment-input");
const commentButton = document.getElementById("comment-button");

commentInput.addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        addComment()
}});
commentButton.addEventListener("click", addComment);

let result =`<div>
                <span>wecode 다 같이 화이팅~~~!</span>
                <img class="heart-commentIcon" src="image/navIcon/heart.png"/>
            </div>
            <div class="comment-time">42분 전</div>`;

function addComment(){
    result +=  `<div>
                    <span>${commentInput.value}</span>
                    <img class="heart-commentIcon" src="image/navIcon/heart.png"/>
                </div>
                <div class="comment-time">42분 전</div>`
    document.getElementById("comment-next").innerHTML = result;
}