const writeComment  = document.querySelector(".reply-input");
const uploadButton = document.querySelector(".reply-btn");

uploadButton.disabled=true;

function onButton() {
    let comment = writeComment.value;
    console.log(comment);

    if(comment.length>=1) {
        uploadButton.classList.remove('reply-btn');
        uploadButton.classList.add('btn-change');
        uploadButton.disabled=false;
    }else{
        uploadButton.disabled=true;
        uploadButton.classList.remove('btn-change');
        uploadButton.classList.add('reply-btn');
    }

}



function uploadComment(event) {
    event.preventDefault()
    
    const box = document.querySelector('.comment-box');
    const comments = document.createElement('li');
    const commentText = document.createElement('span');
    //const commentImage = document.createElement('img');
    
    comments.classList.add("comment-list");
    commentText.classList.add('comment-text');
    //commentImage.classList.add('comment-heart');
    //commentImage.setAttribute('src', 'image/heart (1).png');
    

    commentText.innerText = writeComment.value;




    comments.appendChild(commentText);
    //comments.appendChild(commentImage);
    box.appendChild(comments);

    writeComment.value="";
}

uploadButton.addEventListener('click', uploadComment);
writeComment.addEventListener('input', onButton);