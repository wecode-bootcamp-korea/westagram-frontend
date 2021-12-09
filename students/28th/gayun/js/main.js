
const $search = document.querySelector('.search');
const $feeds = document.querySelector('.feeds');
const $commentInput = document.querySelector('.comment__input--text');
const $commentButton = document.querySelector('.comment__input--button');
const $commentContainer = document.querySelector('.comments');
const $comments = document.querySelector('.comment');
const $feedButtons = document.querySelector('.feed__button');
const $deleteButton = document.querySelector('.comment__delete-button');
const $myButton = document.querySelector('.my');
const $peopleWhoLike = document.querySelector('.people-who-like__comment');
const $searchResultContainer = document.querySelector('.search__result--container');

$commentButton.addEventListener('click', addComment);
$commentContainer.addEventListener('click', deleteComment);
$feedButtons.addEventListener('click', handleLike);
$search.addEventListener('keyup', searchId);
document.addEventListener('click', handleMyMenu);

const idArr = [["images/profile-img2.jpg", 'wecode_bootcamp', 'wecode | 위코드'], ["images/profile-img.jpg", 'i_love_coding', '아코딩'], [null, 'sunglass', null], [null, 'sweat_shirt', null], [null, 'newziland4043', null], [null, 'huggy_woggy__33', null]];
const peopleWhoLikeArr = ['ace123', 'bbi3', 'case_44', 'catcat_239', '23dd234'];
const myId = 'canon_mj';

$peopleWhoLike.textContent = `${peopleWhoLikeArr[0]}님 외 ${peopleWhoLikeArr.length - 1}명이 좋아합니다.`
let feedData = [];
async function fetchData() {
    feedData = await (await fetch('data/data.json')).json()
}
fetchData()

let displayCount = 0;


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

const skeletonHtml = `
        <div class="skeleton__header">
            <span class="skeleton__header--profileImg"></span>
            <span class="skeleton__header--id"></span>
        </div>
        <div class="skeleton__img">
            <img class="loading" src="images/loading.gif" alt="">
        </div>
        <div class="skeleton__comment">
            <span class="skeleton__comment--id"></span>
            <span class="skeleton__comment--text"></span>
        </div>
        <div class="skeleton__comment">
            <span class="skeleton__comment--id"></span>
            <span class="skeleton__comment--text" id="comment--text2"></span>
        </div>
        <div class="skeleton__comment--input"></div>
`
const $feedEnd = document.querySelector('.feed__end');
const callback = (entry, observer) => {
    if(entry[0].isIntersecting && entry[0].intersectionRatio === 1) {
         loading();
    } else {

    }
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  }

const observer = new IntersectionObserver(callback, options)
observer.observe($feedEnd);


const $newFeed = document.createElement('article');

function loading() {
    $newFeed.classList.add('skeleton');
    $newFeed.innerHTML = skeletonHtml;
    $feeds.appendChild($newFeed);
    displayCount++;
    setTimeout(() => {
        displayFeed(displayCount);
    }, 2000)

}

// let commentHtml;
function displayFeed(index) {
       const data = feedData[index];
    //    console.log(data)
       $newFeed.classList.remove('skeleton');
       $newFeed.classList.add('feed');
    //    data.comment.forEach((com) => console.log(com.commentId, com.commentText))
    console.log(data.comment)   
    data.comment.forEach((com) => {
        console.log(com.commentId, com.commentText)
    })
    const commentHtml = data.comment.map((com) => {
        return `
            <ul class="comment">
                <span class="comment_item">
                    <span class="comment__id">${com.commentId}</span>
                    <span class="comment__text">${com.commentText}</span>
                </span>
                <button class="comment__delete-button">
                    <i class="fas fa-times"></i>
                </button>
            </ul>`
       }).join('');
       console.log(commentHtml ?? 'where is it...?')
       $newFeed.innerHTML = `
       <article class="feed">
       <div class="feed__header">
           <span class="feed__header--user">
               <span class="feed__header--img-container">
                   <img class="feed__header--img" src="${data.profileImg}" alt="">
               </span>
               <span class="feed__header--id">${data.feedId}</span>
           </span>
           <button class="feed_header--button">
               <i class="fas fa-ellipsis-h"></i>
           </button>
       </div>
       <div class="feed__img-container">
           <img src="${data.imgContent}" alt="" class="feed-img">
       </div>
       <div class="feed__buttons">
           <span class="feed__buttons1">
               <button class="feed__button">
                   <i class="far fa-heart"></i>
               </button>
               <button class="feed__button">
                   <i class="far fa-comment"></i>
               </button>
               <button class="feed__button">
                   <i class="far fa-share-square"></i>
               </button>
           </span>
           <span class="feed__buttons2">
               <button class="feed__button">
                   <i class="far fa-bookmark"></i>
               </button>
           </span>
       </div>
       <div class="people-who-like">
           <img src="images/profile-img2.jpg" alt="" class="people-who-like__img">
           <span class="people-who-like__comment">${data.likesCount[0]}님 외 ${data.likesCount.length}명이 좋아합니다.</span>
       </div>
       <div class="feed__textContent">${data.textContent}</div>
       <li class="comments">
           ${commentHtml}
       </li>
       <form class="comment__input">
           <input type="text" placeholder=" 댓글 달기..." name="" id="" class="comment__input--text">
           <button class="comment__input--button">게시</button>
       </form>
   </article>
       `
}

