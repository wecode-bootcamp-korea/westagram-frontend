const get = (ele) => document.querySelector(ele);
const getAll = (ele) => document.querySelectorAll(ele);

const $feeds = getAll('.feed');

/*
const myData = {
    id: 0,
    userId: 'mschoise',
    userName: '최승이',
    profileImg: './img/profile.jpeg',
}
const feedData =  [
    {
        id: 0,
        userId: 'reeeed',
        profileImg: './img/profile.jpeg',
        imgSrc: ['./img/red/red_1.jpg','./img/red/red_2.jpg','./img/red/red_3.jpg'],
        description: `보송보송 졸귀탱 흰둥이 인형🤍💙 저세상 귀여움이라는 흰둥이 인형ㅠㅠ @@나 이거 사고시포>< <br>
        🛍프로필 '데코픽' 링크에 판매 링크 있어요!`,
        comments: [
            {id:0, user:'mschoise', text:'댓글쓴다', liked: true},
        ],
        likeNum: 92,
        liked: true,
    },
    {
        id: 1,
        userId: 'yeeeelow',
        profileImg: './img/profile.jpeg',
        imgSrc: ['./img/yellow/yellow_1.jpg','./img/yellow/yellow_2.jpg','./img/yellow/yellow_3.jpg','./img/yellow/yellow_4.jpg','./img/yellow/yellow_5.jpg','./img/yellow/yellow_6.jpg','./img/yellow/yellow_7.jpg'],
        description: `퐁신퐁신 수플레팬케이크를 주문즉시 만들어주는 찐 디저트맛집🍓<br>
        확 트인 오션뷰를 감상할 수 있는 매장으로, 포토존도 풍성하답니다!<br>
        디저트는 수플레, 치즈케이크, 초코푸딩 등 다양해서<br>
        취향에 맞게 음료와 같이 즐길 수 있는 카페입니다!😆<br>
        커피는 원두 선택이 가능해서 맛있는 커피를 맛 볼 수 있어요!<br>
        시즌에 맞춘 다양한 신메뉴를 꾸준히 출시하고 있다는 점👍<br>
        봄을 맞이하여 딸기 메뉴를 맛보시는건 어떠실까요?!@@`,
        comments: [
            {id:0, user:'wecode', text:'노란색 글에대한 댓글 처음!', liked: true},
        ],
        likeNum: 72,
        liked: true,
    },
    {
        id: 2,
        userId: 'piiiiiink',
        profileImg: './img/profile.jpeg',
        imgSrc: ['./img/pink/pink_1.jpg','./img/pink/pink_2.jpg','./img/pink/pink_3.jpg','./img/pink/pink_4.jpg','./img/pink/pink_5.jpg'],
        description: `아쉬워서 떠나보는 스물다섯 스물하나 촬영지 스팟7💚✨<br><br>
        #전주 에서 촬영이 이뤄진 #스물다섯스물하나<br>
        촬영지 모두 공개합니다~🌈<br>
        모두 희도,이진이가 되어보자~!<br>
        전주제일고등학교에 있는 수돗가에서 촬영은 하지 않고<br>
        제일고 안에서 세트로 촬영했다고 힘!🙏🏻<br><br>
        @@우리도 여기 가볼까?!<br><br>
        🔖전주 #스물다섯스물하나촬영지`,
        comments: [
            {id:0, user:'planner', text:'핑크색 글에대한 댓글이지롱!', liked: false},
        ],
        likeNum: 103,
        liked: true,
    },
]
*/



const $searchBar = get('.search_input')
const $userSearchBox = get('.userSearch_wrap')

$searchBar.addEventListener('focus', () => {
    $userSearchBox.classList.toggle('hidden')
})
$searchBar.addEventListener('blur', () => {
    $userSearchBox.classList.toggle('hidden')
})


// 피드내용 엔터에서 말줄임
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

function slideImg(index, imgCount) {
    const $imgLength = getAll(`.feed[data-id='${index}'] .content_wrap li`).length;
    const $imgWidth = get(`.feed[data-id='${index}'] .content_wrap li`).clientWidth;
    const $imgCover = get(`.feed[data-id='${index}'] .content_wrap ul`);
    $imgCover.style.left = `${$imgWidth * -imgCount}px`

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
    slideImg(index, $imgCount)
}

function nextImg(index) {
    $imgCount++
    slideImg(index, $imgCount)
}


// 더보기 클릭 함수
function descriptionMoreBtn(e) {
    const feedDataId = e.target.closest('.feed');
    const $this_description = e.target.previousElementSibling;
    const num = feedDataId.dataset.id
    $this_description.innerText = $descriptionAll_origin[num]
    e.target.style.display = "none"
}

// 게시 버튼 함수
function enableCommentBtn(e, index) {
    const nowFeedCommentPost = get(`.feed[data-id='${index}'] .comment_post`)
    const $nowCommentInput = get(`.feed[data-id='${index}'] .comment_input`)
    
    if(e.target.value) {
        if(!$nowCommentInput.value.trim('')) {
            // 빈 칸 입력시 disabled상태 유지
            return
        }
        nowFeedCommentPost.disabled = false;
        nowFeedCommentPost.style.cursor = "pointer"
    } else {
        nowFeedCommentPost.disabled = true;
        nowFeedCommentPost.style.cursor = "auto"
    }
    
}


// 댓글 작성 함수
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
    
    // 리스트 생성 시마다 새로운 리스틑 업데이트하고 이벤트리스너를 달아주기 위해
    commentLikeClick()
    commentRemoveClick()
}

// 댓글 좋아요
function commentLikeClick() {
    $allComment = getAll('.comment');
    const $commentLikeImg = getAll('.comment .like');
    // const $commentCheckbox = getAll('.comment input');

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

// 댓글 삭제
function commentRemoveClick() {
    const $commentRemove = getAll('.comment .remove');
    for(let i = 0; i < $commentRemove.length; i++) {
        $commentRemove[i].addEventListener('click', (e) => {
            e.target.closest('.comment').remove()
        })
    }
}

commentLikeClick()
commentRemoveClick()



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


