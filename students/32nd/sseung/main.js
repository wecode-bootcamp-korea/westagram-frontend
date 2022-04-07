const get = (ele) => document.querySelector(ele);
const getAll = (ele) => document.querySelectorAll(ele);

const $feeds = getAll('.feed');
const $searchBar = get('.search_input')
const $userSearchBox = get('.userSearch_wrap')
const $searchInput = get('.search_input')




function createSearchUser() {
    const createElement = document.createElement('article')
    createElement.classList.add('myInfo')
    createElement.innerHTML = `<div class="user_profile">
    <div class="user_img"><img src="./img/profile.jpeg" class="profile_img" alt="프로필이미지" /></div>
    <div><p class="user_id">${user.id}</p><span class="user_name">${user.info}</span></div>
    </div>
    <i class="fa-solid fa-xmark fa-xl remove"></i>`
    return createElement
}

function userSearching(inputValue, userData) {
    userData.filter((user) => {
        if((user.id.includes(inputValue) || user.info.includes(inputValue))) {
            
            const createElement = document.createElement('article')
            createElement.classList.add('myInfo')
            createElement.innerHTML = `<div class="user_profile">
            <div class="user_img"><img src="./img/profile.jpeg" class="profile_img" alt="프로필이미지" /></div>
            <div><p class="user_id">${user.id}</p><span class="user_name">${user.info}</span></div>
            </div>`
            
            get('.searched_user').appendChild(createElement)
        }
    })
}

function RemoveLatelyUser() {
    const $latelyUserRemoveBtn = getAll('.searched_user .remove')
    for(let i = 0; i < $latelyUserRemoveBtn.length; i++ ) {
        $latelyUserRemoveBtn[i].addEventListener('click', (e) => {
            console.log($searchBar)
            $searchBar.focus()
            e.target.closest('.myInfo').remove()
        })
    }

}

function searchValueIsEmpty() {
    const latelySearchData = [
        {id: 'banana', info:'붜내너는 노랭이'},
        {id: 'apple', info:'유사과'},
        {id: 'kitkat', info:'킷캣맛있지롱'},
        {id: 'CherryBlossom', info:'보고싶다'},
        {id: 'gangnam', info:'강남이다'},
    ]
    
    latelySearchData.filter((user) => {
        const createElement = document.createElement('article')
        createElement.classList.add('myInfo')
        createElement.innerHTML = `<div class="user_profile">
        <div class="user_img"><img src="./img/profile.jpeg" class="profile_img" alt="프로필이미지" /></div>
        <div><p class="user_id">${user.id}</p><span class="user_name">${user.info}</span></div>
        </div>
        <i class="fa-solid fa-xmark fa-xl remove"></i>`
        
        get('.searched_user').appendChild(createElement)
    })

    RemoveLatelyUser()
}

function inputKeyupEvent() {
    let inputValue = ''
    const userData = [
        {id: 'wecode', info:'위코드에 오신것을 환영합니다'},
        {id: 'object', info:'객체라고 하나'},
        {id: 'browser', info:'공부공부'},
        {id: 'where', info:'선릉에있지'},
        {id: 'gangnam', info:'강남이다'},
        {id: 'banana', info:'붜내너는 노랭이'},
        {id: 'apple', info:'유사과'},
        {id: 'kitkat', info:'킷캣맛있지롱'},
        {id: 'CherryBlossom', info:'보고싶다'},
    ]
    
    $searchInput.addEventListener('keyup', (e) => {
        get('.searched_user').innerHTML = ''
        inputValue = e.target.value
        
        if(!inputValue) {
            searchValueIsEmpty()
        } else {
            userSearching(inputValue, userData)
        }
    
    
    })

}

$searchBar.addEventListener('focus', () => {
    $userSearchBox.classList.toggle('hidden')
    inputKeyupEvent()
})


const $descriptionAll_origin = Array.from(getAll('.description'), (x) => x.innerText);
const $descriptionAll_short = $descriptionAll_origin.map((x) => {
    let text = '';
    x.includes('\n') ? text = `${x.slice(0, x.indexOf('\n'))}...` : text = x;
    return text
});

function changeDescriptionShort() {
    for(let i = 0; i<$descriptionAll_short.length; i++){
        getAll('.description')[i].innerText = $descriptionAll_short[i]
    }
}

changeDescriptionShort()


function addBullet(index) {
    const feedImg = getAll(`.feed[data-id='${index}'] .content_slide li`);
    for(let i = 0; i < feedImg.length; i++) {
        const setbullet = document.createElement('li')
        get(`.feed[data-id='${index}'] .bullet`).appendChild(setbullet)
    }
    get(`.feed[data-id='${index}'] .bullet li:first-child`).classList.toggle('nowImg')
}


let $imgCount = 0;

function slideImg(index, imgCount) {
    const $imgLength = getAll(`.feed[data-id='${index}'] .content_wrap li`).length;
    const $imgWidth = get(`.feed[data-id='${index}'] .content_wrap li`).clientWidth;
    const $imgCover = get(`.feed[data-id='${index}'] .content_wrap ul`);
    $imgCover.style.left = `${$imgWidth * -imgCount}px`


    const nowFeedbullets = getAll(`.feed[data-id='${index}'] .bullet li`);
    
    for(let i = 0; i < nowFeedbullets.length; i++) {
        if(i !== imgCount) {
            nowFeedbullets[i].classList.remove('nowImg')
        } else {
            nowFeedbullets[i].classList.add('nowImg')
        }
    }


    if(0 === $imgCount) {
        get(`.feed[data-id='${index}'] .arrow.prev`).classList.add('hidden')
    } else if ($imgCount === $imgLength-1) {
        get(`.feed[data-id='${index}'] .arrow.next`).classList.add('hidden')
    } else {
        get(`.feed[data-id='${index}'] .arrow.prev`).classList.remove('hidden')
        get(`.feed[data-id='${index}'] .arrow.next`).classList.remove('hidden')
    }
    
}

function prevImg(index) {
    $imgCount--
    slideImg(index, $imgCount)
}

function nextImg(index) {
    $imgCount++
    slideImg(index, $imgCount)
}


function descriptionMoreBtn(e) {
    const feedDataId = e.target.closest('.feed');
    const $this_description = e.target.previousElementSibling;
    const num = feedDataId.dataset.id
    $this_description.innerText = $descriptionAll_origin[num]
    e.target.style.display = "none"
}

function enableCommentBtn(e, index) {
    const nowFeedCommentPost = get(`.feed[data-id='${index}'] .comment_post`)
    const $nowCommentInput = get(`.feed[data-id='${index}'] .comment_input`)
    
    if(e.target.value) {
        if(!$nowCommentInput.value.trim('')) {
            return
        }
        nowFeedCommentPost.disabled = false;
        nowFeedCommentPost.style.cursor = "pointer"
    } else {
        nowFeedCommentPost.disabled = true;
        nowFeedCommentPost.style.cursor = "auto"
    }
    
}


function addComment(e, index) {
    e.preventDefault()
    const $commentVoid = get(`.feed[data-id='${index}'] .comments_void`)
    const $nowCommentInput = get(`.feed[data-id='${index}'] .comment_input`)
    
    
    if(!$nowCommentInput.value.trim('')) {
        return
    }
    
    const $commentElement = document.createElement('li')
    $commentElement.classList.add('comment')
    $commentElement.innerHTML = `<div><span class="comment_id">mschoise</span><span class="commment_text">${$nowCommentInput.value}</span></div><div><i class="fa-solid fa-trash-can remove"></i><label><i class="fa-regular fa-heart like"></i><input type="checkbox"></label></div></i>`
    $commentVoid.appendChild($commentElement)
    
    $nowCommentInput.value = '';
    
    commentLikeClick()
    commentRemoveClick()
}

function commentLikeClick() {
    $allComment = getAll('.comment');
    const $commentLikeImg = getAll('.comment .like');

    for(let i = 0; i < $allComment.length; i++) {
        $commentLikeImg[i].addEventListener('click',(e) => {
            if(!e.target.nextSibling.checked) {
                e.target.className = 'fa-solid fa-heart like'
            } else {
                e.target.className = 'fa-regular fa-heart like'
            }
        })
    }
}

function commentRemoveClick() {
    const $commentRemove = getAll('.comment .remove');
    for(let i = 0; i < $commentRemove.length; i++) {
        $commentRemove[i].addEventListener('click', (e) => {
            e.target.closest('.comment').remove()
        })
    }
}





const $descriptionMoreBtn = getAll('.more_des');
const $commentForm = getAll('.comment_wrap');
const $commentInput = getAll('.comment_input');

for(let i = 0; i < $feeds.length; i++) {
    addBullet(i)
    
    const $arrowPrev = get(`.feed[data-id='${i}'] .arrow.prev`);
    const $arrowNext = get(`.feed[data-id='${i}'] .arrow.next`);
    $arrowPrev.addEventListener('click', () => {prevImg(i)})
    $arrowNext.addEventListener('click', () => {nextImg(i)})

    $descriptionMoreBtn[i].addEventListener('click', descriptionMoreBtn)

    $commentInput[i].addEventListener('keyup', (e) => {enableCommentBtn(e, i)})

    $commentForm[i].addEventListener('submit', (e) => {addComment(e, i)})
}


searchValueIsEmpty()
commentLikeClick()
commentRemoveClick()