const commentInput = document.querySelector('.input-comment');
const submit = document.getElementsByClassName('submit-comment')[0];
const commentList = document.getElementsByClassName('comments')[0];
const heartIcon = document.getElementsByClassName('comment-heart')[0];
var count = 0;
commentInput.addEventListener('keyup',function(e){
    if(commentInput.value){
        if(e.which === 13){
            var newComment = document.createElement('li');
            newComment.setAttribute('id',`id${count}`);
            count++;
            newComment.innerHTML = '<span><span class="point-span userID">_hyyyyyk</span>'+ commentInput.value + '</span><span><img class="comment-heart" src=" image/firstHeart.png" alt="하트"'+ '      ' +'<button class="deleteButton" type="submit">삭제</button></span>'
            commentList.appendChild(newComment);
            commentInput.value = '';
        }
    }
});

submit.addEventListener('click',function(){
    if(commentInput.value){
        var newComment = document.createElement('li');
        newComment.setAttribute('id',`id${count}`);
        count++;
        newComment.innerHTML = '<span><span class="point-span userID">_hyyyyyk</span>'+ commentInput.value + '</span><img class="comment-heart" src="image/firstHeart.png" alt="하트">'
        commentList.appendChild(newComment);
        commentInput.value = '';
    }
});

commentInput.addEventListener('keydown',function(){
    if(commentInput.value){
        submit.disabled = false;
    }
    else 
        submit.disabled = true;
});
heartIcon.addEventListener('click',function(){
    if(count === 0){
    heartIcon.src ='image/heart.png';
    count++;
    }
    else if(count === 1){    
    heartIcon.src = 'image/firstHeart.png';
    count--;
    }
});
const deleteButton = document.getElementsByClassName('deleteButton')[0];
deleteButton.addEventListener('click',function(){
    const idName = document.getElementById(`id${count}`);
    idName.remove();
    console.log('작동')
});

















// commentInput.addEventListener('keypress',function(e){
//     if(commentInput.value){
//         if(e.which === 13){
//             var newComment = document.createElement('li');
//             newComment.innerHTML = `<span><span class="userID point-span">_hyyyyyk</span>${commentInput.value}</span><img class="comment-heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="하트">`
//             commentList.appendChild(newComment);
//             this.value = "";
//         }
//     }
// });

// submit.addEventListener('click',function(){
//     if(commentInput.value){
//         var newComment = document.createElement('li');
//             newComment.innerHTML = `<span><span class="userID point-span">_hyyyyyk</span>${commentInput.value}</span><img class="comment-heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="하트">`;
//             commentList.appendChild(newComment);
//             commentInput.value = "";
//     }
// });

// commentInput.addEventListener('keyup',function(){
//     if (commentInput.value) {
//         submit.disabled = false;
//     }
//     else {
//         submit.disabled = true;
//     }
// });

// heartIcon.addEventListener('click',function(){
//     heartIcon
// });