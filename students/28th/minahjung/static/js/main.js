"use strict"

// submenu start
const profileBtn = document.getElementById('profile_menu');
const submenu = document.querySelector('.account_menu');
const overlay = document.getElementsByClassName('overlay')[0];

function toggleProfileSubmenu() {
    if (submenu.style.display == 'block') {
        submenu.style.display = 'none';
        overlay.style.display = 'none';
        submenu.style.transition = 'transform 0.3s ease-in-out';
    } else {
        submenu.style.display = 'block';
        overlay.style.display = 'block';
        submenu.style.transition = 'transform 0.3s ease-in-out';
    }
}

profileBtn.addEventListener('click', toggleProfileSubmenu);
overlay.addEventListener('click', function () {
    submenu.style.display = 'none';
    this.style.display = 'none';
})
// submenu end

// story start
const forwardBtn = document.getElementsByClassName('story_prev')[0];
const backwardBtn = document.getElementsByClassName('story_next')[0];
const storyBox = document.getElementsByClassName('story')[0];
const maxStoryNum = document.querySelectorAll('.story_list').length;
const storyWidth = document.querySelectorAll('.story_list')[0].clientWidth;
const storyBoxWidth = storyBox.clientWidth;
const moveDistance = ((maxStoryNum * storyWidth) - storyBoxWidth);

forwardBtn.style.display = 'none';

function slideNextStoryPhoto() {
    storyBox.style.transform = `translateX(-${moveDistance + 20}px)`;
    storyBox.style.transition = 'transform 0.3s ease-in-out';
    forwardBtn.style.display = 'block';
    backwardBtn.style.display = 'none';
}

function slidePrevStoryPhoto() {
    storyBox.style.transform = `translateX(${0}px)`;
    storyBox.style.transition = 'transform 0.3s ease-in-out';
    forwardBtn.style.display = 'none';
    backwardBtn.style.display = 'block';
}

backwardBtn.addEventListener('click', slideNextStoryPhoto);
forwardBtn.addEventListener('click', slidePrevStoryPhoto);
// story end

// post start
const prevBtn = document.getElementsByClassName('post_prev')[0];
const nextBtn = document.getElementsByClassName('post_next')[0];
const container = document.getElementsByClassName('post_photo_container')[0];
const maxPhotoNum = document.querySelectorAll('.post_photos').length;
const distance = container.clientWidth;

// show post photo
if (maxPhotoNum === 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
}

let index = 0;
prevBtn.style.display = 'none';

function showNextPhoto() {
    if (index === maxPhotoNum - 1) return;
    index += 1;
    container.style.transform = `translateX(${-distance * index}px)`;
    container.style.transition = 'transform 0.3s ease-in-out';
    if (index > 0) prevBtn.style.display = 'block';
    if (index === maxPhotoNum - 1) nextBtn.style.display = 'none';
};

function showPrevPhoto() {
    if (index === 0) return;
    index -= 1;
    container.style.transform = `translateX(${distance * index}px)`;
    container.style.transition = 'transform 0.3s ease-in-out';
    if (index === 0) prevBtn.style.display = 'none';
    if (maxPhotoNum > 1) nextBtn.style.display = 'block';
};

nextBtn.addEventListener('click', showNextPhoto);
prevBtn.addEventListener('click', showPrevPhoto);
// post end

// reply start
// activate write reply button
const replyContent = document.querySelector('textarea');
const writeBtn = document.querySelector('.submit_reply');
const replyBox = document.querySelector('.reply_wrap');

function activateReplyButton() {
    if (replyContent.value.length > 0) {
        writeBtn.removeAttribute('disabled');
        writeBtn.style.color = 'rgba(0, 149, 246, 1)';

    } else {
        writeBtn.setAttribute('disabled', '');
        writeBtn.style.color = 'rgba(0, 149, 246, 0.3)';
    }
};
replyContent.addEventListener('keyup', activateReplyButton);
writeBtn.addEventListener('click', function () {
    this.setAttribute('disabled', '');
    this.style.color = 'rgba(0, 149, 246, 0.3)';
});

// write reply
function writeReply(content) {
    const newCommentList = document.createElement("li");
    const newComment = `<a href="https://www.instagram.com/mina_0120/">my1nsta</a>
            <span>${content}</span>
            <button type="button" class="like_reply">
                <img src="./static/img/heart-blank.png" class="heart_blank">
                <img src="./static/img/heart-red.png" class="heart_red">
            </button>
            <button type="button" class="delete_reply">
                <i class="fas fa-times"></i>
            </button>`;
    newCommentList.innerHTML = newComment;
    replyBox.appendChild(newCommentList);
    deleteThisReply(newCommentList);
    likeThisReply(newCommentList);

    replyContent.value = '';
};

writeBtn.addEventListener('click', () => writeReply(replyContent.value));

// press enter key to write reply
function writeReplyByEnterKey(e, content) {
    if (e.key === 'Enter') {
        if (!(e.shiftKey)) {
            e.preventDefault();
            writeReply(replyContent.value.replaceAll('\t', '<br />'));
        }
        if (e.shiftKey) {
            replyContent.value = `${replyContent.value + '\t'}`;
        }
    }
}

replyContent.addEventListener('keypress', (e) => writeReplyByEnterKey(e, this.value));

// delete reply
function deleteComment(newCommentList) {
    newCommentList.remove();
}

function deleteThisReply(newCommentList) {
    const deleteBtn = document.querySelector('.delete_reply');
    deleteBtn.addEventListener('click', () => deleteComment(newCommentList));
}

// like reply
function likeThisReply(newCommentList) {
    const likeBtn = document.querySelector('.like_reply');
    likeBtn.addEventListener('click', () => toggleLikeReply(newCommentList));
}

function toggleLikeReply(newCommentList) {
    const unlike = document.querySelector('.heart_blank');
    const liked = document.querySelector('.heart_red');
    if (liked.style.display == "block") {
        unlike.style.display = "block";
        liked.style.display = "none";
    } else {
        unlike.style.display = "none";
        liked.style.display = "block";
    }
}

// resize reply textarea
const resizeTextareaHeight = function (textarea) {
    this.textarea = textarea;
    this.autoHeight = function () {
        var element_ = document.querySelector(`${this.textarea}`);
        element_.onkeydown = function (e) {
            height(e);
        }
        element_.onkeyup = function (e) {
            height(e);
        }
        function height(e) {
            element_.style.height = '1px';
            element_.style.height = `${e.currentTarget.scrollHeight}px`;
        }
    }
};

const textarea_reply = new resizeTextareaHeight('.write_reply');
textarea_reply.autoHeight();
// reply end