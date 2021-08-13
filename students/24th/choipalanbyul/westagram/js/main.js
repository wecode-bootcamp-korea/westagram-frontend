const $navSearch = document.querySelector('.nav_search input')
const $searchPlus = document.querySelector('.search_plus')
const $searchIcon = document.querySelector('#search_icon')
const $love = document.querySelector('#love')
const $feedLikes = document.querySelector('.feed_likes')
const $commentBox = document.querySelector('.comment_box')
const $commentInput = document.querySelector('.comment_input')
const $comment = document.querySelector('.comment')
const $commentEnter = document.querySelector('.comment_enter')
const $keyword = ['wecode_bootcamp']
let keywordd = ""
// 메뉴바 검색기능
function keywordSplit(){
    for(let i = 0; $keyword.length > i; i++ ){
        keywordd += $keyword[i]
    }
    return keywordd.split('')
}
const smallKeyword = keywordSplit()
$navSearch.addEventListener( 'keyup', () => {
    for(let i = 0; $navSearch.value.length > i; i++){
        if ($navSearch.value[i] === smallKeyword[i]){
            $searchPlus.style.display = 'flex'
            i= i+1
            return;
        }
        else {
            $searchPlus.style.display = 'none'
        }
    }
        if(!$navSearch.value){
            $searchPlus.style.display = 'none'
            return;
        }
})

// 메뉴바 검색창 
$navSearch.addEventListener('focus', (event) => {
    event.target.style.textIndent= '20px'
    $searchIcon.style.display = 'none'
    $search.value=''
})
$navSearch.addEventListener('blur', (event) => {
    event.target.style.textIndent = '95px'
    $searchIcon.style.display = 'inline-block'
    $search.value = '검색'
    $searchPlus.style.display = 'none'
})

//댓글 입력창 (키보드입력)
$commentInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && $commentInput.value) {
        $commentBox.innerHTML += '<div class = "comment">'+'<div>' + '<b>wecode_bootcamp </b>'+ $commentInput.value + '</div>' + '<div><i class="fas fa-times"></i><i class="far fa-heart"></i></div>' + '</div>';
        $commentInput.value = ''
        return;
    }
    if ($commentInput.value) {
        $commentEnter.style.color = '#0095F6'
        return;
    }
    if (!$commentInput.value){
        $commentEnter.style.color = '#C1E0FD'
        return;
    }
})

//댓글 입력창 (마우스클릭)
$commentEnter.addEventListener('click', () => {
    if ($commentInput.value) {
        $comment.innerHTML += '<div class = "comment">'+'<div>' + '<b>wecode_bootcamp </b>'+ $commentInput.value + '</div>' + '<div><i class="fas fa-times"></i><i class="far fa-heart"></i></div>' + '</div>';
        $love.setAttribute('class', 'far fa-heart');
        $commentInput.value = ''
    }
})
//댓글 좋아요 구현
$comment.addEventListener('click',(event) => {
    if(event.target.className === "far fa-heart" || 
        event.target.className === "fas fa-heart"){
        if(event.target.style.color === 'rgb(237, 73, 86)'){
            event.target.style.color = 'black'
            event.target.setAttribute('class', 'far fa-heart');
        }
        else{
            event.target.style.color = 'rgb(237, 73, 86)'
            event.target.setAttribute('class', 'fas fa-heart');
            
        }
    }
})
// 댓글 삭제 기능
    $commentBox.addEventListener('click',(event) => {
        if(event.target.className === "fas fa-times"){
            event.target.parentNode.parentNode.remove();
        }
})
// 피드 좋아요 구현
$love.addEventListener('click', () => {
    if($love.style.color === 'rgb(237, 73, 86)'){
        $love.style.color = 'black'
        $love.setAttribute('class', 'far fa-heart');
        $feedLikes.innerHTML = '<b>CSS</b>님 외 3명이 좋아합니다'
    }
    else{
        $love.style.color = 'rgb(237, 73, 86)'
        $love.setAttribute('class', 'fas fa-heart');
        $feedLikes.innerHTML = '<b>ssxst31</b>님 외 4명이 좋아합니다'
        
    }
})


