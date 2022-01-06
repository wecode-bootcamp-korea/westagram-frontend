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
    const form = document.forms.commentForm;
    const comment = form.elements.comment;
    const submit = form.elements.submit;
    const id = sessionStorage.getItem('id');
    let commentArr = [];
    let idArr = [];

    submit.disabled = true;
    comment.addEventListener('input', function disableSubmitBtn() {
        !comment.value ?
        submit.disabled = true : submit.disabled = false;
    });


    if (localStorage.getItem('comment')) {
        commentArr = JSON.parse(localStorage.getItem('comment'));
        idArr = JSON.parse(localStorage.getItem('storedId'));
        for (let i = 0; i < commentArr.length; i++) {
            createCommentElement(idArr[i], commentArr[i]);
        }
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        createCommentElement(id, comment.value);

        idArr.push(id);
        commentArr.push(comment.value);
        localStorage.setItem('storedId', JSON.stringify(idArr));
        localStorage.setItem('comment', JSON.stringify(commentArr));

        comment.value = '';
        submit.disabled = true;
    });

    function createCommentElement(idContent, commentContent) {
        const commentSection = document.querySelector('section.uploaded-comment');
        const commentWrapper = document.createElement('div');
        const idElement = document.createElement('span');
        const commentElement = document.createElement('span');

        commentWrapper.appendChild(idElement);
        commentWrapper.appendChild(commentElement);
        commentSection.appendChild(commentWrapper);

        commentWrapper.classList.add('uploaded-comment');
        idElement.classList.add('name');
        commentElement.classList.add('uploaded-comment');

        idElement.innerHTML = idContent;
        commentElement.innerHTML = commentContent;
    }
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