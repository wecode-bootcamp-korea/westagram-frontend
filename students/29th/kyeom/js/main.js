// 검색창 활성화했을 때 검색 아이콘 숨기기
function hideSearchIcon () {
    const searchInput = document.querySelector('input.search');
    const searchIcon = document.querySelector('i.fa-search');
    searchInput.addEventListener('focus', function () {
        searchIcon.classList.add('hidden');
    });
    searchInput.addEventListener('blur', function () {
        searchIcon.classList.remove('hidden');
    });
}
hideSearchIcon();


// 좋아요 누르기
function like() {
    const likeBtn = document.querySelector('.fa-heart');
    likeBtn.addEventListener('click', function (event) {
        event.target.classList.toggle('fas');
        event.target.classList.toggle('far');
    });
}
like();


// 댓글 폼
const comment = document.querySelector('input.comment');
const submit = document.querySelector('button.submit');
const form = document.querySelector('form.comment');
const id = sessionStorage.getItem('id');

// 댓글 게시 버튼 활성화/비활성화
submit.disabled = true;
comment.addEventListener('input', function () {
    !comment.value ?
    submit.disabled = true : submit.disabled = false;
});

// 댓글 게시
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


// main-right left 맞추기
window.addEventListener('load', adjustMainRight);
window.addEventListener('resize', adjustMainRight);
function adjustMainRight () {
    const feedRight = document.querySelector('.feed-container').getBoundingClientRect().right;
    const mainRight = document.querySelector('.main-right');
    mainRight.style.left = `${feedRight + 28}px`;
}


// main-right 프로필에 id 나타내기
function showUserId() {
    const profileId = document.querySelector('.id');
    profileId.innerHTML = id;
}
showUserId();