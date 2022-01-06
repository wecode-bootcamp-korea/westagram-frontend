hideSearchIcon();
function hideSearchIcon() {
    const searchInput = document.querySelector('input.search');
    const searchIcon = document.querySelector('i.fa-search');
    searchInput.addEventListener('focus', function () {
        searchIcon.classList.add('hidden');
    });
    searchInput.addEventListener('blur', function () {
        searchIcon.classList.remove('hidden');
    });
}


like();
function like() {
    const likeBtn = document.querySelector('.fa-heart');
    likeBtn.addEventListener('click', function (event) {
        event.target.classList.toggle('fas');
        event.target.classList.toggle('far');
    });
}


addComment();
function addComment() {
    const comment = document.querySelector('input.comment');
    const submit = document.querySelector('button.submit');
    const form = document.querySelector('form.comment');
    const id = sessionStorage.getItem('id');

    submit.disabled = true;
    comment.addEventListener('input', function () {
        !comment.value ?
        submit.disabled = true : submit.disabled = false;
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const commentSection = document.querySelector('section.uploaded-comment');
        const commentWrapper = document.createElement('div');
        const idElement = document.createElement('span');
        const commentElement = document.createElement('span');

        idElement.innerHTML = id;
        commentElement.innerHTML = comment.value;
        comment.value = '';
        submit.disabled = true;

        commentWrapper.classList.add('uploaded-comment');
        idElement.classList.add('name');
        commentElement.classList.add('uploaded-comment');

        commentWrapper.appendChild(idElement);
        commentWrapper.appendChild(commentElement);
        commentSection.appendChild(commentWrapper);
    });
}


showUserId();
function showUserId() {
    const id = sessionStorage.getItem('id');
    const profileId = document.querySelector('.id');
    profileId.innerHTML = id;
}


putMainRightOnRight();
function putMainRightOnRight() {
    window.addEventListener('load', adjustMainRight);
    window.addEventListener('resize', adjustMainRight);
    function adjustMainRight () {
        const feedRight = document.querySelector('.feed-container').getBoundingClientRect().right;
        const mainRight = document.querySelector('.main-right');
        mainRight.style.left = `${feedRight + 28}px`;
    }
}