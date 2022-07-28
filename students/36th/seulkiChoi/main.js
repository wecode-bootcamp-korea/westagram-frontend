'use strict'

const inputComments = document.querySelector('.input_comments');
const postMark = document.querySelector('.post');
const commentsLog = document.querySelector('.overflow');



inputComments.addEventListener('keyup', () => {
    let inputtedComments = inputComments.value;
    if(inputtedComments.length > 0){
        postMark.style.color = "#0095F6";
    }
    else {
        postMark.style.color = "#C4E1FB";
    }
})


postMark.addEventListener('click', (e) => {
    e.preventDefault();
    const commentsID = document.createElement('button');
    const commentsContent = document.createElement('span');
    const image = document.createElement('img');
    const commentsDiv = document.createElement('div');

    commentsLog.appendChild(commentsDiv);
    commentsDiv.append(commentsID, commentsContent,image);

    commentsDiv.classList.add('abc');
    image.classList.add("btn_js");
    commentsContent.classList.add("comment_js");

    image.setAttribute("src","image/heart_no_colour.png");

    commentsID.innerHTML = "<strong>surfing_bootcamp</strong>";
    commentsContent.innerHTML = `&nbsp;${inputComments.value}`;
    inputComments.value="";
})