
const $search = document.querySelector('.search');
const $commentInput = document.querySelector('.comment__input--text');
const $commentButton = document.querySelector('.comment__input--button');
const $commentContainer = document.querySelector('.comments');
const $comments = document.querySelector('.comment');
const $feedButtons = document.querySelector('.feed__button');
const $deleteButton = document.querySelector('.comment__delete-button');
const $myButton = document.querySelector('.my');
const $peopleWhoLike = document.querySelector('.people-who-like__comment');

$commentButton.addEventListener('click', addComment);
$commentContainer.addEventListener('click', deleteComment);
$feedButtons.addEventListener('click', handleLike);
$search.addEventListener('keyup', searchId);
document.addEventListener('click', handleMyMenu);

const idArr = [["images/profile-img2.jpg", 'wecode_bootcamp', 'wecode | 위코드'], ["images/profile-img.jpg", 'i_love_coding', '아코딩'], [null, 'sunglass', null], [null, 'sweat_shirt', null], [null, 'newziland4043', null], [null, 'huggy_woggy__33', null]];
const peopleWhoLikeArr = ['ace123', 'bbi3', 'case_44', 'catcat_239', '23dd234'];
const myId = 'canon_mj';

$peopleWhoLike.textContent = `${peopleWhoLikeArr[0]}님 외 ${peopleWhoLikeArr.length - 1}명이 좋아합니다.`


function addComment(e) {
    e.preventDefault();
    const commentVal = $commentInput.value;
    const newCommentEl = document.createElement('ul');
    newCommentEl.classList.add('comment');
    newCommentEl.innerHTML = `
        <span class="comment_item">
            <span class="comment__id">${myId}</span>
            <span class="comment__text">${commentVal}</span>
        </span>
        <button class="comment__delete-button">
            <i class="fas fa-times"></i>
        </button>
    `
    $commentContainer.appendChild(newCommentEl);
    $commentInput.value = '';
}

function deleteComment(e) {
    const target = e.target;
    if(target.className !== 'fas fa-times') return;
    const commentItem = target.parentNode.parentNode;
    $commentContainer.removeChild(commentItem);
}

function handleLike(e) {
    const target = e.target;

    if(!target.className.includes('fa-heart')) {
        return;
    } else {
        target.classList.toggle('far');
        target.classList.toggle('fas');
        target.classList.toggle('liked');
    }
    if(target.classList.contains('liked')) {
        peopleWhoLikeArr.push(myId);
    } else {
        peopleWhoLikeArr.pop();
    }
    $peopleWhoLike.textContent = `${peopleWhoLikeArr[0]}님 외 ${peopleWhoLikeArr.length - 1}명이 좋아합니다.`
}

const $searchResultContainer = document.querySelector('.search__result--container');

function searchId(e) {
    const target = e.target;
    if(target.value.length > 0) {
        $searchResultContainer.classList.remove('hide');
    } else {
        $searchResultContainer.classList.add('hide');
    }
    const filteredId = idArr.filter((id) => {
        return id[1].includes(target.value);
    })
    const defaultImgUrl = 'images/default_profile-img.png';
    const html = filteredId.map((id) => {
        return `
            <ul class="search__result--item">
                <img src="${id[0] ?? defaultImgUrl}" alt="" class="search__result--img">
                <span class="search__result--text">
                    <p class="search__result--title">${id[1]}</p>
                    <p class="search__result--subtitle">${id[2]}</p>
                </span>
            </ul>

        `
    }).join('');
    $searchResultContainer.innerHTML = html;
}


function handleMyMenu(e) {
    const target = e.target;
    if(target.id === 'my__img') {
        $myButton.classList.toggle('hide');
    } else {
        $myButton.classList.add('hide');
    }
}

