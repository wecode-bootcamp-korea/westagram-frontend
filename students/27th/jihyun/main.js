const feedComment = document.querySelector('.feed-comment input');
const $btn = document.querySelector('.post-comment');
const commentList = document.querySelector('.feed-comment-list');




function onBtnClick() {
    event.preventDefault();
    const commentContent = feedComment.value;

    if (commentContent.length >= 1) {
        const myId = "jihyun ";
        const fontBoldClass = 'font-bold';
        const heart1 = "fas";
        const heart2 = "fa-heart";

        let user = myId;


        let li = document.createElement('li');
        let span = document.createElement('span');
        let i = document.createElement('i');


        commentList.append(li);   
        li.append(commentContent);     
        li.append(i);
        i.classList.add(heart1, heart2);
        


        feedComment.value = "";


        span.append(myId);   

        li.prepend(span);     


        span.classList.add(fontBoldClass);    



        $btn.style.color = "#4693a4";
        $btn.style.cursor = "default";
    }
}



function onLikeClick(e) {
    
    if (e.target.classList.contains('fa-heart')) {
        e.target.classList.toggle("red");
        console.log(e.target.classList);
    }
}

commentList.addEventListener('click', onLikeClick);






function onBtnColorChange() {
    const inputValue = feedComment.value;
    let color = "";
    let btnCursor = "";

    if (inputValue.length >= 1) {
        color = "blue";
        btnCursor = "pointer";
    }
    else if (inputValue.length === 0) {
        color = "#4693a4";
        btnCursor = "default";
    }
    $btn.style.color = color;
    $btn.style.cursor = btnCursor;
}








feedComment.addEventListener('keyup', onBtnColorChange);

$btn.addEventListener('click', onBtnClick);

