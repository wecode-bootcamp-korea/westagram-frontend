'use strict';

const mainBox = document.getElementsByTagName('main')[0];
const navBox = document.getElementsByClassName('nav-box')[0];
const storyRecommand = document.getElementById('story-recommand');
navBox.style.width = String(mainBox.offsetWidth+storyRecommand.offsetWidth)+"px";
const commentsInput = document.getElementById('comments-area');

mainBox.style.transform = 'translateX(-'+(mainBox.offsetWidth+storyRecommand.offsetWidth)/2+'px)';
storyRecommand.style.transform = 'translateX('+(mainBox.offsetWidth-storyRecommand.offsetWidth)/2+'px)';

const mainNavigation = document.getElementById('main-navigation');
mainNavigation.style.height = String(navBox.offsetHeight)+"px";


function resize(obj) {
    obj.style.height = "18px";
    obj.style.height = obj.scrollHeight+"px";
}

const commentsSubmit = document.getElementById('comments-submit');

function submitOnEnter(event){
    if(event.which === 13){
        event.target.form.dispatchEvent(new Event("submit", {cancelable: true}));
        event.preventDefault(); // Prevents the addition of a new line in the text field (not needed in a lot of cases)
    }
}
commentsInput.addEventListener('keypress', submitOnEnter);

const keysPressed = {};
commentsInput.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
    if (keysPressed['Shift'] && keysPressed['Enter']) {
        commentsInput.value += '\n';
    }
});
commentsInput.addEventListener('keyup',(event) => {
    delete keysPressed[event.key];
})


function activatecommentSubmit(e) {
    if ((commentsInput.value.length + 1 > 0 && e.code !== 'Enter') || commentsInput.offsetHeight > 18) {
        commentsSubmit.style.color = "#0095F6";
        commentsSubmit.style.cursor = "pointer";
        commentsSubmit.removeAttribute('disabled');
    } else {
        commentsSubmit.style.color = "#b3dffc"
        commentsSubmit.style.cursor = "default";
        commentsSubmit.setAttribute('disabled', true);
    }
    if (commentsInput.value.length === 0) {
        commentsSubmit.style.color = "#b3dffc"
        commentsSubmit.style.cursor = "default";
        commentsSubmit.setAttribute('disabled', true);
    }
}
commentsInput.addEventListener('keypress', activatecommentSubmit);
commentsInput.addEventListener('keyup', activatecommentSubmit);


const commentsForm = document.getElementById('comments-form');
const reply = document.getElementsByClassName('reply')[0];

const commentBox = document.createElement("div");
commentBox.setAttribute('class', 'comment-box');
reply.after(commentBox);

function handleForm(event) {
    event.preventDefault();
    const comment = commentsInput.value;
    commentsForm.reset();
    commentsSubmit.style.color = "#b3dffc"
    commentsSubmit.style.cursor = "default";
    commentsSubmit.setAttribute('disabled', true)
    const commentText = document.createElement("div");
    commentText.setAttribute('class', 'comment-text')
    commentBox.appendChild(commentText);
    commentText.innerHTML = '<div class="id_comment"><div class="bold">wecode_bootcomp</div><div class="comment">'+comment+'</div></div><button class="commentHeart"><i class="far fa-heart"></i></button>';
}
commentsForm.addEventListener('submit', handleForm);