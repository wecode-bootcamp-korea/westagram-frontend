// story
const forwardBtn = document.getElementsByClassName('story_prev')[0];
const backwardBtn = document.getElementsByClassName('story_next')[0];
const storyBox = document.querySelector('ul');
const maxStoryNum = document.querySelectorAll('li').length;
const storyWidth = document.querySelectorAll('li')[0].clientWidth;
const storyBoxWidth = storyBox.clientWidth;
const moveDistance = ((maxStoryNum * storyWidth) - storyBoxWidth);

(function () {
    forwardBtn.style.display = 'none';

    function slideNextStoryPhoto() {
        storyBox.style.transform = `translateX(-${moveDistance + 20}px)`;
        storyBox.style.transition = 'transform 0.3s ease-in-out';
        forwardBtn.style.display = 'block';
    }

    function slidePrevStoryPhoto() {
        storyBox.style.transform = `translateX(${0}px)`;
        storyBox.style.transition = 'transform 0.3s ease-in-out';
        forwardBtn.style.display = 'none';
    }

    backwardBtn.addEventListener('click', slideNextStoryPhoto);
    forwardBtn.addEventListener('click', slidePrevStoryPhoto);
})();

// post
const prevBtn = document.getElementsByClassName('post_prev')[0];
const nextBtn = document.getElementsByClassName('post_next')[0];
const container = document.getElementsByClassName('post_photo_container')[0];
const maxPhotoNum = document.querySelectorAll('.post_photos').length;
const distance = container.clientWidth;

(function () {
    if (maxPhotoNum === 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }

    let index = 0;
    prevBtn.style.display = 'none';

    function slideToNextPhoto() {
        if (index === maxPhotoNum - 1) return;
        index += 1;
        container.style.transform = `translateX(${-distance * index}px)`;
        container.style.transition = 'transform 0.3s ease-in-out';
        if (index > 0) prevBtn.style.display = 'block';
        if (index === maxPhotoNum - 1) nextBtn.style.display = 'none';
    };

    function slideToPrevPhoto() {
        if (index === 0) return;
        index -= 1;
        container.style.transform = `translateX(${distance * index}px)`;
        container.style.transition = 'transform 0.3s ease-in-out';
        if (index === 0) prevBtn.style.display = 'none';
        if (maxPhotoNum > 1) nextBtn.style.display = 'block';
    };

    nextBtn.addEventListener('click', slideToNextPhoto);
    prevBtn.addEventListener('click', slideToPrevPhoto);
})();