const get = (ele) => document.querySelector(ele);
const getAll = (ele) => document.querySelectorAll(ele);

const $feeds = getAll('.feed');

/*
const myData = {
    id: 0,
    userId: 'mschoise',
    userName: '최승이',
    profileImg: './img/mydata/profile_img.jpg',
    feeds: [
        {
            id: 0,
            description: `보송보송 졸귀탱 흰둥이 인형🤍💙 저세상 귀여움이라는 흰둥이 인형ㅠㅠ @@나 이거 사고시포>< <br>
            🛍프로필 '데코픽' 링크에 판매 링크 있어요!`,
            comments: [
                {id:0, user:'mschoise', text:'댓글쓴다', checked: true},
            ],
        }
    ]
}
*/


// 피드내용 엔터에서 말줄임
const $descriptionAll_origin = Array.from(getAll('.description'), (x) => x.innerText);
const $descriptionAll_sum = $descriptionAll_origin.map((x) => {
    let text = '';
    x.includes('\n') ? text = `${x.slice(0, x.indexOf('\n'))}...` : text = x;
    return text
});

function descriptionAll_summery() {
    for(let i = 0; i<$descriptionAll_sum.length; i++){
        getAll('.description')[i].innerText = $descriptionAll_sum[i]
    }
}

descriptionAll_summery()


// 불릿 생성 함수
function addBullet(index) {
    const feedImg = getAll(`.feed[data-id='${index}'] .content_slide li`);
    for(let i = 0; i < feedImg.length; i++) {
        const setbullet = document.createElement('li')
        get(`.feed[data-id='${index}'] .bullet`).appendChild(setbullet)
    }
    get(`.feed[data-id='${index}'] .bullet li:first-child`).classList.toggle('nowImg')
}

// 피드 데이터 필요
let $imgCount = 0;

function moveImg(index, imgCount) {
    const $imgLength = getAll(`.feed[data-id='${index}'] .content_wrap li`).length;
    const $imgWidth = get(`.feed[data-id='${index}'] .content_wrap li`).clientWidth;
    const $imgCover = get(`.feed[data-id='${index}'] .content_wrap ul`);
    $imgCover.style.left = `${$imgWidth * -imgCount}px`

    console.log(`imgCount: ${imgCount}, imgLength: ${$imgLength}`)

    // 불릿 교체
    const nowFeedbullets = getAll(`.feed[data-id='${index}'] .bullet li`);
    
    for(let i = 0; i < nowFeedbullets.length; i++) {
        if(i !== imgCount) {
            nowFeedbullets[i].classList.remove('nowImg')
        } else {
            nowFeedbullets[i].classList.add('nowImg')
        }
    }

    // 좌우 화살표 표시
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
    moveImg(index, $imgCount)
}

function nextImg(index) {
    $imgCount++
    moveImg(index, $imgCount)
}


// 더보기 클릭 함수
function moreClick(e) {
    const feedDataId = e.target.closest('.feed');
    const $this_description = e.target.previousElementSibling;
    const num = feedDataId.dataset.id
    $this_description.innerText = $descriptionAll_origin[num]
    e.target.style.display = "none"
}

// 게시 버튼 함수
function postDisabled(e, index) {
    const nowFeedCommentPost = get(`.feed[data-id='${index}'] .comment_post`)
    const $nowCommentInput = get(`.feed[data-id='${index}'] .comment_input`)
    
    if(e.target.value) {
        if(!$nowCommentInput.value.trim('')) {
            // 빈 칸 입력시 disabled상태 유지
            returnㄴ
        }
        nowFeedCommentPost.disabled = false;
        nowFeedCommentPost.style.cursor = "pointer"
    } else {
        nowFeedCommentPost.disabled = true;
        nowFeedCommentPost.style.cursor = "auto"
    }
    
}


// 댓글 작성 함수
let $allComment = getAll('.comment');

function commentPost(e, index) {
    e.preventDefault()
    const $commentVoid = get(`.feed[data-id='${index}'] .comments_void`)
    const $nowCommentInput = get(`.feed[data-id='${index}'] .comment_input`)
    
    
    if(!$nowCommentInput.value.trim('')) {
        return
    }
    
    const $commentElement = document.createElement('li')
    $commentElement.classList.add('comment')
    $commentElement.innerHTML = `<div><span class="comment_id">mschoise</span><span class="commment_text">${$nowCommentInput.value}</span></div><label><i class="fa-regular fa-heart like"/><input type="checkbox"></label></i>`
    $commentVoid.appendChild($commentElement)
    
    $nowCommentInput.value = '';
    
    // 작성 후 전체 comment 리스트 업데이트
    $allComment = getAll('.comment');
    commentLikeClick()
}

// 댓글 좋아요
function commentLikeClick() {
    const $commentLikeImg = getAll('.comment .like');
    const $commentCheckbox = getAll('.comment input');

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

commentLikeClick()



const $description_more = getAll('.more_des');
const $commentForm = getAll('.comment_wrap');
const $commentInput = getAll('.comment_input');

// 피드별로 작동해야할 때 이안에서 작업!
for(let i = 0; i < $feeds.length; i++) {
    
    // 불릿 생성
    addBullet(i)
    
    // 화살표 클릭
    const $arrowPrev = get(`.feed[data-id='${i}'] .arrow.prev`);
    const $arrowNext = get(`.feed[data-id='${i}'] .arrow.next`);
    $arrowPrev.addEventListener('click', () => {prevImg(i)})
    $arrowNext.addEventListener('click', () => {nextImg(i)})

    // 더보기 클릭
    $description_more[i].addEventListener('click', moreClick)

    // 댓글 disabled
    $commentInput[i].addEventListener('keyup', (e) => {postDisabled(e, i)})

    // 댓글 작성
    $commentForm[i].addEventListener('submit', (e) => {commentPost(e, i)})
}


