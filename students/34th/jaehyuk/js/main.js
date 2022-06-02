const commentInput = document.querySelector('.input-comment');
const submit = document.getElementsByClassName('submit-comment')[0];
const commentList = document.getElementsByClassName('comments')[0];
const heartIcon = document.getElementsByClassName('comment-heart')[0];
var count = 0;
commentInput.addEventListener('keyup',function(e){
    // console.log(e);
    if(commentInput.value){
        if(e.which === 13){
            var newComment = document.createElement('li');
            newComment.innerHTML = '<span><span class="point-span userID">_hyyyyyk</span>'+ commentInput.value + '</span>'
            //heart 생성
            
            var heart = document.createElement('img');
            heart.src = 'image/firstHeart.png';
            heart.className = 'comment-heart';
            heart.addEventListener('click',function(){
                if(count === 0){
                heart.src ='image/heart.png';
                count++;
                }
                else if(count === 1){    
                heart.src = 'image/firstHeart.png';
                count--;
                }
            });

            //delete_button 생성
            var deleteButton = document.createElement('button');
            newComment.appendChild(heart);
            newComment.appendChild(deleteButton);
        
            deleteButton.addEventListener('click',function(){
                newComment.remove();
            });


            commentList.appendChild(newComment);
            commentInput.value = '';
        }
    }
});

submit.addEventListener('click',function(){
    if(commentInput.value){
        var newComment = document.createElement('li');
        newComment.innerHTML = '<span><span class="point-span userID">_hyyyyyk</span>'+ commentInput.value + '</span>'
        //heart 생성
        
        var heart = document.createElement('img');
        heart.src = 'image/firstHeart.png';
        heart.className = 'comment-heart';
        heart.addEventListener('click',function(){
            if(count === 0){
            heart.src ='image/heart.png';
            count++;
            }
            else if(count === 1){    
            heart.src = 'image/firstHeart.png';
            count--;
            }
        });

        //delete_button 생성
        var deleteButton = document.createElement('button');
        newComment.appendChild(heart);
        newComment.appendChild(deleteButton);
    
        deleteButton.addEventListener('click',function(){
            newComment.remove();
        });


        commentList.appendChild(newComment);
        console.log(newComment.value);
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
// const deleteButton = document.getElementsByClassName('deleteButton')[0];
// deleteButton.addEventListener('click',function(){
//     const idName = document.getElementById(`id${count}`);
//     idName.remove();
//     console.log('작동')
// });
var likeNumber = document.getElementById('like_number');
const mainHeart = document.getElementById('mainHeart');
likeNumber.innerHTML = Number(2122944);
mainHeart.addEventListener('click',function(){
    if(count === 0){
    mainHeart.src ='image/heart.png';
    likeNumber.innerHTML++;
    count++;
    }
    else if(count === 1){    
    mainHeart.src = 'image/firstHeart.png';
    likeNumber.innerHTML--;
    count--;
    }
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