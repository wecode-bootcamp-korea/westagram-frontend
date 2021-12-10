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
const writeBtn = document.getElementsByClassName('submit_reply')[0];
const replyBox = document.getElementsByClassName('post_reply')[0];

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
(function () {
    function writeReply(content) {
        replyBox.innerHTML += '<div class="reply_wrap"><a href="https://www.instagram.com/mina_0120/">my1nsta</a><p>' + content + '</p></div>';
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

})();

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