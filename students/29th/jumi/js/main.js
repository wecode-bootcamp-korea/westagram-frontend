const commentPost = document.querySelector('.commentPost');
const postText = document.querySelector('.postText');
const addText = document.querySelector('.feedCommentSecond');
const addList = document.querySelector('.feedCommentList');

function onAdd(){
    const value = commentPost.value;

    if(value){
        const li = document.createElement('div');
        
        li.setAttribute('class','feedCommentSecond');
        li.setAttribute('class','bold');
        li.setAttribute('class','fa-heart');
        li.innerHTML = value;
        commentPost.focus();
        commentPost.value="";
    }

}

postText.addEventListener('click', () =>{
    onAdd()
});