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