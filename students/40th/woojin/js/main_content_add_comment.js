const commentTextElement = document.getElementById('addCommentText');


const addCommentBtnElement = document.getElementById('addComment');

const commentListElement = document.getElementById('commentList');

const nameOfAuthorElement = document.getElementsByClassName('nameOfAuthor')[0];

const nameOfAuthorText = nameOfAuthorElement.textContent;

console.log(nameOfAuthorText)

// click event of button
addCommentBtnElement.addEventListener('click', function(e) {
    createTagAndInputText();
})

// keydown event of enter
commentTextElement.addEventListener('keydown', function(e) {
    if(e.keyCode === 13) {
        createTagAndInputText();
    }
})

// create 'li' tag and insert text to input field
function createTagAndInputText() {
    let commentText = commentTextElement.value;
    let newCommentList = document.createElement('li');

    let createAuthorInComment = document.createElement('span');
    createAuthorInComment.innerText = nameOfAuthorText;

    createAuthorInComment.style.fontWeight = '600';
    createAuthorInComment.style.fontSize = '14px'
    createAuthorInComment.style.marginRight = '5px'
    
    let createTextInListTag = document.createElement('span');
    createTextInListTag.innerText = commentText;
   
    commentListElement.appendChild(newCommentList);

    newCommentList.appendChild(createAuthorInComment);
    newCommentList.appendChild(createTextInListTag)

    newCommentList.value = commentText;

    // delete comment input field
    commentTextElement.value ='';
}


// create a new section for 'li'
function createNewSectionForList() {
    let newSection = document.createElement('div');

}



